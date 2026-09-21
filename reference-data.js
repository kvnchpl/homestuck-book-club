// Spoiler-aware reference data.
// Each user-facing variant includes sourcePage metadata for manual fact-checking.
// sourceKind is informational only: "intro" identifies a formal character intro,
// "direct" means the cited page directly/textually supports the displayed claim,
// "visual" means the claim is established by the page's image/animation rather than
// its indexed prose, "composite" means the displayed wording combines claims from
// sourcePage plus sourcePages, "editorial" identifies a reference-page organizational
// label, and "boundary" is only a conservative stage-end checkpoint, not direct evidence.
// sourcePages lists additional support; sourceNote records special audit context.
// A source field is only treated as verified when its section is listed in sourceAudit.
//
// Each variant becomes available at `from` and remains in effect until a later
// variant for the same property supersedes it. If no variant is available yet,
// that property is not rendered at all.
window.HOMESTUCK_REFERENCE = {
  "availableThrough": "act-5-act-1",
  "stages": [
    {
      "value": 1,
      "key": "act-1",
      "label": "Act 1",
      "shortLabel": "Act 1",
      "endPage": 247,
      "sourcePage": 247,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 2,
      "key": "act-2",
      "label": "Act 2",
      "shortLabel": "Act 2",
      "endPage": 758,
      "sourcePage": 758,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 3,
      "key": "act-3",
      "label": "Act 3",
      "shortLabel": "Act 3",
      "endPage": 1153,
      "sourcePage": 1153,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 4,
      "key": "intermission",
      "label": "Intermission",
      "shortLabel": "Inter.",
      "endPage": 1357,
      "sourcePage": 1357,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 5,
      "key": "act-4",
      "label": "Act 4",
      "shortLabel": "Act 4",
      "endPage": 1988,
      "sourcePage": 1988,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 6,
      "key": "act-5-act-1",
      "label": "Act 5 Act 1",
      "shortLabel": "A5A1",
      "endPage": 2625,
      "sourcePage": 2625,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 7,
      "key": "act-5-act-2-part-1",
      "label": "Act 5 Act 2 (Part 1)",
      "shortLabel": "A5A2P1",
      "endPage": 3238,
      "sourcePage": 3238,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 8,
      "key": "act-5-act-2-part-2",
      "label": "Act 5 Act 2 (Part 2)",
      "shortLabel": "A5A2P2",
      "endPage": 3762,
      "sourcePage": 3762,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 9,
      "key": "act-5-act-2-part-3",
      "label": "Act 5 Act 2 (Part 3)",
      "shortLabel": "A5A2P3",
      "endPage": 4110,
      "sourcePage": 4110,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 10,
      "key": "intermission-2",
      "label": "Intermission 2",
      "shortLabel": "I2",
      "endPage": 4112,
      "sourcePage": 4112,
      "sourceKind": "boundary",
      "section": "Part 1"
    },
    {
      "value": 11,
      "key": "act-6-act-1",
      "label": "Act 6 Act 1",
      "shortLabel": "A6A1",
      "endPage": 4294,
      "sourcePage": 4294,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 12,
      "key": "act-6-intermission-1",
      "label": "Act 6 Intermission 1",
      "shortLabel": "A6I1",
      "endPage": 4419,
      "sourcePage": 4419,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 13,
      "key": "act-6-act-2",
      "label": "Act 6 Act 2",
      "shortLabel": "A6A2",
      "endPage": 4666,
      "sourcePage": 4666,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 14,
      "key": "act-6-intermission-2",
      "label": "Act 6 Intermission 2",
      "shortLabel": "A6I2",
      "endPage": 4819,
      "sourcePage": 4819,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 15,
      "key": "act-6-act-3",
      "label": "Act 6 Act 3",
      "shortLabel": "A6A3",
      "endPage": 5262,
      "sourcePage": 5262,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 16,
      "key": "act-6-intermission-3",
      "label": "Act 6 Intermission 3",
      "shortLabel": "A6I3",
      "endPage": 5437,
      "sourcePage": 5437,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 17,
      "key": "act-6-act-4",
      "label": "Act 6 Act 4",
      "shortLabel": "A6A4",
      "endPage": 5440,
      "sourcePage": 5440,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 18,
      "key": "act-6-intermission-4",
      "label": "Act 6 Intermission 4",
      "shortLabel": "A6I4",
      "endPage": 5511,
      "sourcePage": 5511,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 19,
      "key": "act-6-act-5",
      "label": "Act 6 Act 5",
      "shortLabel": "A6A5",
      "endPage": 5926,
      "sourcePage": 5926,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 20,
      "key": "act-6-intermission-5",
      "label": "Act 6 Intermission 5",
      "shortLabel": "A6I5",
      "endPage": 6242,
      "sourcePage": 6242,
      "sourceKind": "boundary",
      "section": "Part 2"
    },
    {
      "value": 21,
      "key": "act-6-act-6-act-1",
      "label": "Act 6 Act 6 Act 1",
      "shortLabel": "A6A6A1",
      "endPage": 6277,
      "sourcePage": 6277,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 22,
      "key": "act-6-act-6-intermission-1",
      "label": "Act 6 Act 6 Intermission 1",
      "shortLabel": "A6A6I1",
      "endPage": 6474,
      "sourcePage": 6474,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 23,
      "key": "act-6-act-6-act-2",
      "label": "Act 6 Act 6 Act 2",
      "shortLabel": "A6A6A2",
      "endPage": 6530,
      "sourcePage": 6530,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 24,
      "key": "act-6-act-6-intermission-2",
      "label": "Act 6 Act 6 Intermission 2",
      "shortLabel": "A6A6I2",
      "endPage": 6852,
      "sourcePage": 6852,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 25,
      "key": "act-6-act-6-act-3",
      "label": "Act 6 Act 6 Act 3",
      "shortLabel": "A6A6A3",
      "endPage": 6900,
      "sourcePage": 6900,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 26,
      "key": "act-6-act-6-intermission-3",
      "label": "Act 6 Act 6 Intermission 3",
      "shortLabel": "A6A6I3",
      "endPage": 6920,
      "sourcePage": 6920,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 27,
      "key": "act-6-act-6-act-4",
      "label": "Act 6 Act 6 Act 4",
      "shortLabel": "A6A6A4",
      "endPage": 6943,
      "sourcePage": 6943,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 28,
      "key": "act-6-act-6-intermission-4",
      "label": "Act 6 Act 6 Intermission 4",
      "shortLabel": "A6A6I4",
      "endPage": 7408,
      "sourcePage": 7408,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 29,
      "key": "act-6-act-6-act-5",
      "label": "Act 6 Act 6 Act 5",
      "shortLabel": "A6A6A5",
      "endPage": 7448,
      "sourcePage": 7448,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 30,
      "key": "act-6-act-6-intermission-5",
      "label": "Act 6 Act 6 Intermission 5",
      "shortLabel": "A6A6I5",
      "endPage": 8086,
      "sourcePage": 8086,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 31,
      "key": "act-6-act-6-act-6",
      "label": "Act 6 Act 6 Act 6",
      "shortLabel": "A6A6A6",
      "endPage": 8126,
      "sourcePage": 8126,
      "sourceKind": "boundary",
      "section": "Part 3"
    },
    {
      "value": 32,
      "key": "act-7",
      "label": "Act 7",
      "shortLabel": "A7",
      "endPage": 8129,
      "sourcePage": 8129,
      "sourceKind": "boundary",
      "section": "Part 3"
    }
  ],
  "groups": [
    {
      "id": "kids",
      "title": [
        {
          "from": "act-1",
          "value": "THE KIDS",
          "sourcePage": 3,
          "sourcePages": [
            216
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-2",
          "value": "THE KIDS",
          "sourcePage": 3,
          "sourcePages": [
            216,
            311
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-3",
          "value": "THE KIDS",
          "sourcePage": 3,
          "sourcePages": [
            216,
            311,
            766
          ],
          "sourceKind": "editorial"
        }
      ]
    },
    {
      "id": "trolls",
      "title": [
        {
          "from": "act-5-act-1",
          "value": "THE TROLLS",
          "sourcePage": 1994,
          "sourcePages": [
            2012,
            2031,
            2076,
            2101,
            2134,
            2156,
            2195,
            2211,
            2323,
            2408,
            2422
          ],
          "sourceKind": "editorial"
        }
      ]
    },
    {
      "id": "guardians-sprites",
      "title": [
        {
          "from": "act-1",
          "value": "GUARDIANS",
          "sourcePage": 88,
          "sourceKind": "editorial"
        },
        {
          "from": "act-2",
          "value": "GUARDIANS & SPRITES",
          "sourcePage": 88,
          "sourcePages": [
            388,
            420,
            757
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-3",
          "value": "GUARDIANS & SPRITES",
          "sourcePage": 88,
          "sourcePages": [
            388,
            420,
            757,
            919,
            943
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-4",
          "value": "GUARDIANS & SPRITES",
          "sourcePage": 88,
          "sourcePages": [
            388,
            420,
            757,
            919,
            943,
            1626,
            1651
          ],
          "sourceKind": "editorial"
        }
      ]
    },
    {
      "id": "carapacians",
      "title": [
        {
          "from": "act-2",
          "value": "THE GAME WORLD",
          "sourcePage": 666,
          "sourceKind": "editorial"
        },
        {
          "from": "act-3",
          "value": "THE GAME WORLD",
          "sourcePage": 666,
          "sourcePages": [
            892,
            1100,
            955,
            957
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "intermission",
          "value": "THE GAME WORLD",
          "sourcePage": 666,
          "sourcePages": [
            892,
            1100,
            955,
            957,
            1268
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-4",
          "value": "THE GAME WORLD",
          "sourcePage": 666,
          "sourcePages": [
            892,
            1100,
            1543,
            955,
            1532,
            1784,
            957,
            1268
          ],
          "sourceKind": "editorial"
        }
      ]
    },
    {
      "id": "others",
      "title": [
        {
          "from": "intermission",
          "value": "OTHERS",
          "sourcePage": 1155,
          "sourceKind": "editorial"
        },
        {
          "from": "act-5-act-1",
          "value": "OTHERS",
          "sourcePage": 1155,
          "sourcePages": [
            2253
          ],
          "sourceKind": "editorial"
        }
      ]
    }
  ],
  "characters": [
    {
      "id": "john",
      "group": "kids",
      "reveal": "act-1",
      "introPage": 4,
      "name": [
        {
          "from": "act-1",
          "value": "JOHN EGBERT",
          "sourcePage": 3,
          "sourceKind": "visual"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "John",
          "sourcePage": 4,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-john.webp",
            "alt": "John Egbert"
          },
          "sourcePage": 3,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-1",
              "label": "Handle",
              "value": "ectoBiologist [EB]",
              "sourcePage": 26,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-1",
              "label": "Strife specibus",
              "value": "hammerkind",
              "sourcePage": 38,
              "sourceKind": "direct",
              "sourceNote": "Narration explicitly allocates the HAMMERKIND ABSTRATUS."
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Wind and Shade (LOWAS)",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-4",
              "label": "Dream Moon",
              "value": "Prospit",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-1",
              "label": "Interests",
              "value": "Bad movies · Programming · Paranormal lore · Amateur magic · Video games",
              "sourcePage": 4,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 4,
      "sourceKind": "intro"
    },
    {
      "id": "rose",
      "group": "kids",
      "reveal": "act-1",
      "introPage": 217,
      "name": [
        {
          "from": "act-1",
          "value": "ROSE LALONDE",
          "sourcePage": 216,
          "sourceKind": "visual"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "Rose",
          "sourcePage": 217,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-rose.webp",
            "alt": "Rose Lalonde"
          },
          "sourcePage": 216,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-1",
              "label": "Handle",
              "value": "tentacleTherapist [TT]",
              "sourcePage": 135,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-2",
              "label": "Strife specibus",
              "value": "needlekind",
              "sourcePage": 299,
              "sourceKind": "visual",
              "sourceNote": "The allocated card is visibly labelled needlekind; checked against the official main panel."
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Light and Rain (LOLAR)",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-4",
              "label": "Dream Moon",
              "value": "Derse",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-1",
              "label": "Interests",
              "value": "Obscure literature · Creative writing · Strange fiction · Psychoanalysis · Knitting · Video games",
              "sourcePage": 217,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 217,
      "sourceKind": "intro"
    },
    {
      "id": "dave",
      "group": "kids",
      "reveal": "act-2",
      "introPage": 312,
      "name": [
        {
          "from": "act-2",
          "value": "DAVE STRIDER",
          "sourcePage": 311,
          "sourceKind": "visual"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Dave",
          "sourcePage": 312,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-dave.webp",
            "alt": "Dave Strider"
          },
          "sourcePage": 311,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-2",
              "label": "Handle",
              "value": "turntechGodhead [TG]",
              "sourcePage": 382,
              "sourceKind": "direct",
              "sourceNote": "The pesterlog on this Dave page labels him turntechGodhead [TG] and is addressed to him by name."
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-2",
              "label": "Strife specibus",
              "value": "bladekind",
              "sourcePage": 342,
              "sourceKind": "direct",
              "sourceNote": "Narration states that his specibus is already allocated with the BLADEKIND ABSTRATUS."
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Heat and Clockwork (LOHAC)",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-4",
              "label": "Dream Moon",
              "value": "Derse",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-2",
              "label": "Interests",
              "value": "DJing · Obscure bands · Preserved animals · Photography",
              "sourcePage": 312,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 312,
      "sourceKind": "intro"
    },
    {
      "id": "jade",
      "group": "kids",
      "reveal": "act-3",
      "introPage": 768,
      "name": [
        {
          "from": "act-3",
          "value": "JADE HARLEY",
          "sourcePage": 766,
          "sourceKind": "visual"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Jade",
          "sourcePage": 768,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-jade.webp",
            "alt": "Jade Harley"
          },
          "sourcePage": 766,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-3",
              "label": "Handle",
              "value": "gardenGnostic [GG]",
              "sourcePage": 382,
              "sourceKind": "composite",
              "sourcePages": [
                827
              ],
              "sourceNote": "Page 382 shows gardenGnostic [GG] in the kids' Pesterchum network; page 827 is Jade's own Pesterchum page, tying that account to Jade."
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-3",
              "label": "Strife specibus",
              "value": "riflekind",
              "sourcePage": 1077,
              "sourceKind": "visual",
              "sourceNote": "The harpoon gun is placed in her visibly labelled riflekind card."
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Not yet revealed",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-3",
              "label": "Dream Moon",
              "value": "Prospit",
              "sourcePage": 1026,
              "sourceKind": "visual",
              "sourceNote": "The Act 3 [S] dream sequence visually establishes Jade on Prospit; the first-year recap later states this explicitly on page 1674."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-3",
              "label": "Interests",
              "value": "Gardening · Nostalgic cartoons · Anthropomorphic animals · Nuclear physics · Advanced gadgetry",
              "sourcePage": 789,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 768,
      "sourceKind": "intro"
    },
    {
      "id": "aradia",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2134,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♈ ARADIA MEGIDO",
          "sourcePage": 2134,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Aradia",
          "sourcePage": 2134,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-aradia.webp",
            "alt": "Aradia Megido"
          },
          "sourcePage": 2134,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "apocalypseArisen [AA]",
              "sourcePage": 2134,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "Not yet revealed",
              "sourcePage": 2134,
              "sourceKind": "editorial",
              "sourceNote": "Editorial placeholder requested for the current Act 5 Act 1 coverage; her introduction does not establish a named strife allocation."
            }
          ]
        },
        {
          "id": "former-interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Former Interests",
              "value": "Archaeology · Roleplaying",
              "sourcePage": 2134,
              "sourceKind": "direct",
              "sourceNote": "The introduction recalls archaeology as a former interest and says a certain kind of role playing might also have been one."
            }
          ]
        }
      ],
      "sourcePage": 2134,
      "sourceKind": "intro"
    },
    {
      "id": "tavros",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2101,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♉ TAVROS NITRAM",
          "sourcePage": 2101,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Tavros",
          "sourcePage": 2101,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-tavros.webp",
            "alt": "Tavros Nitram"
          },
          "sourcePage": 2101,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "adiosToreador [AT]",
              "sourcePage": 2101,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "lancekind",
              "sourcePage": 2115,
              "sourceKind": "visual",
              "sourceNote": "The jousting lance is placed in the lancekind card."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Fantasy stories · Creature training · Card games · Roleplaying · Slam poetry · Flight lore",
              "sourcePage": 2101,
              "sourceKind": "direct",
              "sourceNote": "The introduction directly establishes fantasy stories, creature communion/training, card and role-playing games, slam poetry, and flight lore."
            }
          ]
        }
      ],
      "sourcePage": 2101,
      "sourceKind": "intro"
    },
    {
      "id": "sollux",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2076,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♊ SOLLUX CAPTOR",
          "sourcePage": 2076,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Sollux",
          "sourcePage": 2076,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-sollux.webp",
            "alt": "Sollux Captor"
          },
          "sourcePage": 2076,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "twinArmageddons [TA]",
              "sourcePage": 2076,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "None",
              "sourcePage": 2077,
              "sourceKind": "editorial",
              "sourceNote": "User-requested display wording for the narration that a high-level psionic has no use for any particular specibus allocation."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Yellow",
              "sourcePage": 2146,
              "sourceKind": "direct",
              "sourceNote": "Sollux compares lower castes to his own and asks, “what’s worse than yellow?” Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Programming · Hacking · Apiculture networking",
              "sourcePage": 2076,
              "sourceKind": "direct",
              "sourceNote": "The introduction establishes his computer/code expertise, hacking, and apiculture networking; “video games” was removed as an unsupported generalization."
            }
          ]
        }
      ],
      "sourcePage": 2076,
      "sourceKind": "intro"
    },
    {
      "id": "karkat",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 1994,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♋ KARKAT VANTAS",
          "sourcePage": 1994,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Karkat",
          "sourcePage": 1994,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-karkat.webp",
            "alt": "Karkat Vantas"
          },
          "sourcePage": 1994,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "carcinoGeneticist [CG]",
              "sourcePage": 1994,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "Sicklekind",
              "sourcePage": 1994,
              "sourceKind": "editorial",
              "sourceNote": "User-requested allocation label for his established sickle weapon. This source page describes sickle practice rather than spelling out the allocation name."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Mutant candy-red",
              "sourcePage": 2301,
              "sourceKind": "direct",
              "sourceNote": "Narration explicitly calls his blood “mutant candy-red.” Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Romantic comedies · Programming · Sickle practice",
              "sourcePage": 1994,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 1994,
      "sourceKind": "intro"
    },
    {
      "id": "nepeta",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2156,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♌ NEPETA LEIJON",
          "sourcePage": 2156,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Nepeta",
          "sourcePage": 2156,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-nepeta.webp",
            "alt": "Nepeta Leijon"
          },
          "sourcePage": 2156,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "arsenicCatnip [AC]",
              "sourcePage": 2156,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "clawkind",
              "sourcePage": 2157,
              "sourceKind": "visual",
              "sourceNote": "Her claw gloves are displayed in the clawkind card."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Green",
              "sourcePage": 2162,
              "sourceKind": "direct",
              "sourceNote": "Nepeta asks what “green blood” means and Equius answers using the same term. Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Friendly roleplaying · Hunting · Wall comics",
              "sourcePage": 2156,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 2156,
      "sourceKind": "intro"
    },
    {
      "id": "kanaya",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2323,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♍ KANAYA MARYAM",
          "sourcePage": 2323,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Kanaya",
          "sourcePage": 2323,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-kanaya.webp",
            "alt": "Kanaya Maryam"
          },
          "sourcePage": 2323,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "grimAuxiliatrix [GA]",
              "sourcePage": 2323,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "makeupkind",
              "sourcePage": 2325,
              "sourceKind": "visual",
              "sourceNote": "The lipstick is equipped to a makeupkind card; later weapon terminology is not substituted."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Jade green",
              "sourcePage": 2323,
              "sourceKind": "direct",
              "sourceNote": "Her introduction explicitly states that she has JADE GREEN BLOOD. Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Landscaping · Topiary · Supernatural romance novels · Fashion · Sewing",
              "sourcePage": 2323,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 2323,
      "sourceKind": "intro"
    },
    {
      "id": "terezi",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2031,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♎ TEREZI PYROPE",
          "sourcePage": 2031,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Terezi",
          "sourcePage": 2031,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-terezi.webp",
            "alt": "Terezi Pyrope"
          },
          "sourcePage": 2031,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "gallowsCalibrator [GC]",
              "sourcePage": 2031,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "canekind",
              "sourcePage": 2052,
              "sourceKind": "visual",
              "sourceNote": "The walking cane is placed in the canekind card."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Teal",
              "sourcePage": 2238,
              "sourceKind": "direct",
              "sourceNote": "Terezi describes herself as “a little too teal for their tastes.” Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Dragons · Scalemates · Live-action roleplaying · Alternian law",
              "sourcePage": 2031,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 2031,
      "sourceKind": "intro"
    },
    {
      "id": "vriska",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2195,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♏ VRISKA SERKET",
          "sourcePage": 2195,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Vriska",
          "sourcePage": 2195,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-vriska.webp",
            "alt": "Vriska Serket"
          },
          "sourcePage": 2195,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "arachnidsGrip [AG]",
              "sourcePage": 2195,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "dicekind",
              "sourcePage": 2199,
              "sourceKind": "visual",
              "sourceNote": "The Fluorite Octet is placed in the dicekind card."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Cerulean",
              "sourcePage": 2276,
              "sourceKind": "direct",
              "sourceNote": "Vriska calls the blue blood covering her “cerulean swill.” Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Extreme roleplaying · Games of chance · Doomsday devices · Fortune-telling",
              "sourcePage": 2195,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 2195,
      "sourceKind": "intro"
    },
    {
      "id": "equius",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2211,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♐ EQUIUS ZAHHAK",
          "sourcePage": 2211,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Equius",
          "sourcePage": 2211,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-equius.webp",
            "alt": "Equius Zahhak"
          },
          "sourcePage": 2211,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "centaursTesticle [CT]",
              "sourcePage": 2211,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibi",
              "value": "1/2bowkind · bowkind · fistkind",
              "sourcePage": 2219,
              "sourceKind": "direct",
              "sourceNote": "The narration and portfolio identify all three cards; page 2218 also explicitly names 1/2bowkind.",
              "sourcePages": [
                2218
              ]
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Archery · Musclebeast art · Robotics · Strength",
              "sourcePage": 2211,
              "sourceKind": "direct",
              "sourceNote": "“Strength training” was changed to “Strength”: the introduction says he loves being strong, alongside archery, musclebeast art, and robot-building/brawling."
            }
          ]
        }
      ],
      "sourcePage": 2211,
      "sourceKind": "intro"
    },
    {
      "id": "gamzee",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2012,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♑ GAMZEE MAKARA",
          "sourcePage": 2012,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Gamzee",
          "sourcePage": 2012,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-gamzee.webp",
            "alt": "Gamzee Makara"
          },
          "sourcePage": 2012,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "terminallyCapricious [TC]",
              "sourcePage": 2012,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "clubkind",
              "sourcePage": 2018,
              "sourceKind": "visual",
              "sourceNote": "The juggling club is equipped to a clubkind card; later jokerkind is not revealed here."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Clowns · Unicycling · Faygo · Baking · Horns",
              "sourcePage": 2012,
              "sourceKind": "composite",
              "sourcePages": [
                2013
              ],
              "sourceNote": "The introduction supports clowns, the one-wheel device, baking, and horns; the immediately following page identifies his “fine beverage” as Faygo."
            }
          ]
        }
      ],
      "sourcePage": 2012,
      "sourceKind": "intro"
    },
    {
      "id": "eridan",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2408,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♒ ERIDAN AMPORA",
          "sourcePage": 2408,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Eridan",
          "sourcePage": 2408,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-eridan.webp",
            "alt": "Eridan Ampora"
          },
          "sourcePage": 2408,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "caligulasAquarium [CA]",
              "sourcePage": 2439,
              "sourceKind": "direct",
              "sourceNote": "The detailed introduction gives his trolltag."
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "riflekind",
              "sourcePage": 2456,
              "sourceKind": "visual",
              "sourceNote": "Unequipping Ahab’s Crosshairs exposes the riflekind card; later wandkind is not revealed here."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Penultimate on the hemospectrum",
              "sourcePage": 2439,
              "sourceKind": "direct",
              "sourceNote": "The narration says his blood is nearly the richest the hemospectrum offers and “penultimate on the scale”; the later standardized color name is intentionally not used. Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Extreme roleplaying · Doomsday devices · Military history · Legendary conquerors · Magic",
              "sourcePage": 2439,
              "sourceKind": "direct",
              "sourceNote": "The detailed introduction directly establishes extreme roleplaying, doomsday devices, military history, legendary conquerors, and magic."
            }
          ]
        }
      ],
      "sourcePage": 2408,
      "sourceKind": "intro"
    },
    {
      "id": "feferi",
      "group": "trolls",
      "reveal": "act-5-act-1",
      "introPage": 2422,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "♓ FEFERI PEIXES",
          "sourcePage": 2422,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Feferi",
          "sourcePage": 2422,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-feferi.webp",
            "alt": "Feferi Peixes"
          },
          "sourcePage": 2422,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "cuttlefishCuller [CC]",
              "sourcePage": 2441,
              "sourceKind": "direct",
              "sourceNote": "The detailed introduction gives her trolltag."
            }
          ]
        },
        {
          "id": "strife-specibus",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Strife specibus",
              "value": "2x3dentkind",
              "sourcePage": 2455,
              "sourceKind": "visual",
              "sourceNote": "Unequipping the double culling fork exposes the 2x3dentkind card."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Most noble blood possible",
              "sourcePage": 2441,
              "sourceKind": "direct",
              "sourceNote": "The narration calls it “the most noble blood possible” and says she is the only troll of her kind known to possess it; the later standardized color name is intentionally not used. Display is intentionally deferred until the end of Act 5 Act 2, after the later caste/ancestry material; the source page records the earlier evidence for the individual fact."
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Marine wildlife care · Aquatic hoofbeasts · Cuttlefish",
              "sourcePage": 2441,
              "sourceKind": "direct",
              "sourceNote": "The detailed introduction establishes care for deep-sea fauna, aquatic hoofbeasts, and cuttlefish."
            }
          ]
        }
      ],
      "sourcePage": 2422,
      "sourceKind": "intro"
    },
    {
      "id": "dad",
      "group": "guardians-sprites",
      "reveal": "act-1",
      "introPage": 89,
      "name": [
        {
          "from": "act-1",
          "value": "DAD",
          "sourcePage": 70,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "Dad",
          "sourcePage": 70,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-dad.webp",
            "alt": "Dad"
          },
          "sourcePage": 89,
          "sourceKind": "visual",
          "sourceNote": "Dad is visibly presented in the early confrontation sequence; page 70 already identifies him as DAD."
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-1",
              "label": "Role",
              "value": "John's father",
              "sourcePage": 70,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 89,
      "sourceKind": "intro"
    },
    {
      "id": "mom",
      "group": "guardians-sprites",
      "reveal": "act-2",
      "introPage": 388,
      "name": [
        {
          "from": "act-2",
          "value": "MOM",
          "sourcePage": 365,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Mom",
          "sourcePage": 365,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-mom.webp",
            "alt": "Mom"
          },
          "sourcePage": 388,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "Rose's mother",
              "sourcePage": 365,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 388,
      "sourceKind": "intro"
    },
    {
      "id": "bro",
      "group": "guardians-sprites",
      "reveal": "act-2",
      "introPage": 757,
      "name": [
        {
          "from": "act-2",
          "value": "BRO",
          "sourcePage": 419,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Bro",
          "sourcePage": 419,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-bro.webp",
            "alt": "Bro"
          },
          "sourcePage": 757,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "Dave's brother",
              "sourcePage": 419,
              "sourceKind": "direct"
            },
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dave's brother and guardian",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly groups Bro with the kids' guardians."
            }
          ]
        }
      ],
      "sourcePage": 757,
      "sourceKind": "intro"
    },
    {
      "id": "grandpa",
      "group": "guardians-sprites",
      "reveal": "act-3",
      "introPage": 919,
      "name": [
        {
          "from": "act-3",
          "value": "GRANDPA",
          "sourcePage": 919,
          "sourceKind": "visual"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Grandpa",
          "sourcePage": 919,
          "sourceKind": "visual"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-grandpa.webp",
            "alt": "Grandpa Harley"
          },
          "sourcePage": 919,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jade's late grandfather",
              "sourcePage": 790,
              "sourcePages": [
                920
              ],
              "sourceKind": "composite",
              "sourceNote": "Page 790 identifies him as Jade's grandfather; page 920 explicitly says he is no longer alive."
            }
          ]
        }
      ],
      "sourcePage": 919,
      "sourceKind": "intro"
    },
    {
      "id": "nannasprite",
      "group": "guardians-sprites",
      "reveal": "act-2",
      "introPage": 420,
      "name": [
        {
          "from": "act-2",
          "value": "NANNASPRITE",
          "sourcePage": 420,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Nannasprite",
          "sourcePage": 420,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-nannasprite.webp",
            "alt": "Nannasprite"
          },
          "sourcePage": 420,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "John's sprite guide",
              "sourcePage": 425,
              "sourceKind": "direct",
              "sourceNote": "Nannasprite instructs John on his objective and progression through the gates."
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-2",
              "label": "Components",
              "value": "Nanna's ashes + Harlequinsprite",
              "sourcePage": 281,
              "sourceKind": "visual",
              "sourceNote": "The page shows Nanna's ashes spilling directly onto the already-prototyped sprite."
            }
          ]
        }
      ],
      "sourcePage": 420,
      "sourceKind": "intro"
    },
    {
      "id": "jaspersprite",
      "group": "guardians-sprites",
      "reveal": "act-4",
      "introPage": 1626,
      "name": [
        {
          "from": "act-4",
          "value": "JASPERSPRITE",
          "sourcePage": 1626,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "Jaspersprite",
          "sourcePage": 1626,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-jaspersprite.webp",
            "alt": "Jaspersprite"
          },
          "sourcePage": 1626,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Rose's sprite guide",
              "sourcePage": 1626,
              "sourceKind": "direct",
              "sourceNote": "Rose explicitly treats Jaspersprite as her resurrected Kernelsprite/guide in this sequence."
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-4",
              "label": "Components",
              "value": "Jaspers + Eldritch princess doll",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly summarizes both prototypings."
            }
          ]
        }
      ],
      "sourcePage": 1626,
      "sourceKind": "intro"
    },
    {
      "id": "davesprite",
      "group": "guardians-sprites",
      "reveal": "act-4",
      "introPage": 1651,
      "name": [
        {
          "from": "act-4",
          "value": "DAVESPRITE",
          "sourcePage": 1651,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "Davesprite",
          "sourcePage": 1651,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-davesprite.webp",
            "alt": "Davesprite"
          },
          "sourcePage": 1651,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dave's sprite guide",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-4",
              "label": "Components",
              "value": "Doomed-timeline Dave + Crowsprite",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 1651,
      "sourceKind": "intro"
    },
    {
      "id": "bec",
      "group": "guardians-sprites",
      "reveal": "act-3",
      "introPage": 942,
      "name": [
        {
          "from": "act-3",
          "value": "BECQUEREL",
          "sourcePage": 942,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Becquerel",
          "sourcePage": 942,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-bec.webp",
            "alt": "Becquerel"
          },
          "sourcePage": 943,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jade's dog, guardian, and best friend",
              "sourcePage": 1075,
              "sourceKind": "direct",
              "sourceNote": "By late Act 3 Jade explicitly calls Bec her dog/guardian and one of her best friends."
            }
          ]
        }
      ],
      "sourcePage": 942,
      "sourceKind": "intro"
    },
    {
      "id": "wv",
      "group": "carapacians",
      "reveal": "act-2",
      "introPage": 666,
      "name": [
        {
          "from": "act-2",
          "value": "WAYWARD VAGABOND",
          "sourcePage": 666,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "WV",
          "sourcePage": 666,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-wv.webp",
            "alt": "Wayward Vagabond"
          },
          "sourcePage": 666,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "WARWEARY VILLEIN",
              "sourcePage": 1988,
              "sourceKind": "direct",
              "sourceNote": "Recap 2 explicitly identifies WV's earlier Battlefield identity as the Warweary Villein."
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-2",
              "label": "Abbreviation",
              "value": "WV",
              "sourcePage": 666,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 666,
      "sourceKind": "intro"
    },
    {
      "id": "pm",
      "group": "carapacians",
      "reveal": "act-3",
      "introPage": 892,
      "name": [
        {
          "from": "act-3",
          "value": "PEREGRINE MENDICANT",
          "sourcePage": 892,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "PM",
          "sourcePage": 892,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-pm.webp",
            "alt": "Peregrine Mendicant"
          },
          "sourcePage": 892,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "PARCEL MISTRESS",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly says PM worked as a Parcel Mistress."
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-3",
              "label": "Abbreviation",
              "value": "PM",
              "sourcePage": 892,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 892,
      "sourceKind": "intro"
    },
    {
      "id": "ar",
      "group": "carapacians",
      "reveal": "act-3",
      "introPage": 1100,
      "name": [
        {
          "from": "act-3",
          "value": "AIMLESS RENEGADE",
          "sourcePage": 1100,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "AR",
          "sourcePage": 1100,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-ar.webp",
            "alt": "Aimless Renegade"
          },
          "sourcePage": 1100,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "AUTHORITY REGULATOR",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly identifies AR's earlier role as an Authority Regulator."
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-3",
              "label": "Abbreviation",
              "value": "AR",
              "sourcePage": 1100,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 1100,
      "sourceKind": "intro"
    },
    {
      "id": "wq",
      "group": "carapacians",
      "reveal": "act-4",
      "introPage": 1543,
      "name": [
        {
          "from": "act-4",
          "value": "WINDSWEPT QUESTANT",
          "sourcePage": 1543,
          "sourceKind": "visual",
          "sourceNote": "The page introduces the Windswept Questant visually; the first-year recap later confirms the identity."
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "WQ",
          "sourcePage": 1543,
          "sourceKind": "visual"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-wq.webp",
            "alt": "Windswept Questant"
          },
          "sourcePage": 1543,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "WHITE QUEEN",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly says the Windswept Questant was formerly the White Queen."
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-4",
              "label": "Abbreviation",
              "value": "WQ",
              "sourcePage": 1543,
              "sourceKind": "visual"
            }
          ]
        }
      ],
      "sourcePage": 1543,
      "sourceKind": "intro"
    },
    {
      "id": "jack-noir",
      "group": "carapacians",
      "reveal": "act-3",
      "introPage": 955,
      "name": [
        {
          "from": "act-3",
          "value": "JACK NOIR",
          "sourcePage": 955,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Jack Noir",
          "sourcePage": 955,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-jack-noir.webp",
            "alt": "Jack Noir"
          },
          "sourcePage": 955,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Archagent of the Dark Kingdom",
              "sourcePage": 955,
              "sourceKind": "direct",
              "sourceNote": "Story 955 explicitly states: 'You are ARCHAGENT JACK NOIR' and that he oversees affairs of a Dark Kingdom."
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-4",
              "label": "Counterpart",
              "value": "SPADES SLICK, troll session",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly states that the troll session's version of Jack Noir was exiled and took the name Spades Slick."
            }
          ]
        }
      ],
      "sourcePage": 955,
      "sourceKind": "intro"
    },
    {
      "id": "dd",
      "group": "carapacians",
      "reveal": "act-4",
      "introPage": 1532,
      "name": [
        {
          "from": "act-4",
          "value": "DRACONIAN DIGNITARY",
          "sourcePage": 1988,
          "sourceKind": "direct",
          "sourceNote": "Recap 2 explicitly names Jack's henchman the Draconian Dignitary."
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "DD",
          "sourcePage": 1988,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-dd.webp",
            "alt": "Draconian Dignitary"
          },
          "sourcePage": 1532,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Jack Noir's henchman",
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 1532,
      "sourceKind": "intro"
    },
    {
      "id": "cd",
      "group": "carapacians",
      "reveal": "act-4",
      "introPage": 1784,
      "name": [
        {
          "from": "act-4",
          "value": "COURTYARD DROLL",
          "sourcePage": 1784,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "CD",
          "sourcePage": 1784,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-cd.webp",
            "alt": "Courtyard Droll"
          },
          "sourcePage": 1784,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Jack Noir's lackey",
              "sourcePage": 1988,
              "sourceKind": "direct",
              "sourceNote": "Recap 2 calls Courtyard Droll another of Noir's lackeys."
            }
          ]
        }
      ],
      "sourcePage": 1784,
      "sourceKind": "intro"
    },
    {
      "id": "hb",
      "group": "carapacians",
      "reveal": "act-3",
      "introPage": 957,
      "name": [
        {
          "from": "act-3",
          "value": "HEGEMONIC BRUTE",
          "sourcePage": 957,
          "sourceKind": "visual",
          "sourceNote": "The Act 3 page introduces the Hegemonic Brute visually; Recap 2 later names him explicitly."
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "HB",
          "sourcePage": 957,
          "sourceKind": "visual"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-hb.webp",
            "alt": "Hegemonic Brute"
          },
          "sourcePage": 957,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jack Noir's agent",
              "sourcePage": 957,
              "sourceKind": "direct",
              "sourceNote": "Jack orders one of his burliest agents to the scene; the later recap supplies the more specific muscle description."
            },
            {
              "from": "act-4",
              "label": "Role",
              "value": "Jack Noir's muscle",
              "sourcePage": 1988,
              "sourceKind": "direct",
              "sourceNote": "Recap 2 explicitly calls HB 'Jack's muscle'."
            }
          ]
        }
      ],
      "sourcePage": 957,
      "sourceKind": "intro"
    },
    {
      "id": "snowman",
      "group": "carapacians",
      "reveal": "intermission",
      "introPage": 1268,
      "name": [
        {
          "from": "intermission",
          "value": "SNOWMAN",
          "sourcePage": 1268,
          "sourceKind": "direct",
          "sourceNote": "The Intermission text explicitly refers to her as Snowman and states the consequence of killing her."
        },
        {
          "from": "act-4",
          "value": "SNOWMAN (BLACK QUEEN)",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap identifies Snowman as the exiled Black Queen of the trolls’ session. The heading includes this identity only after Act 4."
        }
      ],
      "rosterLabel": [
        {
          "from": "intermission",
          "value": "Snowman",
          "sourcePage": 1268,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "intermission",
          "value": {
            "src": "../assets/ref-snowman.webp",
            "alt": "Snowman wearing her wide-brimmed hat and dark suit"
          },
          "sourcePage": 1268,
          "sourceKind": "visual",
          "sourceNote": "User-supplied portrait of Snowman in her Intermission appearance; it does not depict or identify her earlier Black Queen form."
        },
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-black-queen.webp",
            "alt": "Snowman in her earlier Black Queen form"
          },
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap directly establishes that the troll-session Black Queen was exiled and became Snowman; the portrait is held until this identity is safe."
        }
      ],
      "stats": [
        {
          "id": "special-rule",
          "variants": [
            {
              "from": "intermission",
              "label": "Special rule",
              "value": "Killing her destroys the universe",
              "sourcePage": 1268,
              "sourceKind": "direct",
              "sourceNote": "The Intermission states this when Snowman appears; it does not require her later Black Queen identity."
            }
          ]
        },
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "Troll-session BLACK QUEEN",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "affiliation",
          "variants": [
            {
              "from": "act-4",
              "label": "Affiliation",
              "value": "The Felt",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap explicitly states that the troll-session Black Queen was exiled and later joined the Felt, becoming Snowman."
            }
          ]
        }
      ],
      "sourcePage": 1268,
      "sourceKind": "intro"
    },
    {
      "id": "doc-scratch",
      "group": "others",
      "reveal": "act-5-act-1",
      "introPage": 2253,
      "name": [
        {
          "from": "act-5-act-1",
          "value": "DOC SCRATCH",
          "sourcePage": 2253,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Doc Scratch",
          "sourcePage": 2253,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-doc-scratch.webp",
            "alt": "Doc Scratch"
          },
          "sourcePage": 2253,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Role",
              "value": "Alternia's First Guardian",
              "sourcePage": 2253,
              "sourceKind": "direct",
              "sourceNote": "The introduction explicitly identifies Scratch as Alternia's FIRST GUARDIAN."
            }
          ]
        },
        {
          "id": "allegiance",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Allegiance",
              "value": "Officer of Lord English",
              "sourcePage": 2253,
              "sourceKind": "direct",
              "sourceNote": "The introduction explicitly calls Scratch an officer of Lord English."
            }
          ]
        }
      ],
      "sourcePage": 2253,
      "sourceKind": "intro"
    },
    {
      "id": "lord-english",
      "group": "others",
      "reveal": "intermission",
      "introPage": 1155,
      "name": [
        {
          "from": "intermission",
          "value": "LORD ENGLISH",
          "sourcePage": 1155,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "intermission",
          "value": "Lord English",
          "sourcePage": 1155,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "intermission",
          "value": {
            "src": "../assets/ref-lord-english.webp",
            "alt": "Lord English's name"
          },
          "sourcePage": 1155,
          "sourceKind": "direct",
          "sourceNote": "This placeholder portrait uses Lord English's name because the page names him but does not physically show him."
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "intermission",
              "label": "Role",
              "value": "Boss of the Felt",
              "sourcePage": 1155,
              "sourceKind": "direct",
              "sourceNote": "Spades Slick's introduction calls Lord English the Felt's boss."
            },
            {
              "from": "act-5-act-1",
              "label": "Role",
              "value": "Indestructible demon; Doc Scratch's master",
              "sourcePage": 2253,
              "sourceKind": "direct",
              "sourceNote": "Doc Scratch's introduction identifies English as an indestructible demon and Scratch's master."
            }
          ]
        }
      ],
      "sourcePage": 1155,
      "sourceKind": "intro"
    }
  ],
  "sourceAudit": {
    "verifiedThroughChunk": 5,
    "verifiedChunks": [
      1,
      2,
      3,
      4,
      5
    ],
    "verifiedGroups": [
      "kids",
      "guardians-sprites",
      "trolls",
      "carapacians",
      "others"
    ],
    "verifiedDate": "2026-09-18",
    "note": "All five staged audit chunks have been integrated and individually fact-checked. A final global source audit was completed on 2026-09-18, checking source-metadata conventions, stage-safe sourcing, spoiler-stage wording, and structural completeness across the merged file.",
    "chunk2Notes": [
      "Standardized later caste-color names are not back-projected into Act 5 Act 1. Blood wording uses terminology explicitly available by the end of A5A1.",
      "Blood rows are omitted for Aradia, Tavros, Equius, and Gamzee because this audit did not identify an A5A1 page that directly establishes a sufficiently precise color label for those characters.",
      "Sollux uses Yellow (p. 2146); Karkat Mutant candy-red (p. 2301); Nepeta Green (p. 2162); Kanaya Jade green (p. 2323); Terezi Teal (p. 2238); Vriska Cerulean (p. 2276); Eridan Penultimate on the hemospectrum (p. 2439); Feferi Most noble blood possible (p. 2441).",
      "Sollux’s unsupported “Video games” interest was removed. Equius’s “Strength training” was changed to the textually supported “Strength.” Gamzee’s Faygo interest is composite-sourced to pp. 2012–2013."
    ],
    "globalAuditComplete": true,
    "globalAuditDate": "2026-09-18",
    "globalAuditNotes": [
      "Editorial group-heading source metadata was made stage-specific so hidden citations never point beyond the currently visible spoiler boundary.",
      "User-facing records previously tagged sourceKind \"intro\" were normalized to \"direct\" for textually supported intro-page claims and \"visual\" for portraits/alt text; character-level intro metadata remains available separately.",
      "sourcePages now consistently contains only additional supporting pages and no longer repeats sourcePage.",
      "The Act 2 PROTOTYPING entry was corrected from an unrelated p. 434 citation to p. 424 and reworded to match exactly what Nannasprite establishes at that reading stage; the later Act 4 wording remains unchanged.",
      "Snowman's Intermission note was narrowed to what p. 1268 directly establishes, and her Felt affiliation now appears at Act 4 using the recap's explicit identification; Lord English's name-only placeholder portrait is classified as textually direct rather than visual.",
      "Apart from that correction and source-convention normalization, previously fact-checked Chunk 1–5 wording was preserved; stage boundary records remain sourceKind \"boundary\" because they are intentionally reading checkpoints rather than evidence for a story claim."
    ],
    "stagedProfileUpdate": {
      "date": "2026-09-20",
      "scope": "Act 1 guardian heading; Snowman portrait and name variants; new kid and troll notes.",
      "notes": [
        "New character notes were checked against official story-page sources; the Act 3 entry notes also use the audited finale sequence. Later variants replace earlier notes; they are not appended.",
        "The supplied Snowman portrait is available at Intermission. The existing Black Queen portrait and the expanded name remain gated to Act 4, where p. 1674 establishes the connection.",
        "All twelve trolls currently first appear at the final supported stage, Act 5 Act 1. Their notes use variant arrays so later reading stages can add new wording without exposing it early.",
        "This is a targeted content update, not a repeat of the September 18 global audit."
      ]
    },
    "characterNotesRemoval": {
      "date": "2026-09-20",
      "note": "All character notes were removed at the user’s request. Earlier audit entries describe the historical content; names, portraits, stats, and group labels remain staged."
    },
    "statCoverageUpdate": {
      "date": "2026-09-21",
      "scope": "Minimum stat coverage, kid/troll weapon or ability fields, and delayed blood rows.",
      "notes": [
        "Every revealed character must retain at least one nonempty, source-backed stat at every visible stage. HB gains an Act 3 role from p. 957; Snowman gains the Intermission rule from p. 1268 without revealing her former identity.",
        "Strife allocations were checked in official story-page components; Rose’s card was also inspected directly. Aradia and Sollux receive supported ability/combat facts, and Karkat a supported weapon field, rather than unverified allocation names.",
        "The eight existing troll blood rows and individual blood examples in the hemospectrum cheat now begin at act-5-act-2-part-3. This is a conservative editorial gate after the later caste and ancestry material, not a claim that a single page exhaustively explains the system. Earlier blood audit notes describe historical display timing and are superseded by this gate.",
        "The current selectable cap remains act-5-act-1. No reference character notes were added."
      ]
    },
    "strifeDisplayUpdate": {
      "date": "2026-09-21",
      "note": "At the user’s request, Aradia, Sollux, and Karkat now use Strife specibus rows reading Not yet revealed, None, and Sicklekind respectively. This supersedes the weapon/ability display choices in statCoverageUpdate; source notes distinguish the requested wording from direct evidence."
    },
    "cheatSheetsRemoval": {
      "date": "2026-09-21",
      "note": "All reference cheat sheets, including the quadrant strip, were removed at the user’s request. Earlier audit entries referring to these sections are historical; the reference now contains only staged character profiles."
    }
  }
};
