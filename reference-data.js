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
  "stages": [
    {
      "value": 1,
      "key": "act-1",
      "label": "Act 1",
      "shortLabel": "Act 1",
      "endPage": 247,
      "sourcePage": 247,
      "sourceKind": "boundary"
    },
    {
      "value": 2,
      "key": "act-2",
      "label": "Act 2",
      "shortLabel": "Act 2",
      "endPage": 758,
      "sourcePage": 758,
      "sourceKind": "boundary"
    },
    {
      "value": 3,
      "key": "act-3",
      "label": "Act 3",
      "shortLabel": "Act 3",
      "endPage": 1152,
      "sourcePage": 1152,
      "sourceKind": "boundary"
    },
    {
      "value": 4,
      "key": "intermission",
      "label": "Intermission",
      "shortLabel": "Inter.",
      "endPage": 1356,
      "sourcePage": 1356,
      "sourceKind": "boundary"
    },
    {
      "value": 5,
      "key": "act-4",
      "label": "Act 4",
      "shortLabel": "Act 4",
      "endPage": 1988,
      "sourcePage": 1988,
      "sourceKind": "boundary"
    },
    {
      "value": 6,
      "key": "act-5-act-1",
      "label": "Act 5 Act 1",
      "shortLabel": "A5A1",
      "endPage": 2625,
      "sourcePage": 2625,
      "sourceKind": "boundary"
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
          "value": "THE TWELVE TROLLS",
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
          "value": "GUARDIANS & SPRITES",
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
            "src": "../assets/ref-john.png",
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
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Wind and Shade",
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
            "src": "../assets/ref-rose.png",
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
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Light and Rain",
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
            "src": "../assets/ref-dave.png",
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
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Heat and Clockwork",
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
            "src": "../assets/ref-jade.png",
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
            "src": "../assets/ref-aradia.png",
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
            "src": "../assets/ref-tavros.png",
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
            "src": "../assets/ref-sollux.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Yellow",
              "sourcePage": 2146,
              "sourceKind": "direct",
              "sourceNote": "Sollux compares lower castes to his own and asks, “what’s worse than yellow?”"
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
            "src": "../assets/ref-karkat.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Mutant candy-red",
              "sourcePage": 2301,
              "sourceKind": "direct",
              "sourceNote": "Narration explicitly calls his blood “mutant candy-red.”"
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
            "src": "../assets/ref-nepeta.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Green",
              "sourcePage": 2162,
              "sourceKind": "direct",
              "sourceNote": "Nepeta asks what “green blood” means and Equius answers using the same term."
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
            "src": "../assets/ref-kanaya.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Jade green",
              "sourcePage": 2323,
              "sourceKind": "direct",
              "sourceNote": "Her introduction explicitly states that she has JADE GREEN BLOOD."
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
            "src": "../assets/ref-terezi.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Teal",
              "sourcePage": 2238,
              "sourceKind": "direct",
              "sourceNote": "Terezi describes herself as “a little too teal for their tastes.”"
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
            "src": "../assets/ref-vriska.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Cerulean",
              "sourcePage": 2276,
              "sourceKind": "direct",
              "sourceNote": "Vriska calls the blue blood covering her “cerulean swill.”"
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
            "src": "../assets/ref-equius.png",
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
            "src": "../assets/ref-gamzee.png",
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
            "src": "../assets/ref-eridan.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Penultimate on the hemospectrum",
              "sourcePage": 2439,
              "sourceKind": "direct",
              "sourceNote": "The narration says his blood is nearly the richest the hemospectrum offers and “penultimate on the scale”; the later standardized color name is intentionally not used."
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
            "src": "../assets/ref-feferi.png",
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
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Most noble blood possible",
              "sourcePage": 2441,
              "sourceKind": "direct",
              "sourceNote": "The narration calls it “the most noble blood possible” and says she is the only troll of her kind known to possess it; the later standardized color name is intentionally not used."
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
            "src": "../assets/ref-dad.png",
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
      "note": [
        {
          "from": "act-1",
          "value": "John's father, associated with constant baking and—John suspects—the performing arts.",
          "sourcePage": 70,
          "sourcePages": [
            158
          ],
          "sourceKind": "composite",
          "sourceNote": "Page 70 establishes the baking; page 158 has John infer from Dad's Serious Business contacts that the performing arts may be involved."
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
            "src": "../assets/ref-mom.png",
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
      "note": [
        {
          "from": "act-2",
          "value": "Rose's mother, whose home is crowded with wizard statues and liquor bottles.",
          "sourcePage": 365,
          "sourceKind": "direct"
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
            "src": "../assets/ref-bro.png",
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
      "note": [
        {
          "from": "act-2",
          "value": "Dave's brother, whose interests include elaborate puppet projects and expensive ninja swords.",
          "sourcePage": 419,
          "sourcePages": [
            562
          ],
          "sourceKind": "composite",
          "sourceNote": "Page 419 discusses Bro's puppet collection and websites; page 562 identifies his expensive ninja swords."
        },
        {
          "from": "act-3",
          "value": "Dave's brother, a formidable swordsman who defeats him in a rooftop strife.",
          "sourcePage": 836,
          "sourceKind": "visual",
          "sourceNote": "[S] Dave: STRIFE directly depicts their rooftop fight and Dave's defeat."
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
            "src": "../assets/ref-grandpa.png",
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
      "note": [
        {
          "from": "act-3",
          "value": "A world-renowned explorer, naturalist, scientist, adventurer, and big-game hunter; his taxidermied body remains in Jade's home.",
          "sourcePage": 790,
          "sourcePages": [
            919,
            920
          ],
          "sourceKind": "composite",
          "sourceNote": "Page 790 supplies his occupations; pages 919–920 visually/textually establish that his preserved body remains in the house."
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
            "src": "../assets/ref-nannasprite.png",
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
      "note": [
        {
          "from": "act-2",
          "value": "John's deceased nanna, resurrected through his sprite and guiding him through the Medium.",
          "sourcePage": 420,
          "sourcePages": [
            425
          ],
          "sourceKind": "composite",
          "sourceNote": "Page 420 establishes Nannasprite's identity; page 425 demonstrates her role as John's game guide."
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
            "src": "../assets/ref-jaspersprite.png",
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
      "note": [
        {
          "from": "act-4",
          "value": "Rose's deceased cat, prototyped into her sprite along with an eldritch princess doll.",
          "sourcePage": 1674,
          "sourceKind": "direct"
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
            "src": "../assets/ref-davesprite.png",
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
      "note": [
        {
          "from": "act-4",
          "value": "A Dave from a doomed timeline who travels back to change events, then prototypes himself into Crowsprite and becomes Davesprite.",
          "sourcePage": 1674,
          "sourceKind": "direct"
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
            "src": "../assets/ref-bec.png",
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
      "note": [
        {
          "from": "act-3",
          "value": "Bec is almost completely invisible to Jade's precognition and is difficult to find unless he wants to be found.",
          "sourcePage": 942,
          "sourceKind": "direct"
        },
        {
          "from": "act-4",
          "value": "Jade's radioactive, enormously powerful, space-warping dog and guardian.",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap explicitly describes Bec as radioactive, omnipotent, and space-warping, and says he looked after Jade."
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
            "src": "../assets/ref-wv.png",
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
      "note": [
        {
          "from": "act-2",
          "value": "A wanderer in the desert who has been sending commands to John through a terminal.",
          "sourcePage": 439,
          "sourceKind": "composite",
          "sourcePages": [
            666
          ],
          "sourceNote": "Story 439 shows the future terminal operator issuing John's commands; story 666 identifies him as the Wayward Vagabond."
        },
        {
          "from": "act-4",
          "value": "An exile on post-apocalyptic Earth who commands John from a terminal; formerly a Warweary Villein, a simple farmer on the Battlefield.",
          "sourcePage": 1674,
          "sourceKind": "composite",
          "sourcePages": [
            1988
          ],
          "sourceNote": "The first-year recap establishes WV as an exile on future Earth commanding John; Recap 2 identifies the Warweary Villein as a simple farmer and WV's former identity."
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
            "src": "../assets/ref-pm.png",
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
      "note": [
        {
          "from": "act-3",
          "value": "A wanderer traveling in a mobile station piled with mailboxes, carrying a package she is determined to deliver.",
          "sourcePage": 892,
          "sourceKind": "composite",
          "sourcePages": [
            1039
          ],
          "sourceNote": "Story 892 introduces PM in her mobile station amid mailboxes; the later Act 3 sequence around story 1039 shows her involvement with the package and its delivery instructions."
        },
        {
          "from": "act-4",
          "value": "A former Parcel Mistress who becomes an exile and continues her mission to deliver Jade's package to John.",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap explicitly connects PM's Parcel Mistress role, exile status, and delivery mission."
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
            "src": "../assets/ref-ar.png",
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
      "note": [
        {
          "from": "act-3",
          "value": "An armed figure defending his stronghold against WV and PM.",
          "sourcePage": 1100,
          "sourceKind": "direct",
          "sourceNote": "AR's introduction describes WV and PM as unwelcome rogues outside his stronghold and notes that he has emptied his ammunition at them."
        },
        {
          "from": "act-4",
          "value": "A former Authority Regulator who becomes one of the exiles on post-apocalyptic Earth.",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap explicitly establishes AR as a former Authority Regulator and one of the exiles."
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
            "src": "../assets/ref-wq.png",
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
      "note": [
        {
          "from": "act-4",
          "value": "The former White Queen, who abdicates, eventually exiles herself to post-apocalyptic Earth, and commands Rose from the egg-shaped station.",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap explicitly covers her abdication, later exile as WQ, and her role issuing commands to Rose."
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
            "src": "../assets/ref-jack-noir.png",
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
      "note": [
        {
          "from": "act-3",
          "value": "The Dark Kingdom's archagent, overseeing its affairs from his office.",
          "sourcePage": 955,
          "sourceKind": "direct"
        },
        {
          "from": "act-4",
          "value": "The kids' session Jack Noir; the corresponding Jack in the trolls' session is exiled and becomes Spades Slick of the Midnight Crew.",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap explicitly distinguishes the sessions, identifies the troll-session Jack as Spades Slick, and says he and three other exiled agents formed the Midnight Crew."
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
            "src": "../assets/ref-dd.png",
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
      "note": [
        {
          "from": "act-4",
          "value": "Jack Noir's henchman, carrying Rose's stolen journal copies and Dave's beta through the meteor lab.",
          "sourcePage": 1988,
          "sourceKind": "direct",
          "sourceNote": "Recap 2 explicitly identifies DD as Jack's henchman and describes him carrying the duplicated journals and beta."
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
            "src": "../assets/ref-cd.png",
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
      "note": [
        {
          "from": "act-4",
          "value": "A lackey of Jack Noir who steals the White Queen's ring from PM.",
          "sourcePage": 1988,
          "sourceKind": "direct",
          "sourceNote": "Recap 2 explicitly states that CD picked PM's pocket and stole the ring."
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
            "src": "../assets/ref-hb.png",
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
      "note": [
        {
          "from": "act-4",
          "value": "Jack Noir's muscle, who follows PM on the Battlefield and attacks her before she later beheads him.",
          "sourcePage": 1988,
          "sourceKind": "direct",
          "sourceNote": "Recap 2 explicitly describes HB tailing and attacking PM, and PM later beheading him."
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
          "from": "act-4",
          "value": {
            "src": "../assets/ref-snowman.png",
            "alt": "Snowman in her earlier Black Queen form"
          },
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap directly establishes that the troll-session Black Queen was exiled and became Snowman; the portrait is held until this identity is safe."
        }
      ],
      "stats": [
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
      "note": [
        {
          "from": "intermission",
          "value": "A mysterious woman known as Snowman; killing her would destroy the universe.",
          "sourcePage": 1268,
          "sourceKind": "direct"
        },
        {
          "from": "act-4",
          "value": "The exiled Black Queen of the trolls' session, who joins the Felt and comes to be known as Snowman; she has powers that make killing her highly inadvisable.",
          "sourcePage": 1674,
          "sourceKind": "direct",
          "sourceNote": "The first-year recap states this identity chain and explicitly notes that she acquired special powers making her highly inadvisable to kill."
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
            "src": "../assets/ref-doc-scratch.png",
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
      "note": [
        {
          "from": "act-5-act-1",
          "value": "His job is to pave the way for Lord English's arrival when the universe ends.",
          "sourcePage": 2253,
          "sourceKind": "direct",
          "sourceNote": "Paraphrases the introduction's explanation of Scratch's task and English's arrival."
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
            "src": "../assets/ref-lord-english.png",
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
      "note": [
        {
          "from": "intermission",
          "value": "Spades Slick has entered his mansion to crack his secret vault.",
          "sourcePage": 1155,
          "sourceKind": "direct",
          "sourceNote": "This is the Midnight Crew's stated objective on Slick's Intermission introduction page."
        },
        {
          "from": "act-5-act-1",
          "value": "Doc Scratch is working to pave the way for his arrival when the universe ends.",
          "sourcePage": 2253,
          "sourceKind": "direct",
          "sourceNote": "Doc Scratch's introduction directly explains this relationship and task."
        }
      ],
      "sourcePage": 1155,
      "sourceKind": "intro"
    }
  ],
  "cheatSections": [
    {
      "id": "troll-cheats",
      "title": [
        {
          "from": "act-5-act-1",
          "value": "TROLL CHEAT SHEET",
          "sourcePage": 1994,
          "sourceKind": "editorial",
          "sourceNote": "Editorial section title; page 1994 marks the beginning of the current Hivebent character material."
        }
      ],
      "reveal": "act-5-act-1",
      "cards": [
        {
          "id": "hemospectrum",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "HEMOSPECTRUM",
              "sourcePage": 2439,
              "sourceKind": "direct",
              "sourceNote": "Eridan's introduction explicitly uses the term hemospectrum."
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "A blood-based hierarchy. Eridan's blood is nearly the richest on the spectrum, while Karkat's candy-red blood is a mutation outside the normal order.",
              "sourcePage": 2439,
              "sourcePages": [
                2301
              ],
              "sourceKind": "composite",
              "sourceNote": "Page 2439 establishes the ranked hemospectrum through Eridan; page 2301 explicitly identifies Karkat's candy-red blood as a mutation."
            }
          ]
        },
        {
          "id": "lusus",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "LUSUS",
              "sourcePage": 2069,
              "sourceKind": "direct",
              "sourceNote": "The narration explicitly introduces LUSUS NATURAE."
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "A creature that raises a young troll in place of biological parents.",
              "sourcePage": 2069,
              "sourceKind": "direct",
              "sourceNote": "The narration says a lusus looks after a troll from a young age in lieu of biological parents."
            }
          ]
        },
        {
          "id": "trollian",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "TROLLIAN",
              "sourcePage": 2543,
              "sourceKind": "direct",
              "sourceNote": "The page shows the Trollian interface and names Trollian in the memo."
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "The trolls' messaging client. Its transtimeline features let messages be read at different points in the participants' timelines.",
              "sourcePage": 2543,
              "sourceKind": "direct",
              "sourceNote": "Karkat describes Trollian's transtimeline memo features and says past and future memos can be read."
            }
          ]
        },
        {
          "id": "flarp",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "FLARP",
              "sourcePage": 2167,
              "sourceKind": "direct",
              "sourceNote": "Tavros is explicitly about to play a game called FLARP."
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "A popular EXTREME ROLE PLAYING game with serious real-world consequences. Team Charge and Team Scourge are rival teams in the campaign shown.",
              "sourcePage": 2167,
              "sourceKind": "direct",
              "sourceNote": "All of these details are stated on Tavros's FLARP setup page."
            }
          ]
        }
      ],
      "quadrants": [
        {
          "symbol": "♥",
          "name": "MATESPRIT",
          "caption": "flushed romance",
          "sourcePage": 2394,
          "sourceKind": "direct",
          "sourceNote": "The flushed-quadrant explanation names partners as MATESPRITS and compares the bond to human romance."
        },
        {
          "symbol": "♦",
          "name": "MOIRAIL",
          "caption": "pale, stabilizing bond",
          "sourcePage": 2401,
          "sourceKind": "direct",
          "sourceNote": "The pale-quadrant explanation defines MOIRAIL and its pacifying, balancing function."
        },
        {
          "symbol": "♠",
          "name": "KISMESIS",
          "caption": "caliginous arch-rivalry",
          "sourcePage": 2395,
          "sourceKind": "direct",
          "sourceNote": "The caliginous-quadrant explanation defines KISMESIS as an especially potent arch-rivalry."
        },
        {
          "symbol": "♣",
          "name": "AUSPISTICE",
          "caption": "ashen, third-party mediation",
          "sourcePage": 2397,
          "sourceKind": "direct",
          "sourceNote": "The ashen-quadrant explanation defines the AUSPISTICE as a mediator between two trolls in conflict."
        }
      ]
    },
    {
      "id": "game-cheats",
      "title": [
        {
          "from": "act-1",
          "value": "GAME CHEAT SHEET",
          "sourcePage": 42,
          "sourceKind": "editorial",
          "sourceNote": "Editorial section heading; sourcePage points to the first direct SBURB-as-game reference used by this section."
        }
      ],
      "reveal": "act-1",
      "cards": [
        {
          "id": "sburb",
          "title": [
            {
              "from": "act-1",
              "value": "SBURB",
              "sourcePage": 42,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-1",
              "value": "SBURB / SGRUB",
              "sourcePage": 2134,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-1",
              "value": "A computer game John begins playing with Rose.",
              "sourcePage": 204,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-1",
              "value": "The kids play SBURB; the trolls' version of the game is called SGRUB.",
              "sourcePage": 2134,
              "sourcePages": [
                204
              ],
              "sourceKind": "composite"
            }
          ]
        },
        {
          "id": "incipisphere",
          "title": [
            {
              "from": "act-2",
              "value": "INCIPISPHERE",
              "sourcePage": 421,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-2",
              "value": "The larger realm in which the Medium exists, untouched by the flow of time in John's universe.",
              "sourcePage": 421,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "prototyping",
          "title": [
            {
              "from": "act-2",
              "value": "PROTOTYPING",
              "sourcePage": 424,
              "sourceKind": "direct",
              "sourceNote": "Nannasprite explicitly uses the language of prototyping and explains that the Sprite's Kernel hatches on John's arrival, carrying information from anything prototyped before the hatch."
            }
          ],
          "body": [
            {
              "from": "act-2",
              "value": "When John arrives, the Sprite's Kernel hatches automatically. The two resulting Kernels carry whatever they were prototyped with before the hatch; John's ash mishap happens afterward and changes the Sprite's incarnation.",
              "sourcePage": 424,
              "sourceKind": "direct",
              "sourceNote": "Nannasprite states that the Kernel hatches automatically in response to John's arrival, that both resulting Kernels carry the information they were prototyped with before the hatch, and that the ash mishap occurred afterward and changed the Sprite from its previous incarnation."
            },
            {
              "from": "act-4",
              "value": "Pre-entry prototypings alter the enemies the players face; post-entry prototypings affect only the sprite.",
              "sourcePage": 1674,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "ectobiology",
          "title": [
            {
              "from": "act-3",
              "value": "ECTOBIOLOGY",
              "sourcePage": 934,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-3",
              "value": "A cloning science used in the laboratory to produce a paradox clone of Jaspers.",
              "sourcePage": 934,
              "sourceKind": "direct"
            },
            {
              "from": "act-4",
              "value": "Paradox cloning across time: John uses ectobiology to create infant versions of himself, his friends, and their guardians, who are sent back to become them.",
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "reckoning",
          "title": [
            {
              "from": "act-4",
              "value": "RECKONING",
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-4",
              "value": "A 24-hour meteor assault from the Veil toward Skaia. Skaia's defense portals redirect many of the meteors elsewhere in space and time.",
              "sourcePage": 1988,
              "sourcePages": [
                1674
              ],
              "sourceKind": "composite"
            }
          ]
        },
        {
          "id": "doomed-timeline",
          "title": [
            {
              "from": "act-4",
              "value": "ALTERNATE TIMELINE",
              "sourcePage": 1674,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-1",
              "value": "DOOMED TIMELINE",
              "sourcePage": 2591,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-4",
              "value": "An alternative future timeline that is not meant to be. Dave travels back from one such future to change events, causing that future to cease.",
              "sourcePage": 1674,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-1",
              "value": "A doomed offshoot of the alpha timeline. A future self returning to the past from one is slated for imminent destruction.",
              "sourcePage": 2591,
              "sourceKind": "direct"
            }
          ]
        }
      ]
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
      "others",
      "troll-cheats",
      "game-cheats"
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
    ]
  }
};
