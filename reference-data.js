// Spoiler-aware reference data.
// Each user-facing variant includes sourcePage metadata for manual fact-checking.
// sourceKind is informational only: "intro" points to the character introduction,
// "direct" points to a page chosen as direct support, "editorial" identifies a
// reference-page organizational label, and "boundary" is a conservative stage-end
// checkpoint that should be refined if a more exact page is identified during
// manual auditing. sourcePages may list additional support.
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
          "sourcePage": 4,
          "sourcePages": [
            4,
            217,
            312,
            768
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
            1994,
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
          "sourcePages": [
            88,
            388,
            757,
            919,
            420,
            1626,
            1651,
            943
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
          "sourcePages": [
            666,
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
          "sourcePages": [
            1155,
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
          "sourcePage": 4,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "John",
          "sourcePage": 4,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-john.png",
            "alt": "John Egbert"
          },
          "sourcePage": 4,
          "sourceKind": "intro"
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
              "sourcePage": 4,
              "sourceKind": "intro"
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
              "sourcePage": 1988,
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
              "sourcePage": 1988,
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
              "value": "Bad movies · Programming · Paranormal lore · Stage magic · Video games",
              "sourcePage": 4,
              "sourceKind": "intro"
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
          "sourcePage": 217,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "Rose",
          "sourcePage": 217,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-rose.png",
            "alt": "Rose Lalonde"
          },
          "sourcePage": 217,
          "sourceKind": "intro"
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
              "sourcePage": 217,
              "sourceKind": "intro"
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
              "sourcePage": 1988,
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
              "sourcePage": 1988,
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
              "value": "Obscure literature · Creative writing · Occult lore · Psychoanalysis · Knitting · Video games",
              "sourcePage": 217,
              "sourceKind": "intro"
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
          "sourcePage": 312,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Dave",
          "sourcePage": 312,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-dave.png",
            "alt": "Dave Strider"
          },
          "sourcePage": 312,
          "sourceKind": "intro"
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
              "sourcePage": 312,
              "sourceKind": "intro"
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
              "sourcePage": 1988,
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
              "sourcePage": 1988,
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
              "sourceKind": "intro"
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
          "sourcePage": 768,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Jade",
          "sourcePage": 768,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-jade.png",
            "alt": "Jade Harley"
          },
          "sourcePage": 768,
          "sourceKind": "intro"
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
              "sourcePage": 768,
              "sourceKind": "intro"
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
              "sourcePage": 1988,
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
              "sourcePage": 768,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-3",
              "label": "Interests",
              "value": "Gardening · Nostalgic cartoons · Anthropomorphic animals · Nuclear physics · Gadgetry",
              "sourcePage": 768,
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Aradia",
          "sourcePage": 2134,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Rust",
              "sourcePage": 2134,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "former-interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Former Interests",
              "value": "Archaeology · Ancient ruins · Extreme roleplaying",
              "sourcePage": 2134,
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Tavros",
          "sourcePage": 2101,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Bronze",
              "sourcePage": 2101,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Sollux",
          "sourcePage": 2076,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Gold",
              "sourcePage": 2076,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Programming · Hacking · Apiculture networking · Video games",
              "sourcePage": 2076,
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Karkat",
          "sourcePage": 1994,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
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
              "sourcePage": 1994,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Nepeta",
          "sourcePage": 2156,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Olive",
              "sourcePage": 2156,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Kanaya",
          "sourcePage": 2323,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Jade",
              "sourcePage": 2323,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Terezi",
          "sourcePage": 2031,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
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
              "sourcePage": 2031,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Vriska",
          "sourcePage": 2195,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
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
              "sourcePage": 2195,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Equius",
          "sourcePage": 2211,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Indigo",
              "sourcePage": 2211,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Archery · Musclebeast art · Robotics · Strength training",
              "sourcePage": 2211,
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Gamzee",
          "sourcePage": 2012,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Purple",
              "sourcePage": 2012,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Eridan",
          "sourcePage": 2408,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourcePage": 2408,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Violet",
              "sourcePage": 2408,
              "sourceKind": "intro"
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
              "sourcePage": 2408,
              "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Feferi",
          "sourcePage": 2422,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourcePage": 2422,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Fuchsia",
              "sourcePage": 2422,
              "sourceKind": "intro"
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
              "sourcePage": 2422,
              "sourceKind": "intro"
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
      "introPage": 88,
      "name": [
        {
          "from": "act-1",
          "value": "DAD",
          "sourcePage": 88,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "Dad",
          "sourcePage": 88,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-dad.png",
            "alt": "Dad"
          },
          "sourcePage": 88,
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-1",
              "label": "Role",
              "value": "John's guardian",
              "sourcePage": 88,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-1",
          "value": "John's father, with a fondness for baking and stage performers.",
          "sourcePage": 88,
          "sourceKind": "intro"
        }
      ],
      "sourcePage": 88,
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
          "sourcePage": 388,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Mom",
          "sourcePage": 388,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "Rose's guardian",
              "sourcePage": 388,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "Rose's mother, whose home contains wizard statues and a hidden laboratory.",
          "sourcePage": 388,
          "sourceKind": "intro"
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
          "sourcePage": 757,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Bro",
          "sourcePage": 757,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "Dave's guardian",
              "sourcePage": 757,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "Dave's older brother and guardian, a swordsman and puppeteer who trains him through rooftop strifes.",
          "sourcePage": 757,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Grandpa",
          "sourcePage": 919,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jade's former guardian",
              "sourcePage": 919,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "Jade's late grandfather, an explorer and hunter whose taxidermied body remains in her home.",
          "sourcePage": 919,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Nannasprite",
          "sourcePage": 420,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "John's sprite",
              "sourcePage": 420,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-2",
              "label": "Components",
              "value": "Nanna + Harlequinsprite",
              "sourcePage": 420,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "John's deceased nanna, prototyped into his sprite to become his game guide.",
          "sourcePage": 420,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "Jaspersprite",
          "sourcePage": 1626,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Rose's sprite",
              "sourcePage": 1626,
              "sourceKind": "intro"
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
              "sourcePage": 1626,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "Rose's deceased cat, prototyped into her sprite along with an eldritch princess doll.",
          "sourcePage": 1626,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "Davesprite",
          "sourcePage": 1651,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dave's sprite",
              "sourcePage": 1651,
              "sourceKind": "intro"
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
              "sourcePage": 1651,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "A Dave from a doomed timeline who travels back to warn John, then prototypes himself into Crowsprite.",
          "sourcePage": 1651,
          "sourceKind": "intro"
        }
      ],
      "sourcePage": 1651,
      "sourceKind": "intro"
    },
    {
      "id": "bec",
      "group": "guardians-sprites",
      "reveal": "act-3",
      "introPage": 943,
      "name": [
        {
          "from": "act-3",
          "value": "BECQUEREL",
          "sourcePage": 943,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Becquerel",
          "sourcePage": 943,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jade's guardian",
              "sourcePage": 943,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "Jade's dog and guardian, with extraordinary teleportation and space-warping abilities.",
          "sourcePage": 943,
          "sourceKind": "intro"
        }
      ],
      "sourcePage": 943,
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "WV",
          "sourcePage": 666,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourceKind": "direct"
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
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "A mysterious wanderer living in a ruined landscape who communicates with John through a terminal.",
          "sourcePage": 666,
          "sourceKind": "intro"
        },
        {
          "from": "act-4",
          "value": "A Dark Kingdom farmer turned exile who sends commands to John from future Earth and builds Can Town.",
          "sourcePage": 1988,
          "sourceKind": "direct"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "PM",
          "sourcePage": 892,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourcePage": 1988,
              "sourceKind": "direct"
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
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "A mail carrier pursuing a package delivery across the ruined landscape.",
          "sourcePage": 892,
          "sourceKind": "intro"
        },
        {
          "from": "act-4",
          "value": "A Prospitian mail carrier turned exile, determined to complete the delivery of Jade's package.",
          "sourcePage": 1988,
          "sourceKind": "direct"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "AR",
          "sourcePage": 1100,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourcePage": 1988,
              "sourceKind": "direct"
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
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "An armed exile who guards the frog ruins and issues commands to Dave.",
          "sourcePage": 1100,
          "sourceKind": "intro"
        },
        {
          "from": "act-4",
          "value": "A Dark Kingdom officer turned exile who guards the frog ruins and sends commands to Dave.",
          "sourcePage": 1988,
          "sourceKind": "direct"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "WQ",
          "sourcePage": 1543,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourcePage": 1543,
              "sourceKind": "intro"
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
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "Former ruler of Prospit. She abdicates, becomes an exile, and serves as Rose's future command voice.",
          "sourcePage": 1543,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Jack Noir",
          "sourcePage": 955,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Dark Kingdom archagent",
              "sourcePage": 955,
              "sourceKind": "intro"
            },
            {
              "from": "act-4",
              "label": "Role",
              "value": "The kids' session archagent",
              "sourcePage": 1988,
              "sourceKind": "direct"
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
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "The Dark Kingdom's archagent.",
          "sourcePage": 955,
          "sourceKind": "intro"
        },
        {
          "from": "act-4",
          "value": "The kids' session archagent. His troll-session counterpart is exiled and becomes Spades Slick of the Midnight Crew.",
          "sourcePage": 1988,
          "sourceKind": "direct"
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
          "sourcePage": 1532,
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "DD",
          "sourcePage": 1532,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dark Kingdom agent",
              "sourcePage": 1532,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Counterpart",
              "value": "DIAMONDS DROOG, troll session",
              "sourcePage": 2625,
              "sourceKind": "boundary"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "A Dark Kingdom agent.",
          "sourcePage": 1532,
          "sourceKind": "intro"
        },
        {
          "from": "act-5-act-1",
          "value": "A Dark Kingdom agent. His troll-session counterpart is exiled and becomes Diamonds Droog of the Midnight Crew.",
          "sourcePage": 2625,
          "sourceKind": "boundary"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "CD",
          "sourcePage": 1784,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dark Kingdom agent",
              "sourcePage": 1784,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Counterpart",
              "value": "CLUBS DEUCE, troll session",
              "sourcePage": 2625,
              "sourceKind": "boundary"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "A Dark Kingdom agent who steals the White Queen's ring.",
          "sourcePage": 1784,
          "sourceKind": "intro"
        },
        {
          "from": "act-5-act-1",
          "value": "A Dark Kingdom agent who steals the White Queen's ring. His troll-session counterpart becomes Clubs Deuce.",
          "sourcePage": 2625,
          "sourceKind": "boundary"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "HB",
          "sourcePage": 957,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Dark Kingdom agent",
              "sourcePage": 957,
              "sourceKind": "intro"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Counterpart",
              "value": "HEARTS BOXCARS, troll session",
              "sourcePage": 2625,
              "sourceKind": "boundary"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "A very large Dark Kingdom agent.",
          "sourcePage": 957,
          "sourceKind": "intro"
        },
        {
          "from": "act-5-act-1",
          "value": "A very large Dark Kingdom agent. His troll-session counterpart becomes Hearts Boxcars.",
          "sourcePage": 2625,
          "sourceKind": "boundary"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "intermission",
          "value": "Snowman",
          "sourcePage": 1268,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-snowman.png",
            "alt": "Snowman in her earlier Black Queen form"
          },
          "sourcePage": 1268,
          "sourceKind": "intro"
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
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "affiliation",
          "variants": [
            {
              "from": "intermission",
              "label": "Affiliation",
              "value": "The Felt, number 8",
              "sourcePage": 1268,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "intermission",
          "value": "A mysterious member of the Felt known as Snowman.",
          "sourcePage": 1268,
          "sourceKind": "intro"
        },
        {
          "from": "act-4",
          "value": "The exiled Black Queen of the trolls' session, now the Felt's number 8. Her life is tied to something much larger.",
          "sourcePage": 1988,
          "sourceKind": "direct"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Doc Scratch",
          "sourcePage": 2253,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Role",
              "value": "Mysterious figure associated with the Felt",
              "sourcePage": 2253,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-5-act-1",
          "value": "Polite, omniscient-seeming, and deeply manipulative.",
          "sourcePage": 2253,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
        }
      ],
      "rosterLabel": [
        {
          "from": "intermission",
          "value": "Lord English",
          "sourcePage": 1155,
          "sourceKind": "intro"
        }
      ],
      "portrait": [
        {
          "from": "intermission",
          "value": {
            "src": "../assets/ref-lord-english.png",
            "alt": "The Lord English code"
          },
          "sourcePage": 1155,
          "sourceKind": "intro"
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "intermission",
              "label": "Role",
              "value": "The Felt's unseen boss",
              "sourcePage": 1155,
              "sourceKind": "intro"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "intermission",
          "value": "Known only indirectly so far.",
          "sourcePage": 1155,
          "sourceKind": "intro"
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
          "sourceKind": "intro"
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
              "sourcePage": 2448,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "Blood color determines caste. Rust is low. Fuchsia is highest. Karkat's candy red blood is a mutation outside the normal spectrum.",
              "sourcePage": 2448,
              "sourceKind": "direct",
              "sourcePages": [
                1994,
                2422,
                2448
              ]
            }
          ]
        },
        {
          "id": "lusus",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "LUSUS",
              "sourcePage": 2195,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "An animal guardian who raises a young troll in place of parents. Plural: LUSII.",
              "sourcePage": 2195,
              "sourceKind": "direct",
              "sourcePages": [
                1994,
                2195
              ]
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
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "The trolls' chat client. It can contact people at different points in their personal timelines.",
              "sourcePage": 2543,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "flarp",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "FLARP",
              "sourcePage": 2195,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "Extreme live-action roleplaying. Tavros, Vriska, Aradia, and Terezi's old campaign produced several lasting injuries.",
              "sourcePage": 2195,
              "sourceKind": "direct",
              "sourcePages": [
                2031,
                2101,
                2134,
                2195
              ]
            }
          ]
        }
      ],
      "quadrants": [
        {
          "symbol": "♥",
          "name": "MATESPRIT",
          "caption": "flushed romance",
          "sourcePage": 2625,
          "sourceKind": "boundary"
        },
        {
          "symbol": "♦",
          "name": "MOIRAIL",
          "caption": "pale, stabilizing bond",
          "sourcePage": 2625,
          "sourceKind": "boundary"
        },
        {
          "symbol": "♠",
          "name": "KISMESIS",
          "caption": "hostile romance",
          "sourcePage": 2625,
          "sourceKind": "boundary"
        },
        {
          "symbol": "♣",
          "name": "AUSPISTICE",
          "caption": "third-party mediation",
          "sourcePage": 2625,
          "sourceKind": "boundary"
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
          "sourceKind": "direct"
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
              "value": "The reality-altering game played by the kids.",
              "sourcePage": 247,
              "sourceKind": "boundary"
            },
            {
              "from": "act-5-act-1",
              "value": "The reality-altering game played by the kids. The trolls' version is called SGRUB.",
              "sourcePage": 2134,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "incipisphere",
          "title": [
            {
              "from": "act-2",
              "value": "INCIPISPHERE",
              "sourcePage": 758,
              "sourceKind": "boundary"
            }
          ],
          "body": [
            {
              "from": "act-2",
              "value": "The larger game world surrounding Skaia.",
              "sourcePage": 758,
              "sourceKind": "boundary"
            },
            {
              "from": "act-4",
              "value": "The game cosmos: Skaia, Prospit, the player lands, the Veil, and Derse.",
              "sourcePage": 1988,
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
              "sourcePage": 758,
              "sourceKind": "boundary"
            }
          ],
          "body": [
            {
              "from": "act-2",
              "value": "Prototyping a kernelsprite before a player enters also changes the session's enemies and royalty.",
              "sourcePage": 758,
              "sourceKind": "boundary"
            }
          ]
        },
        {
          "id": "ectobiology",
          "title": [
            {
              "from": "act-3",
              "value": "ECTOBIOLOGY",
              "sourcePage": 914,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-3",
              "value": "A cloning science practiced in Rose's laboratory.",
              "sourcePage": 914,
              "sourceKind": "direct"
            },
            {
              "from": "act-4",
              "value": "Paradox cloning across time.",
              "sourcePage": 1988,
              "sourceKind": "direct"
            },
            {
              "from": "act-5-act-1",
              "value": "Paradox cloning across time. The troll session also involves players helping cause their own births.",
              "sourcePage": 2625,
              "sourceKind": "boundary"
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
              "value": "The meteor assault from the Veil. Skaia redirects the meteors through portals into the players' home world's history.",
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ]
        },
        {
          "id": "doomed-timeline",
          "title": [
            {
              "from": "act-4",
              "value": "DOOMED TIMELINE",
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ],
          "body": [
            {
              "from": "act-4",
              "value": "An alternate branch that cannot sustain the main causal loop, even though its players can still act before it collapses.",
              "sourcePage": 1988,
              "sourceKind": "direct"
            }
          ]
        }
      ]
    }
  ]
};
