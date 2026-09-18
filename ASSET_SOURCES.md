# Recap image source audit

Audit date: September 17, 2026. Scope: the 122 images currently used in Recaps #1–4; unused assets are excluded.

## Required sourcing standard

Use a main image displayed on a Homestuck story page, or a complete frame captured from that page’s Flash animation. Prefer the act being recapped; identify any earlier-act exception. A filename or source link alone does not verify provenance.

An extracted bitmap, background, or character layer inside a SWF is official source material, but does **not** establish that the complete image was ever displayed as that frame. External diagrams linked in comic text do not meet the main-panel requirement. Do not introduce either as a new recap image.

Keep the actual source page in the filename, and record which panel or Flash scene was used. Resize to 650px width with the original proportions, without padding or cropping the artwork. Preserve native animation.

## Findings

All **122 active recap images** now meet the source-type requirement: **93 main comic panels** and **29 complete Flash frames**. No externally linked diagram or isolated Flash artwork layer remains in use.

- The 58 main panels in Recaps #1–3 were compared against the image files referenced by the official story pages. All 317 frames across those files matched after normalization, not just their first frames.
- Nine Recap #3 images were exported from the complete official SWF timeline at its native 650 × 450 stage size. These replace the external map, seven isolated artwork layers, and an older Jack still. The frame numbers below identify the exact exports.
- The other 17 Flash stills were visually checked against complete frames rendered from their official SWFs. Their compositions and scenes match; the reference frame numbers below identify the matching scene, rather than claiming byte-identical screenshots. Capture timing, scaling, and GIF palettes can differ.
- Recap #4 adds 35 main panels (118 frames), copied byte-for-byte from the official source GIFs, and three complete frames exported from the official *Make her pay* SWF. All 38 images come from Act 5 Act 1. The native panels already measure 650 pixels wide, so no resizing or re-encoding was needed.
- **One act preference exception remains:** Recap #2 slide 18 uses the full Midnight Crew group shot from Act 3 page 833 in its Intermission section. This is within Recap #2’s reading range, and the actual source is correctly linked. All other active images come from the corresponding act or Intermission.

The Rose illustration previously used on Recap #3 slide 15 was official embedded artwork, not fan art, but it did not establish a complete displayed frame. It has been replaced with the gate-blast scene from the same Act 4 animation. Slide 3 now uses a full view of Skaia from that animation instead of the externally linked map.

## Verification method and scope

Source media paths were read from the official Homestuck story-page components. Main-panel comparisons included every animation frame. Flash verification used JPEXS FFDec 26.3.0 to render the complete root timeline with its backgrounds, layers, and effects; individual bitmap exports were not accepted as frames. Frame numbers are one-based and refer to the linked SWF, not a video adaptation.

New frame exports retain the native stage proportions and are encoded as static GIFs without added margins or cropping. Existing animated panels were left intact. All 122 active images are 650 pixels wide, their HTML dimensions match their files, and the revised alternative text describes the selected images.

This audit covers images referenced by Recaps #1–4, not every unused file in `assets/`. The former `A4_02_story-1674.gif` diagram remains unused; it must not be reused under this sourcing standard. Other unused assets require a source check before use.

## Recap #1

| Slide | Asset | Source | Verification |
| --- | --- | --- | --- |
| 2 | `A1_01_story-0001.gif` | [p. 1](https://homestuck.com/story/1) | Main panel matched: [00001.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-1/00001.gif). |
| 3 | `A1_02_story-0004.gif` | [p. 4](https://homestuck.com/story/4) | Main panel matched: [00004.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-1/00004.gif). |
| 4 | `A1_03_story-0090.gif` | [p. 90](https://homestuck.com/story/90) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-1/00090.swf), near frame 61. |
| 5 | `A1_04_story-0132.gif` | [p. 132](https://homestuck.com/story/132) | Main panel matched: [00132.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-1/00132.gif). |
| 6 | `A1_05_story-0139.gif` | [p. 139](https://homestuck.com/story/139) | Main panel matched: [00139.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-1/00139.gif). |
| 7 | `A1_06_story-0185.gif` | [p. 185](https://homestuck.com/story/185) | Main panel matched: [00185.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-1/00185.gif). |
| 8 | `A1_07_story-0246.gif` | [p. 246](https://homestuck.com/story/246) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-1/00246retcon.swf), near frame 561. |
| 9 | `A1_08_story-0214.gif` | [p. 214](https://homestuck.com/story/214) | Main panel matched: [00214.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-1/00214.gif). |
| 10 | `A1_09_story-0246.gif` | [p. 246](https://homestuck.com/story/246) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-1/00246retcon.swf), near frame 41. |
| 11 | `A2_01_story-0248.gif` | [p. 248](https://homestuck.com/story/248) | Main panel matched: [00248retcon.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00248retcon.gif). |
| 12 | `A2_02_story-0250.gif` | [p. 250](https://homestuck.com/story/250) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-2/00250.swf), near frame 1076. |
| 13 | `A2_03_story-0705.gif` | [p. 705](https://homestuck.com/story/705) | Main panel matched: [00705.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00705.gif). |
| 14 | `A2_04_story-0290.gif` | [p. 290](https://homestuck.com/story/290) | Main panel matched: [00290.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00290.gif). |
| 15 | `A2_05_story-0355.gif` | [p. 355](https://homestuck.com/story/355) | Main panel matched: [00355.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00355.gif). |
| 16 | `A2_06-story-0419.gif` | [p. 419](https://homestuck.com/story/419) | Main panel matched: [00419_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00419_2.gif). |
| 17 | `A2_07_story-0420.gif` | [p. 420](https://homestuck.com/story/420) | Main panel matched: [00420.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00420.gif). |
| 18 | `A2_08_story-0422.gif` | [p. 422](https://homestuck.com/story/422) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-2/00422.swf), near frame 591. |
| 19 | `A2_09_story-0425.gif` | [p. 425](https://homestuck.com/story/425) | Main panel matched: [00425_retcon.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00425_retcon.gif). |
| 20 | `A2_10_story-0634.gif` | [p. 634](https://homestuck.com/story/634) | Main panel matched: [00634.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00634.gif). |
| 21 | `A2_11_story-0654.gif` | [p. 654](https://homestuck.com/story/654) | Main panel matched: [00654_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00654_1.gif). |
| 22 | `A2_12_story-0665.gif` | [p. 665](https://homestuck.com/story/665) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-2/00665.swf), near frame 151. |
| 23 | `A2_13_story-0711.gif` | [p. 711](https://homestuck.com/story/711) | Main panel matched: [00711.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00711.gif). |
| 24 | `A2_14_story-0749.gif` | [p. 749](https://homestuck.com/story/749) | Main panel matched: [00749.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-2/00749.gif). |
| 25 | `A2_15_story-0757.gif` | [p. 757](https://homestuck.com/story/757) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-2/00757.swf), near frame 706. |

## Recap #2

| Slide | Asset | Source | Verification |
| --- | --- | --- | --- |
| 2 | `A3_01_story-0760.gif` | [p. 760](https://homestuck.com/story/760) | Main panel matched: [00760.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/00760.gif). |
| 3 | `A3_02_story-0789.gif` | [p. 789](https://homestuck.com/story/789) | Main panel matched: [00789.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/00789.gif). |
| 4 | `A3_03_story-0993.gif` | [p. 993](https://homestuck.com/story/993) | Main panel matched: [00993_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/00993_2.gif). |
| 5 | `A3_04_story-0836.gif` | [p. 836](https://homestuck.com/story/836) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-3/00836.swf), near frame 91. |
| 6 | `A3_05_story-0934.gif` | [p. 934](https://homestuck.com/story/934) | Main panel matched: [00934.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/00934.gif). |
| 7 | `A3_06_story-1001.gif` | [p. 1001](https://homestuck.com/story/1001) | Main panel matched: [01001.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01001.gif). |
| 8 | `A3_07_story-1029.gif` | [p. 1029](https://homestuck.com/story/1029) | Main panel matched: [01029_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01029_1.gif). |
| 9 | `A3_08_story-1049.gif` | [p. 1049](https://homestuck.com/story/1049) | Main panel matched: [01049.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01049.gif). |
| 10 | `A3_09_story-1100.gif` | [p. 1100](https://homestuck.com/story/1100) | Main panel matched: [01100.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01100.gif). |
| 11 | `A3_10_story-1127.gif` | [p. 1127](https://homestuck.com/story/1127) | Main panel matched: [01127.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01127.gif). |
| 12 | `A3_11_story-1099.gif` | [p. 1099](https://homestuck.com/story/1099) | Main panel matched: [01099.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01099.gif). |
| 13 | `A3_12_story-1138.gif` | [p. 1138](https://homestuck.com/story/1138) | Main panel matched: [01138.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-3/01138.gif). |
| 14 | `A3_13_story-1070.gif` | [p. 1070](https://homestuck.com/story/1070) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-3/01070.swf), near frame 1431. |
| 15 | `A3_14_story-1149.gif` | [p. 1149](https://homestuck.com/story/1149) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-3/01149.swf), near frame 3365. |
| 16 | `A3_15_story-1149.gif` | [p. 1149](https://homestuck.com/story/1149) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-3/01149.swf), near frame 4545. |
| 17 | `I1_01_story-1155.gif` | [p. 1155](https://homestuck.com/story/1155) | Main panel matched: [01155.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/int-1/01155.gif). |
| 18 | `I1_02_story-0833.gif` | [p. 833](https://homestuck.com/story/833) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-3/00833.swf), near frame 431. Earlier-act source (Act 3), within this recap’s reading range. |
| 19 | `I1_03_story-1170.gif` | [p. 1170](https://homestuck.com/story/1170) | Main panel matched: [01170.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/int-1/01170.gif). |
| 20 | `I1_04_story-1267.gif` | [p. 1267](https://homestuck.com/story/1267) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/int-1/01267.swf), near frame 796. |
| 21 | `I1_05_story-1336.gif` | [p. 1336](https://homestuck.com/story/1336) | Main panel matched: [01336.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/int-1/01336.gif). |
| 22 | `I1_06_story-1346.gif` | [p. 1346](https://homestuck.com/story/1346) | Main panel matched: [01346.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/int-1/01346.gif). |
| 23 | `I1_07_story-1353.gif` | [p. 1353](https://homestuck.com/story/1353) | Main panel matched: [01353.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/int-1/01353.gif). |

## Recap #3

| Slide | Asset | Source | Verification |
| --- | --- | --- | --- |
| 2 | `A4_01_story-1358.gif` | [p. 1358](https://homestuck.com/story/1358) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01358.swf), near frame 466. |
| 3 | `A4_02_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 1415. |
| 4 | `A4_03_story-1471.gif` | [p. 1471](https://homestuck.com/story/1471) | Main panel matched: [01471_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01471_2.gif). |
| 5 | `A4_04_story-1626.gif` | [p. 1626](https://homestuck.com/story/1626) | Main panel matched: [01626_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01626_1.gif). |
| 6 | `A4_05_story-1507.gif` | [p. 1507](https://homestuck.com/story/1507) | Main panel matched: [01507_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01507_2.gif). |
| 7 | `A4_06_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), near frame 850. |
| 8 | `A4_07_story-1640.gif` | [p. 1640](https://homestuck.com/story/1640) | Main panel matched: [01640.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01640.gif). |
| 9 | `A4_08_story-1644.gif` | [p. 1644](https://homestuck.com/story/1644) | Main panel matched: [01644.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01644.gif). |
| 10 | `A4_09_story-1650.gif` | [p. 1650](https://homestuck.com/story/1650) | Main panel matched: [01650.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01650.gif). |
| 11 | `A4_10_story-1668.gif` | [p. 1668](https://homestuck.com/story/1668) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01668.swf), near frame 2356. |
| 12 | `A4_11_story-1709.gif` | [p. 1709](https://homestuck.com/story/1709) | Main panel matched: [01709.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01709.gif). |
| 13 | `A4_12_story-1854.gif` | [p. 1854](https://homestuck.com/story/1854) | Main panel matched: [01854_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01854_2.gif). |
| 14 | `A4_13_story-1863.gif` | [p. 1863](https://homestuck.com/story/1863) | Main panel matched: [01863.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01863.gif). |
| 15 | `A4_14_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 6196. |
| 16 | `A4_15_story-1732.gif` | [p. 1732](https://homestuck.com/story/1732) | Main panel matched: [01732.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01732.gif). |
| 17 | `A4_16_story-1758.gif` | [p. 1758](https://homestuck.com/story/1758) | Main panel matched: [01758.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01758.gif). |
| 18 | `A4_17_story-1871.gif` | [p. 1871](https://homestuck.com/story/1871) | Main panel matched: [01871.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01871.gif). |
| 19 | `A4_18_story-1903.gif` | [p. 1903](https://homestuck.com/story/1903) | Main panel matched: [01903.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01903.gif). |
| 20 | `A4_19_story-1931.gif` | [p. 1931](https://homestuck.com/story/1931) | Complete-frame composition verified against [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01931retcon.swf), near frame 2471. |
| 21 | `A4_20_story-1481.gif` | [p. 1481](https://homestuck.com/story/1481) | Main panel matched: [01481.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01481.gif). |
| 22 | `A4_21_story-1553.gif` | [p. 1553](https://homestuck.com/story/1553) | Main panel matched: [01553.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01553.gif). |
| 23 | `A4_22_story-1668.gif` | [p. 1668](https://homestuck.com/story/1668) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01668.swf), frame 2884. |
| 24 | `A4_23_story-1790.gif` | [p. 1790](https://homestuck.com/story/1790) | Main panel matched: [01790.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01790.gif). |
| 25 | `A4_24_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 1550. |
| 26 | `A4_25_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 1800. |
| 27 | `A4_26_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 2625. |
| 28 | `A4_27_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 5850. |
| 29 | `A4_28_story-1909.gif` | [p. 1909](https://homestuck.com/story/1909) | Main panel matched: [01909.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01909.gif). |
| 30 | `A4_29_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 2950. |
| 31 | `A4_30_story-1968.gif` | [p. 1968](https://homestuck.com/story/1968) | Main panel matched: [01968.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01968.gif). |
| 32 | `A4_31_story-1940.gif` | [p. 1940](https://homestuck.com/story/1940) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-4/01940.swf), frame 3700. |
| 33 | `A4_32_story-1946.gif` | [p. 1946](https://homestuck.com/story/1946) | Main panel matched: [01946_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01946_1.gif). |
| 34 | `A4_33_story-1949.gif` | [p. 1949](https://homestuck.com/story/1949) | Main panel matched: [01949_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01949_1.gif). |
| 35 | `A4_34_story-1961.gif` | [p. 1961](https://homestuck.com/story/1961) | Main panel matched: [01961_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01961_1.gif). |
| 36 | `A4_35_story-1972.gif` | [p. 1972](https://homestuck.com/story/1972) | Main panel matched: [01972_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01972_2.gif). |
| 37 | `A4_36_story-1979.gif` | [p. 1979](https://homestuck.com/story/1979) | Main panel matched: [01979.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01979.gif). |
| 38 | `A4_37_story-1621.gif` | [p. 1621](https://homestuck.com/story/1621) | Main panel matched: [01621.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01621.gif). |
| 39 | `A4_38_story-1981.gif` | [p. 1981](https://homestuck.com/story/1981) | Main panel matched: [01981_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-4/01981_1.gif). |

## Recap #4

The reading covers story pages 1989–2625. Official media basenames sometimes differ from story-page numbers; each asset suffix below uses the actual story page. The two diagrams are main comic panels, not externally linked illustrations. Native black edges in a Flash frame are part of its full stage and have not been added by standardization.

| Slide | Asset | Source | Verification |
| --- | --- | --- | --- |
| 2 | `A5_01_story-1989.gif` | [p. 1989](https://homestuck.com/story/1989) | Main panel matched: [01989.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/01989.gif) (panel 1). |
| 3 | `A5_02_story-1994.gif` | [p. 1994](https://homestuck.com/story/1994) | Main panel matched: [01994_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/01994_2.gif) (panel 2). |
| 4 | `A5_03_story-2069.gif` | [p. 2069](https://homestuck.com/story/2069) | Main panel matched: [02069.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02069.gif) (panel 1). |
| 5 | `A5_04_story-2076.gif` | [p. 2076](https://homestuck.com/story/2076) | Main panel matched: [02076.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02076.gif) (panel 1). |
| 6 | `A5_05_story-2031.gif` | [p. 2031](https://homestuck.com/story/2031) | Main panel matched: [02031.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02031.gif) (panel 1). |
| 7 | `A5_06_story-2012.gif` | [p. 2012](https://homestuck.com/story/2012) | Main panel matched: [02012.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02012.gif) (panel 1). |
| 8 | `A5_07_story-2101.gif` | [p. 2101](https://homestuck.com/story/2101) | Main panel matched: [02101.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02101.gif) (panel 1). |
| 9 | `A5_08_story-2539.gif` | [p. 2539](https://homestuck.com/story/2539) | Main panel matched: [02538.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02538.gif) (panel 1). |
| 10 | `A5_09_story-2134.gif` | [p. 2134](https://homestuck.com/story/2134) | Main panel matched: [02134.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02134.gif) (panel 1). |
| 11 | `A5_10_story-2195.gif` | [p. 2195](https://homestuck.com/story/2195) | Main panel matched: [02195.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02195.gif) (panel 1). |
| 12 | `A5_11_story-2176.gif` | [p. 2176](https://homestuck.com/story/2176) | Main panel matched: [02176.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02176.gif) (panel 2). |
| 13 | `A5_12_story-2250.gif` | [p. 2250](https://homestuck.com/story/2250) | Main panel matched: [02250.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02250.gif) (panel 1). |
| 14 | `A5_13_story-2253.gif` | [p. 2253](https://homestuck.com/story/2253) | Main panel matched: [02253.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02253.gif) (panel 1). |
| 15 | `A5_14_story-2578.gif` | [p. 2578](https://homestuck.com/story/2578) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-5-act-1/02577.swf), frame 2071. |
| 16 | `A5_15_story-2088.gif` | [p. 2088](https://homestuck.com/story/2088) | Main panel matched: [02088.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02088.gif) (panel 1). |
| 17 | `A5_16_story-2192.gif` | [p. 2192](https://homestuck.com/story/2192) | Main panel matched: [02192.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02192.gif) (panel 1). |
| 18 | `A5_17_story-2285.gif` | [p. 2285](https://homestuck.com/story/2285) | Main panel matched: [02285.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02285.gif) (panel 1). |
| 19 | `A5_18_story-2346.gif` | [p. 2346](https://homestuck.com/story/2346) | Main panel matched: [02346.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02346.gif) (panel 1). |
| 20 | `A5_19_story-2336.gif` | [p. 2336](https://homestuck.com/story/2336) | Main panel matched: [02336.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02336.gif) (panel 1). |
| 21 | `A5_20_story-2393.gif` | [p. 2393](https://homestuck.com/story/2393) | Main panel matched: [02393.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02393.gif) (panel 1). |
| 22 | `A5_21_story-2387.gif` | [p. 2387](https://homestuck.com/story/2387) | Main panel matched: [02387_1.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02387_1.gif) (panel 1). |
| 23 | `A5_22_story-2408.gif` | [p. 2408](https://homestuck.com/story/2408) | Main panel matched: [02407.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02407.gif) (panel 1). |
| 24 | `A5_23_story-2422.gif` | [p. 2422](https://homestuck.com/story/2422) | Main panel matched: [02421.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02421.gif) (panel 1). |
| 25 | `A5_24_story-2463.gif` | [p. 2463](https://homestuck.com/story/2463) | Main panel matched: [02462.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02462.gif) (panel 1). |
| 26 | `A5_25_story-2480.gif` | [p. 2480](https://homestuck.com/story/2480) | Main panel matched: [02479.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02479.gif) (panel 1). |
| 27 | `A5_26_story-2319.gif` | [p. 2319](https://homestuck.com/story/2319) | Main panel matched: [02319.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02319.gif) (panel 1). |
| 28 | `A5_27_story-2305.gif` | [p. 2305](https://homestuck.com/story/2305) | Main panel matched: [02305.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02305.gif) (panel 1). |
| 29 | `A5_28_story-2311.gif` | [p. 2311](https://homestuck.com/story/2311) | Main panel matched: [02311.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02311.gif) (panel 1). |
| 30 | `A5_29_story-2547.gif` | [p. 2547](https://homestuck.com/story/2547) | Main panel matched: [02546_2.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02546_2.gif) (panel 3). |
| 31 | `A5_30_story-2578.gif` | [p. 2578](https://homestuck.com/story/2578) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-5-act-1/02577.swf), frame 2881. |
| 32 | `A5_31_story-2578.gif` | [p. 2578](https://homestuck.com/story/2578) | Complete frame exported from [official SWF](https://storage.homestuck.com/story/homestuck/media/flashes/act-5-act-1/02577.swf), frame 3935. |
| 33 | `A5_32_story-2590.gif` | [p. 2590](https://homestuck.com/story/2590) | Main panel matched: [02589.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02589.gif) (panel 1). |
| 34 | `A5_33_story-2594.gif` | [p. 2594](https://homestuck.com/story/2594) | Main panel matched: [02593.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02593.gif) (panel 1). |
| 35 | `A5_34_story-2599.gif` | [p. 2599](https://homestuck.com/story/2599) | Main panel matched: [02598.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02598.gif) (panel 1). |
| 36 | `A5_35_story-2603.gif` | [p. 2603](https://homestuck.com/story/2603) | Main panel matched: [02602.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02602.gif) (panel 1). |
| 37 | `A5_36_story-2607.gif` | [p. 2607](https://homestuck.com/story/2607) | Main panel matched: [02606_retcon.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02606_retcon.gif) (panel 1). |
| 38 | `A5_37_story-2608.gif` | [p. 2608](https://homestuck.com/story/2608) | Main panel matched: [02607.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02607.gif) (panel 1). |
| 39 | `A5_38_story-2624.gif` | [p. 2624](https://homestuck.com/story/2624) | Main panel matched: [02623.gif](https://storage.homestuck.com/story/homestuck/media/images/panels/act-5-act-1/02623.gif) (panel 1). |
