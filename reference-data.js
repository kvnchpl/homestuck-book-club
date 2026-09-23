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
  "availableThrough": "act-5-act-2-part-3",
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
          "value": "KIDS",
          "sourcePage": 3,
          "sourcePages": [
            216
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-2",
          "value": "KIDS",
          "sourcePage": 3,
          "sourcePages": [
            216,
            311
          ],
          "sourceKind": "editorial"
        },
        {
          "from": "act-3",
          "value": "KIDS",
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
          "value": "TROLLS",
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
      "id": "ancestors",
      "title": [
        {
          "from": "act-5-act-2-part-2",
          "value": "ANCESTORS",
          "sourcePage": 3473,
          "sourceKind": "editorial",
          "sourcePages": [
            3475,
            3508,
            3514,
            3518,
            3756,
            3758
          ]
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
          "value": "EXILES & AGENTS",
          "sourcePage": 666,
          "sourceKind": "editorial"
        },
        {
          "from": "act-3",
          "value": "EXILES & AGENTS",
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
          "value": "EXILES & AGENTS",
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
          "from": "act-4",
          "value": "EXILES & AGENTS",
          "sourcePage": 666,
          "sourcePages": [
            892,
            1100,
            1543,
            955,
            1532,
            1784,
            957
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
          "value": "THE FELT & ASSOCIATES",
          "sourcePage": 1155,
          "sourceKind": "editorial",
          "sourcePages": [
            1267,
            1268
          ],
          "sourceNote": "Editorial grouping for the Felt and its associates: Lord English is named as its boss, Snowman appears as number eight during the Intermission, and Scratch is later introduced as an officer of English."
        },
        {
          "from": "act-5-act-1",
          "value": "THE FELT & ASSOCIATES",
          "sourcePage": 1155,
          "sourcePages": [
            1267,
            1268,
            2253
          ],
          "sourceKind": "editorial",
          "sourceNote": "Editorial grouping for the Felt and its associates: Lord English is named as its boss, Snowman appears as number eight during the Intermission, and Scratch is later introduced as an officer of English."
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
        },
        {
          "from": "act-5-act-2-part-1",
          "value": {
            "src": "../assets/ref-john-god-tier.webp",
            "alt": "John Egbert in his god-tier Heir of Breath outfit"
          },
          "sourcePage": 3197,
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Heir of Breath",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap names all four titles. Added with Part 1 coverage; no earlier variants changed."
            }
          ]
        },
        {
          "id": "tier",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Tier",
              "value": "God tier",
              "sourcePage": 3238,
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
        },
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-rose-grimdark.webp",
            "alt": "Rose Lalonde in her grimdark form"
          },
          "sourcePage": 3643,
          "sourceKind": "visual"
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-rose-god-tier.webp",
            "alt": "Rose Lalonde in her god-tier Seer of Light outfit"
          },
          "sourcePage": 4109,
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Seer of Light",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap names all four titles. Added with Part 1 coverage; no earlier variants changed."
            }
          ]
        },
        {
          "id": "form",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Form",
              "value": "Grimdark",
              "sourcePage": 3643,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-2-part-3",
              "label": "Form",
              "value": "God-tier dream self",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "Replaces the Part 2 grimdark form after her dream self ascends in Cascade."
            }
          ]
        },
        {
          "id": "tier",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Tier",
              "value": "God tier",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "Cascade: ascended outfits and aspect emblems verified in the official animation’s artwork. The next Intermission is outside this checkpoint."
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
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-dave-god-tier.webp",
            "alt": "Dave Strider in his god-tier Knight of Time outfit"
          },
          "sourcePage": 4109,
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Knight of Time",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap names all four titles. Added with Part 1 coverage; no earlier variants changed."
            }
          ]
        },
        {
          "id": "tier",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Tier",
              "value": "God tier",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "Cascade: ascended outfits and aspect emblems verified in the official animation’s artwork. The next Intermission is outside this checkpoint."
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
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-jade-god-tier.webp",
            "alt": "Jade Harley in her god-tier Witch of Space outfit with dog ears"
          },
          "sourcePage": 4109,
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
            },
            {
              "from": "act-5-act-2-part-1",
              "label": "Land",
              "value": "Land of Frost and Frogs (LOFAF)",
              "sourcePage": 2988,
              "sourceKind": "visual"
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Witch of Space",
              "sourcePage": 1674,
              "sourceKind": "direct",
              "sourceNote": "The first-year recap names all four titles. Added with Part 1 coverage; no earlier variants changed."
            }
          ]
        },
        {
          "id": "sprite",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Sprite",
              "value": "Jadesprite",
              "sourcePage": 3213,
              "sourceKind": "composite",
              "sourcePages": [
                3210,
                3211,
                3212
              ]
            },
            {
              "from": "act-5-act-2-part-3",
              "label": "Sprite",
              "value": "Jadesprite (merged with Jade)",
              "sourcePage": 4109,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "quest",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Quest",
              "value": "Breed the Genesis Frog",
              "sourcePage": 3319,
              "sourceKind": "composite",
              "sourcePages": [
                3311
              ],
              "sourceNote": "Kanaya explains breeding the session’s frog. The named Genesis Frog is identified in the same conversation."
            }
          ]
        },
        {
          "id": "tier",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Tier",
              "value": "God tier",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "Cascade: ascended outfits and aspect emblems verified in the official animation’s artwork. The next Intermission is outside this checkpoint."
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Powers",
              "value": "Space manipulation · First Guardian powers",
              "sourcePage": 4109,
              "sourceKind": "visual"
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
            "src": "../assets/ref-aradiabot.webp",
            "alt": "Aradia in her robot body"
          },
          "sourcePage": 2287,
          "sourceKind": "visual",
          "sourceNote": "User-supplied Aradiabot.webp. Her robot body is established during Hivebent and represents her at the completed Act 5 Act 1 checkpoint."
        },
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-aradia-god-tier.webp",
            "alt": "Aradia Megido in her god-tier outfit"
          },
          "sourcePage": 3297,
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
        },
        {
          "id": "body",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Robot body",
              "value": "Destroyed",
              "sourcePage": 3186,
              "sourceKind": "visual",
              "sourceNote": "The robot explodes before this cutoff. Retain the last-known robot portrait; do not expose her later form or infer that her story has ended."
            },
            {
              "from": "act-5-act-2-part-2",
              "label": "Former body",
              "value": "Robot (destroyed)",
              "sourcePage": 3186,
              "sourceKind": "visual",
              "sourcePages": [
                3297
              ],
              "sourceNote": "Supersedes the Part 1 label so the destroyed robot is not confused with her newly living form."
            }
          ]
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Title",
              "value": "Maid of Time",
              "sourcePage": 3482,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "tier",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Tier",
              "value": "God tier",
              "sourcePage": 3297,
              "sourceKind": "visual",
              "sourcePages": [
                3565
              ]
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Powers",
              "value": "Can hold an opponent in a time-freezing spell",
              "sourcePage": 3565,
              "sourceKind": "composite",
              "sourcePages": [
                3297,
                3566
              ]
            }
          ]
        },
        {
          "id": "weapon",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Known weapon",
              "value": "Whip",
              "sourcePage": 3582,
              "sourceKind": "visual",
              "sourceNote": "Shown in the memory of her archaeological exploration. This does not establish a formally named strife allocation."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Rust red",
              "sourcePage": 4071,
              "sourceKind": "composite",
              "sourcePages": [
                4069
              ],
              "sourceNote": "The Handmaid is identified as Aradia’s ancestor and her lineage as rust-blooded. Color terminology summarizes the established ancestor/descendant bloodline, not the blue blood of Aradia’s former robot body."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Handmaid",
              "sourcePage": 4069,
              "sourceKind": "visual"
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
            "src": "../assets/ref-tavros-wheelchair.webp",
            "alt": "Tavros Nitram seated in his wheelchair"
          },
          "sourcePage": 2113,
          "sourceKind": "visual",
          "sourceNote": "User-supplied TavrosWheelchair.webp, matching his wheelchair depiction during Hivebent."
        },
        {
          "from": "act-5-act-2-part-1",
          "value": {
            "src": "../assets/ref-tavros-robot-legs.webp",
            "alt": "Tavros Nitram with robotic legs"
          },
          "sourcePage": 3066,
          "sourceKind": "visual",
          "sourcePages": [
            3055
          ]
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
        },
        {
          "id": "mobility",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Mobility",
              "value": "Robotic legs",
              "sourcePage": 3055,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3299,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Brown",
              "sourcePage": 3299,
              "sourceKind": "visual",
              "sourceNote": "Brown blood is visible around Tavros’s body. Its earlier appearance does not advance the editorial blood gate."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Summoner",
              "sourcePage": 3758,
              "sourceKind": "visual"
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
        },
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-sollux-blind.webp",
            "alt": "Sollux Captor after losing his sight"
          },
          "sourcePage": 3477,
          "sourceKind": "visual"
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-sollux-half-ghost.webp",
            "alt": "Sollux with one dark eye and one white ghost eye"
          },
          "sourcePage": 4001,
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
        },
        {
          "id": "sight",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Sight",
              "value": "Blind",
              "sourcePage": 3476,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-2-part-3",
              "label": "Sight",
              "value": "Can see the Green Sun in two dimensions",
              "sourcePage": 4000,
              "sourceKind": "direct",
              "sourceNote": "Replaces the unqualified Blind row, without claiming that normal vision has returned."
            }
          ]
        },
        {
          "id": "form",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Form",
              "value": "Partly a ghost",
              "sourcePage": 3998,
              "sourceKind": "composite",
              "sourcePages": [
                3999,
                4001
              ],
              "sourceNote": "Aradia describes him as having a foot on either side; the next pages show one ghost eye and describe his body arriving separately. Do not label him simply dead."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Psiioniic",
              "sourcePage": 4058,
              "sourceKind": "visual"
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
              "value": "sicklekind",
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Title",
              "value": "Knight of Blood",
              "sourcePage": 4096,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "moirail",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Moirail",
              "value": "Gamzee Makara",
              "sourcePage": 4096,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Signless / Sufferer",
              "sourcePage": 4085,
              "sourceKind": "visual"
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3711,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Disciple",
              "sourcePage": 4058,
              "sourceKind": "visual"
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
        },
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-kanaya-glowing.webp",
            "alt": "Kanaya Maryam with glowing white skin"
          },
          "sourcePage": 3523,
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Title",
              "value": "Sylph of Space",
              "sourcePage": 3305,
              "sourceKind": "composite",
              "sourcePages": [
                3311
              ],
              "sourceNote": "Kanaya contrasts her Sylph class with Jade’s Witch class while explaining their shared Space-player duties: the Forge and frog breeding."
            }
          ]
        },
        {
          "id": "weapon",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Weapon",
              "value": "Lipstick that transforms into a chainsaw",
              "sourcePage": 3539,
              "sourceKind": "visual",
              "sourcePages": [
                3344
              ]
            }
          ]
        },
        {
          "id": "form",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Form",
              "value": "Revived with glowing skin",
              "sourcePage": 3523,
              "sourceKind": "composite",
              "sourcePages": [
                3347,
                3521
              ],
              "sourceNote": "Describe the demonstrated change; the later rainbow-drinker explanation is not introduced here."
            },
            {
              "from": "act-5-act-2-part-3",
              "label": "Form",
              "value": "Rainbow drinker",
              "sourcePage": 3978,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Dolorosa",
              "sourcePage": 4057,
              "sourceKind": "visual"
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Seer of Mind",
              "sourcePage": 3095,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "Neophyte Redglare",
              "sourcePage": 3518,
              "sourceKind": "visual"
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
        },
        {
          "from": "act-5-act-2-part-1",
          "value": {
            "src": "../assets/ref-vriska-god-tier.webp",
            "alt": "Vriska Serket in her god-tier Thief of Light outfit"
          },
          "sourcePage": 3130,
          "sourceKind": "visual"
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-vriska-ghost.webp",
            "alt": "Vriska Serket as a ghost with blank eyes"
          },
          "sourcePage": 3905,
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Thief of Light",
              "sourcePage": 3238,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "tier",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Tier",
              "value": "God tier",
              "sourcePage": 3238,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Deceased · Appears in dream bubbles",
              "sourcePage": 3882,
              "sourceKind": "composite",
              "sourcePages": [
                3863,
                3905
              ]
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "Mindfang",
              "sourcePage": 3475,
              "sourceKind": "visual"
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3448,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Dark blue",
              "sourcePage": 3448,
              "sourceKind": "visual",
              "sourceNote": "Blue blood is visible on Equius’s body; Aradia also calls him blue blood on page 2288.",
              "sourcePages": [
                2288
              ]
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "Darkleer",
              "sourcePage": 3756,
              "sourceKind": "visual"
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
            },
            {
              "from": "act-5-act-2-part-2",
              "label": "Strife specibus",
              "value": "jokerkind",
              "sourcePage": 3452,
              "sourceKind": "visual",
              "sourceNote": "The strife deck explicitly displays jokerkind; preserve clubkind at the earlier checkpoints."
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Title",
              "value": "Bard of Rage",
              "sourcePage": 3360,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "moirail",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Moirail",
              "value": "Karkat Vantas",
              "sourcePage": 4096,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Blood",
              "value": "Purple",
              "sourcePage": 3455,
              "sourceKind": "visual",
              "sourceNote": "Purple blood is visible where Gamzee cuts his face with Nepeta’s claws."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Grand Highblood",
              "sourcePage": 3514,
              "sourceKind": "visual"
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
              "value": "Violet · Second-highest caste",
              "sourcePage": 2439,
              "sourceKind": "composite",
              "sourcePages": [
                3536
              ],
              "sourceNote": "The earlier dialogue places his caste second from the top; the later injury supplies the visible color. Both remain hidden before the end-of-Act-5 gate."
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
        },
        {
          "id": "title",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Title",
              "value": "Prince of Hope",
              "sourcePage": 3046,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "weapon",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Weapon",
              "value": "Wand",
              "sourcePage": 3047,
              "sourceKind": "composite",
              "sourcePages": [
                3046
              ],
              "sourceNote": "Kanaya supplies the wand while presenting it to Rose as white sorcery. This is a weapon description, not an unverified strife allocation."
            }
          ]
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3535,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "Orphaner Dualscar",
              "sourcePage": 3508,
              "sourceKind": "visual"
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
              "value": "Fuchsia · Highest caste",
              "sourcePage": 2441,
              "sourceKind": "composite",
              "sourcePages": [
                3352
              ],
              "sourceNote": "Her introduction states her blood’s rank; its color is visible on her body. Both remain hidden before the end-of-Act-5 gate."
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3352,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
            }
          ]
        },
        {
          "id": "ancestor",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ancestor",
              "value": "The Condesce",
              "sourcePage": 4063,
              "sourceKind": "visual"
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3696,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3696,
              "sourceKind": "visual",
              "sourceNote": "Confirmed by the depicted body or fatal attack before the Part 2 cutoff. Do not apply this state at earlier checkpoints."
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 3202,
              "sourceKind": "composite",
              "sourcePages": [
                3238
              ]
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
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-davesprite-injured.webp",
            "alt": "Davesprite bandaged and missing one wing"
          },
          "sourcePage": 3889,
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
        },
        {
          "id": "condition",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Condition",
              "value": "Bandaged · One wing missing",
              "sourcePage": 3889,
              "sourceKind": "visual"
            }
          ]
        }
      ],
      "sourcePage": 1651,
      "sourceKind": "intro"
    },
    {
      "id": "jadesprite",
      "group": "guardians-sprites",
      "reveal": "act-5-act-2-part-1",
      "introPage": 3213,
      "name": [
        {
          "from": "act-5-act-2-part-1",
          "value": "JADESPRITE",
          "sourcePage": 3213,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-1",
          "value": "Jadesprite",
          "sourcePage": 3213,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-1",
          "value": {
            "src": "../assets/ref-jadesprite.webp",
            "alt": "Jadesprite"
          },
          "sourcePage": 3212,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Role",
              "value": "Jade’s sprite",
              "sourcePage": 3213,
              "sourceKind": "composite",
              "sourcePages": [
                3212
              ]
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Components",
              "value": "Becquerel + Jade’s dead dream self",
              "sourcePage": 3238,
              "sourceKind": "direct",
              "sourcePages": [
                2927,
                3210,
                3211,
                3212
              ]
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Powers",
              "value": "First Guardian powers",
              "sourcePage": 3238,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "form",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Form",
              "value": "Merged with Jade’s god-tier self",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "Keep the sprite’s own historical profile and portrait; show the resulting combined form on Jade’s card."
            }
          ]
        }
      ],
      "sourcePage": 3213,
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
            },
            {
              "from": "act-5-act-2-part-1",
              "label": "Role",
              "value": "Earth’s First Guardian · Jade’s dog and guardian",
              "sourcePage": 3238,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "prototyping",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Prototyping",
              "value": "Becsprite, then Jadesprite",
              "sourcePage": 3238,
              "sourceKind": "direct",
              "sourcePages": [
                2927,
                3212
              ]
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
        },
        {
          "id": "condition",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Condition",
              "value": "Severely wounded",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "Do not infer death or a later recovery from the injury shown in Cascade."
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
        },
        {
          "from": "act-5-act-2-part-3",
          "value": "PROSPITIAN MONARCH",
          "sourcePage": 3018,
          "sourceKind": "direct",
          "sourceNote": "PM’s new title is named on page 3018. This variant accompanies her ring-transformed portrait in the Part 3 reference update; earlier reference wording remains intact."
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
        },
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-pm-prototyped.webp",
            "alt": "PM transformed by the White Queen’s ring"
          },
          "sourcePage": 4109,
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
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Queen of Prospit",
              "sourcePage": 3260,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "ring",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Ring",
              "value": "White Queen’s ring",
              "sourcePage": 4109,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Powers",
              "value": "First Guardian powers",
              "sourcePage": 4109,
              "sourceKind": "visual"
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "The death occurs in Cascade. Retain the earlier portrait and remove the status on rollback."
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "The death occurs in Cascade. Retain the earlier portrait and remove the status on rollback."
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
        },
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-jack-prototyped.webp",
            "alt": "Jack Noir with wings and prototyped features after taking the queen’s ring"
          },
          "sourcePage": 1668,
          "sourcePages": [
            1674
          ],
          "sourceKind": "visual",
          "sourceNote": "User-supplied JackPrototyped.webp, showing the ring-transformed appearance established during Act 4. Keep the original agent portrait through Intermission."
        },
        {
          "from": "act-5-act-2-part-1",
          "value": {
            "src": "../assets/ref-bec-noir.webp",
            "alt": "Jack Noir after Becquerel’s prototyping"
          },
          "sourcePage": 2927,
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
        },
        {
          "id": "alias",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Also known as",
              "value": "Bec Noir",
              "sourcePage": 3238,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-1",
              "label": "Powers",
              "value": "First Guardian powers, drawn from the Green Sun",
              "sourcePage": 3238,
              "sourceKind": "direct"
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "The death occurs in Cascade. Retain the earlier portrait and remove the status on rollback."
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
      "group": "others",
      "reveal": "intermission",
      "introPage": 1268,
      "name": [
        {
          "from": "intermission",
          "value": "SNOWMAN",
          "sourcePage": 1268,
          "sourceKind": "direct",
          "sourceNote": "The Intermission text explicitly refers to her as Snowman and states the consequence of killing her."
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
          "sourceNote": "User-supplied portrait of Snowman in her hat and suit. Keep this recognizable appearance after her former Black Queen identity becomes known; that revelation is conveyed by the Act 4 Formerly stat."
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
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Deceased",
              "sourcePage": 4109,
              "sourceKind": "visual",
              "sourceNote": "The death occurs in Cascade. Retain the earlier portrait and remove the status on rollback."
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
            "placeholder": "Appearance not yet revealed"
          },
          "sourcePage": 1155,
          "sourceKind": "editorial",
          "sourceNote": "A text placeholder for the named but unseen Felt boss. Replaces the unrelated server-device image formerly misidentified in the metadata as a name-only portrait."
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
    },
    {
      "id": "mindfang",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-2",
      "introPage": 3475,
      "name": [
        {
          "from": "act-5-act-2-part-2",
          "value": "MINDFANG",
          "sourcePage": 3506,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-2",
          "value": "Mindfang",
          "sourcePage": 3506,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-mindfang.webp",
            "alt": "Mindfang"
          },
          "sourcePage": 3475,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Descendant",
              "value": "Vriska Serket",
              "sourcePage": 3475,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Role",
              "value": "Pirate fleet commander",
              "sourcePage": 3475,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Powers",
              "value": "Mind control",
              "sourcePage": 3749,
              "sourceKind": "composite",
              "sourcePages": [
                3748
              ]
            }
          ]
        },
        {
          "id": "arm",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Arm",
              "value": "Robotic replacement made by Darkleer",
              "sourcePage": 3756,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 3475,
      "sourceKind": "intro"
    },
    {
      "id": "dualscar",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-2",
      "introPage": 3508,
      "name": [
        {
          "from": "act-5-act-2-part-2",
          "value": "ORPHANER DUALSCAR",
          "sourcePage": 3507,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-2",
          "value": "Dualscar",
          "sourcePage": 3507,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-dualscar.webp",
            "alt": "Dualscar"
          },
          "sourcePage": 3508,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Descendant",
              "value": "Eridan Ampora",
              "sourcePage": 3508,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Role",
              "value": "Mindfang’s maritime overlord and rival",
              "sourcePage": 3507,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 3508,
      "sourceKind": "intro"
    },
    {
      "id": "grand-highblood",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-2",
      "introPage": 3514,
      "name": [
        {
          "from": "act-5-act-2-part-2",
          "value": "GRAND HIGHBLOOD",
          "sourcePage": 3514,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-2",
          "value": "Grand Highblood",
          "sourcePage": 3514,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-grand-highblood.webp",
            "alt": "Grand Highblood"
          },
          "sourcePage": 3514,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Descendant",
              "value": "Gamzee Makara",
              "sourcePage": 3514,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "affiliation",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Affiliation",
              "value": "Subjugglators",
              "sourcePage": 3514,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 3514,
      "sourceKind": "intro"
    },
    {
      "id": "redglare",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-2",
      "introPage": 3518,
      "name": [
        {
          "from": "act-5-act-2-part-2",
          "value": "NEOPHYTE REDGLARE",
          "sourcePage": 3518,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-2",
          "value": "Redglare",
          "sourcePage": 3518,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-redglare.webp",
            "alt": "Redglare"
          },
          "sourcePage": 3518,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Descendant",
              "value": "Terezi Pyrope",
              "sourcePage": 3518,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Role",
              "value": "Legislacerator sent to apprehend Mindfang",
              "sourcePage": 3518,
              "sourceKind": "composite",
              "sourcePages": [
                3517
              ]
            }
          ]
        },
        {
          "id": "lusus",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Lusus",
              "value": "Pyralspite, a dragon",
              "sourcePage": 3742,
              "sourceKind": "composite",
              "sourcePages": [
                3756
              ]
            }
          ]
        },
        {
          "id": "affiliation",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Affiliation",
              "value": "Secret follower of the Signless",
              "sourcePage": 4056,
              "sourceKind": "visual"
            }
          ]
        }
      ],
      "sourcePage": 3518,
      "sourceKind": "intro"
    },
    {
      "id": "darkleer",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-2",
      "introPage": 3756,
      "name": [
        {
          "from": "act-5-act-2-part-2",
          "value": "DARKLEER",
          "sourcePage": 3756,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-2",
          "value": "Darkleer",
          "sourcePage": 3756,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-darkleer.webp",
            "alt": "Darkleer"
          },
          "sourcePage": 3756,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Descendant",
              "value": "Equius Zahhak",
              "sourcePage": 3756,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Role",
              "value": "Expatriate and skilled machinist",
              "sourcePage": 3756,
              "sourceKind": "composite",
              "sourcePages": [
                3754
              ]
            }
          ]
        },
        {
          "id": "ability",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Ability",
              "value": "Conceals nearby objects from Doc Scratch’s awareness",
              "sourcePage": 3757,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "former-role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Former role",
              "value": "Imperial executioner",
              "sourcePage": 4059,
              "sourceKind": "composite",
              "sourcePages": [
                3756
              ],
              "sourceNote": "The executioner who spares the Disciple is depicted as Equius’s ancestor, previously identified as Darkleer."
            }
          ]
        }
      ],
      "sourcePage": 3756,
      "sourceKind": "intro"
    },
    {
      "id": "summoner",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-2",
      "introPage": 3758,
      "name": [
        {
          "from": "act-5-act-2-part-2",
          "value": "THE SUMMONER",
          "sourcePage": 3757,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-2",
          "value": "Summoner",
          "sourcePage": 3757,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-2",
          "value": {
            "src": "../assets/ref-summoner.webp",
            "alt": "Summoner"
          },
          "sourcePage": 3758,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Descendant",
              "value": "Tavros Nitram",
              "sourcePage": 3758,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "foretold-role",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Foretold role",
              "value": "Leader of a rebellion",
              "sourcePage": 3758,
              "sourceKind": "direct",
              "sourceNote": "Explicitly framed as a prophecy from Mindfang’s journal, not as a new witnessed event."
            },
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Rebellion leader",
              "sourcePage": 4063,
              "sourceKind": "direct",
              "sourceNote": "Scratch’s history now confirms the uprising that Part 2 presented through Mindfang’s prophecy."
            }
          ]
        },
        {
          "id": "ability",
          "variants": [
            {
              "from": "act-5-act-2-part-2",
              "label": "Foretold abilities",
              "value": "Animal communion · Wings",
              "sourcePage": 3758,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 3758,
      "sourceKind": "intro"
    },
    {
      "id": "signless",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-3",
      "introPage": 4054,
      "name": [
        {
          "from": "act-5-act-2-part-3",
          "value": "THE SIGNLESS",
          "sourcePage": 4054,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-3",
          "value": "Signless",
          "sourcePage": 4054,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-signless.webp",
            "alt": "Signless"
          },
          "sourcePage": 4054,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Descendant",
              "value": "Karkat Vantas",
              "sourcePage": 4085,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "alias",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Also known as",
              "value": "The Sufferer",
              "sourcePage": 4054,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Preacher of compassion and equality among bloodlines",
              "sourcePage": 4054,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Executed",
              "sourcePage": 4055,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 4054,
      "sourceKind": "intro"
    },
    {
      "id": "dolorosa",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-3",
      "introPage": 4057,
      "name": [
        {
          "from": "act-5-act-2-part-3",
          "value": "THE DOLOROSA",
          "sourcePage": 4057,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-3",
          "value": "Dolorosa",
          "sourcePage": 4057,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-dolorosa.webp",
            "alt": "Dolorosa"
          },
          "sourcePage": 4057,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Descendant",
              "value": "Kanaya Maryam",
              "sourcePage": 4057,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Raised the Signless and became his first follower",
              "sourcePage": 4057,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "former-role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Former role",
              "value": "Mother Grub’s attendant in the brooding caverns",
              "sourcePage": 4057,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 4057,
      "sourceKind": "intro"
    },
    {
      "id": "disciple",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-3",
      "introPage": 4058,
      "name": [
        {
          "from": "act-5-act-2-part-3",
          "value": "THE DISCIPLE",
          "sourcePage": 4058,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-3",
          "value": "Disciple",
          "sourcePage": 4058,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-disciple.webp",
            "alt": "Disciple"
          },
          "sourcePage": 4059,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Descendant",
              "value": "Nepeta Leijon",
              "sourcePage": 4058,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Recorded and preserved the Signless’s teachings",
              "sourcePage": 4058,
              "sourceKind": "composite",
              "sourcePages": [
                4059
              ]
            }
          ]
        }
      ],
      "sourcePage": 4058,
      "sourceKind": "intro"
    },
    {
      "id": "psiioniic",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-3",
      "introPage": 4058,
      "name": [
        {
          "from": "act-5-act-2-part-3",
          "value": "THE PSIIONIIC",
          "sourcePage": 4058,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-3",
          "value": "Psiioniic",
          "sourcePage": 4058,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-psiioniic.webp",
            "alt": "Psiioniic"
          },
          "sourcePage": 4058,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Descendant",
              "value": "Sollux Captor",
              "sourcePage": 4058,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Powers",
              "value": "Telekinesis",
              "sourcePage": 4058,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Helmsman powering the Condesce’s battleship",
              "sourcePage": 4060,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "status",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Status",
              "value": "Killed by the Vast Glub",
              "sourcePage": 4064,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "sourcePage": 4058,
      "sourceKind": "intro"
    },
    {
      "id": "handmaid",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-3",
      "introPage": 4068,
      "name": [
        {
          "from": "act-5-act-2-part-3",
          "value": "THE HANDMAID",
          "sourcePage": 4068,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-3",
          "value": "Handmaid",
          "sourcePage": 4068,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-handmaid.webp",
            "alt": "Handmaid"
          },
          "sourcePage": 4069,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Descendant",
              "value": "Aradia Megido",
              "sourcePage": 4069,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Lord English’s time-traveling servant",
              "sourcePage": 4069,
              "sourceKind": "composite",
              "sourcePages": [
                4068
              ]
            }
          ]
        },
        {
          "id": "guardian",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Raised by",
              "value": "Doc Scratch",
              "sourcePage": 4068,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "fate",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Foretold fate",
              "value": "Killed by the Condesce, her replacement",
              "sourcePage": 4071,
              "sourceKind": "direct",
              "sourceNote": "Scratch states the future outcome; do not present the young Handmaid’s escape from his apartment as her death."
            }
          ]
        }
      ],
      "sourcePage": 4068,
      "sourceKind": "intro"
    },
    {
      "id": "condesce",
      "group": "ancestors",
      "reveal": "act-5-act-2-part-3",
      "introPage": 4063,
      "name": [
        {
          "from": "act-5-act-2-part-3",
          "value": "THE CONDESCE",
          "sourcePage": 4063,
          "sourceKind": "direct"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-2-part-3",
          "value": "Condesce",
          "sourcePage": 4060,
          "sourceKind": "direct"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-2-part-3",
          "value": {
            "src": "../assets/ref-condesce.webp",
            "alt": "Condesce"
          },
          "sourcePage": 4063,
          "sourceKind": "visual"
        }
      ],
      "stats": [
        {
          "id": "descendant",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Descendant",
              "value": "Feferi Peixes",
              "sourcePage": 4063,
              "sourceKind": "visual"
            }
          ]
        },
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Role",
              "value": "Empress of Alternia",
              "sourcePage": 4062,
              "sourceKind": "composite",
              "sourcePages": [
                4063
              ]
            }
          ]
        },
        {
          "id": "lusus",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Lusus",
              "value": "Gl’bgolyb",
              "sourcePage": 4063,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "powers",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Powers",
              "value": "Extends life · Communes with Gl’bgolyb",
              "sourcePage": 4060,
              "sourceKind": "composite",
              "sourcePages": [
                4063,
                4064
              ]
            }
          ]
        },
        {
          "id": "future-service",
          "variants": [
            {
              "from": "act-5-act-2-part-3",
              "label": "Future service",
              "value": "Lord English’s witch",
              "sourcePage": 4070,
              "sourceKind": "composite",
              "sourcePages": [
                4068,
                4069
              ],
              "sourceNote": "Keep the future-service framing used in Scratch’s narration; no later identity or alias is introduced."
            }
          ]
        }
      ],
      "sourcePage": 4063,
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
      "note": "At the user’s request, Aradia, Sollux, and Karkat now use Strife specibus rows reading Not yet revealed, None, and sicklekind respectively. This supersedes the weapon/ability display choices in statCoverageUpdate; source notes distinguish the requested wording from direct evidence."
    },
    "cheatSheetsRemoval": {
      "date": "2026-09-21",
      "note": "All reference cheat sheets, including the quadrant strip, were removed at the user’s request. Earlier audit entries referring to these sections are historical; the reference now contains only staged character profiles."
    },
    "snowmanPortraitUpdate": {
      "date": "2026-09-21",
      "note": "Snowman retains her name and supplied hat-and-suit portrait from Intermission onward. The troll-session Black Queen identity remains in the Formerly stat starting at Act 4. This supersedes the portrait and name switches described in stagedProfileUpdate. The unused Black Queen portrait asset is retained for future use."
    },
    "portraitReplacements": {
      "date": "2026-09-21",
      "note": "Implemented the user-approved portrait review with supplied WebP images: Tavros in his wheelchair and Aradiabot at Act 5 Act 1, Jack’s ring-transformed appearance from Act 4 with rollback to his original portrait, and a genuine text-only Lord English placeholder from Intermission. Replaced assets for Aradia, Tavros, and Lord English are retained for future use although no current checkpoint displays them. Earlier Lord English name-only portrait claims were incorrect and are superseded."
    },
    "act5Act2Part1": {
      "date": "2026-09-21",
      "throughPage": 3238,
      "stage": "act-5-act-2-part-1",
      "note": "Added Jadesprite and staged portraits for John, Vriska, Tavros, and Jack. New stats checked against official comic page components and Recap 3 (3238); kid titles cross-checked against Recap 1 (1674). Retained the manual Act 5 Act 1 cap, earlier variants, and end-of-Act-5-Act-2 blood gate. Aradia’s robot destruction is recorded without revealing her later form; no death claim is made for Davesprite. This audit covers the new records, not a new global audit."
    },
    "act5Act2Part2": {
      "date": "2026-09-22",
      "throughPage": 3762,
      "stage": "act-5-act-2-part-2",
      "note": "New records checked against the official comic page components within 3239–3762. Added six ancestors, four staged portrait changes, confirmed titles, weapon changes, and status facts. The Summoner’s role remains framed as foretold. Kanaya’s form is described by its visible effects without importing the later rainbow-drinker explanation. No new blood rows or cap advancement. Earlier variants and all prior delivery portraits preserved. Kid death/resurrection states and other transient events are not inferred from inaccessible Flash contents; parent deaths are supported by the official 3696 animation transcript."
    },
    "act5Act2Part3": {
      "date": "2026-09-22",
      "throughPage": 4110,
      "stage": "act-5-act-2-part-3",
      "note": "Added six ancestors and seven portrait variants, completing 48 profiles. New text verified against official standard and Doc Scratch comic components; Cascade’s supplied portraits and transformations checked against extracted artwork from the official page-4109 SWF. Completed all twelve player blood rows at the existing gate. Handmaid/Condesce future service remains explicitly prospective; Sollux is partly a ghost, WV severely wounded, and Lord English’s later physical reveal remains absent. The selectable cap is still Part 1. Earlier variants and delivered portraits are retained. This audit covers the new records, not a new global re-audit."
    }
  }
};
