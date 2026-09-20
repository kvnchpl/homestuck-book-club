#!/usr/bin/env python3
"""Create smaller WebP candidates without modifying source artwork.

Requires Pillow and gif2webp (libwebp). Only candidates smaller than their source
are written. Use originals as inputs, not previously compressed derivatives.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import json
import shutil
import subprocess
import tempfile

from PIL import Image


def animation_info(path):
    with Image.open(path) as image:
        durations = []
        for frame in range(image.n_frames):
            image.seek(frame)
            image.load()
            durations.append(image.info.get('duration', 0))
        return image.size, image.n_frames, sum(durations), image.info.get('loop')


def optimize(source, output_dir, quality, max_width):
    destination = output_dir / source.with_suffix('.webp').name
    if destination.resolve() == source.resolve():
        raise ValueError(f'Use a separate output directory for {source}')
    before = source.stat().st_size
    size, frames, duration, loop = animation_info(source)
    with tempfile.TemporaryDirectory() as temporary:
        candidates = []
        for lossless in (False, True):
            candidate = Path(temporary) / f'{lossless}.webp'
            if source.suffix.lower() == '.gif':
                if max_width and size[0] > max_width:
                    raise ValueError('Keep GIF animation dimensions; resize its original artwork separately')
                command = ['gif2webp', '-quiet', '-m', '6', '-q', '100' if lossless else str(quality),
                           '-metadata', 'none']
                if not lossless:
                    command += ['-lossy', '-sharp_yuv']
                subprocess.run([*command, str(source), '-o', str(candidate)], check=True)
            else:
                with Image.open(source) as image:
                    if image.n_frames != 1:
                        raise ValueError('Use the original GIF for animated images')
                    if max_width and image.width > max_width:
                        image = image.resize((max_width, round(image.height * max_width / image.width)), Image.Resampling.LANCZOS)
                    image.save(candidate, 'WEBP', quality=quality, method=6, lossless=lossless)
            candidates.append(candidate)
        best = min(candidates, key=lambda path: path.stat().st_size)
        result_size, result_frames, result_duration, result_loop = animation_info(best)
        expected_size = (max_width, round(size[1] * max_width / size[0])) if max_width and size[0] > max_width else size
        assert result_size == expected_size, f'{source}: changed proportions'
        if frames > 1:
            # gif2webp may merge identical frames, but must retain the timeline.
            expected_loop = 1 if loop is None else (loop + 1 if loop else 0)
            assert result_frames > 1 and result_duration == duration and result_loop == expected_loop, f'{source}: changed animation timing/loop'
        after = best.stat().st_size
        if after < before:
            shutil.copyfile(best, destination)
        return {'source': str(source), 'output': str(destination) if after < before else None,
                'before': before, 'after': min(before, after), 'width': result_size[0],
                'height': result_size[1], 'frames': result_frames,
                'duration_ms': result_duration, 'lossless': best.stem == 'True'}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('images', nargs='+', type=Path)
    parser.add_argument('--output-dir', required=True, type=Path)
    parser.add_argument('--quality', type=int, default=65)
    parser.add_argument('--max-width', type=int)
    args = parser.parse_args()
    if not 0 <= args.quality <= 100 or (args.max_width is not None and args.max_width < 1):
        parser.error('quality must be 0–100 and max-width must be positive')
    if len({p.stem for p in args.images}) != len(args.images):
        parser.error('input basenames must be unique')
    args.output_dir.mkdir(parents=True, exist_ok=True)
    with ThreadPoolExecutor(max_workers=4) as workers:
        results = list(workers.map(lambda source: optimize(source, args.output_dir, args.quality, args.max_width), args.images))
    print(json.dumps(results, indent=2))


if __name__ == '__main__':
    main()
