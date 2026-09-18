// Spoiler-aware reference data.
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
      "endPage": 247
    },
    {
      "value": 2,
      "key": "act-2",
      "label": "Act 2",
      "shortLabel": "Act 2",
      "endPage": 758
    },
    {
      "value": 3,
      "key": "act-3",
      "label": "Act 3",
      "shortLabel": "Act 3",
      "endPage": 1152
    },
    {
      "value": 4,
      "key": "intermission",
      "label": "Intermission",
      "shortLabel": "Inter.",
      "endPage": 1356
    },
    {
      "value": 5,
      "key": "act-4",
      "label": "Act 4",
      "shortLabel": "Act 4",
      "endPage": 1988
    },
    {
      "value": 6,
      "key": "act-5-act-1",
      "label": "Act 5 Act 1",
      "shortLabel": "A5A1",
      "endPage": 2625
    }
  ],
  "groups": [
    {
      "id": "kids",
      "title": [
        {
          "from": "act-1",
          "value": "THE KIDS"
        }
      ]
    },
    {
      "id": "trolls",
      "title": [
        {
          "from": "act-5-act-1",
          "value": "THE TWELVE TROLLS"
        }
      ]
    },
    {
      "id": "guardians-sprites",
      "title": [
        {
          "from": "act-1",
          "value": "GUARDIANS & SPRITES"
        }
      ]
    },
    {
      "id": "carapacians",
      "title": [
        {
          "from": "act-2",
          "value": "THE GAME WORLD"
        }
      ]
    },
    {
      "id": "others",
      "title": [
        {
          "from": "intermission",
          "value": "OTHERS"
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
          "sourcePage": 4
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "John"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-john.png",
            "alt": "John Egbert"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-1",
              "label": "Handle",
              "value": "ectoBiologist [EB]"
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Wind and Shade"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-4",
              "label": "Dream Moon",
              "value": "Prospit"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-1",
              "label": "Interests",
              "value": "Bad movies · Programming · Paranormal lore · Stage magic · Video games"
            }
          ]
        }
      ]
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
          "sourcePage": 217
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "Rose"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-rose.png",
            "alt": "Rose Lalonde"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-1",
              "label": "Handle",
              "value": "tentacleTherapist [TT]"
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Light and Rain"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-4",
              "label": "Dream Moon",
              "value": "Derse"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-1",
              "label": "Interests",
              "value": "Obscure literature · Creative writing · Occult lore · Psychoanalysis · Knitting · Video games"
            }
          ]
        }
      ]
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
          "sourcePage": 312
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Dave"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-dave.png",
            "alt": "Dave Strider"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-2",
              "label": "Handle",
              "value": "turntechGodhead [TG]"
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Land of Heat and Clockwork"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-4",
              "label": "Dream Moon",
              "value": "Derse"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-2",
              "label": "Interests",
              "value": "DJing · Obscure bands · Preserved animals · Photography"
            }
          ]
        }
      ]
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
          "sourcePage": 768
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Jade"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-jade.png",
            "alt": "Jade Harley"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-3",
              "label": "Handle",
              "value": "gardenGnostic [GG]"
            }
          ]
        },
        {
          "id": "land",
          "variants": [
            {
              "from": "act-4",
              "label": "Land",
              "value": "Not yet revealed"
            }
          ]
        },
        {
          "id": "dream-moon",
          "variants": [
            {
              "from": "act-3",
              "label": "Dream Moon",
              "value": "Prospit"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-3",
              "label": "Interests",
              "value": "Gardening · Nostalgic cartoons · Anthropomorphic animals · Nuclear physics · Gadgetry"
            }
          ]
        }
      ]
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
          "sourcePage": 2134
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Aradia"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-aradia.png",
            "alt": "Aradia Megido"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "apocalypseArisen [AA]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Rust"
            }
          ]
        },
        {
          "id": "former-interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Former Interests",
              "value": "Archaeology · Ancient ruins · Extreme roleplaying"
            }
          ]
        }
      ]
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
          "sourcePage": 2101
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Tavros"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-tavros.png",
            "alt": "Tavros Nitram"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "adiosToreador [AT]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Bronze"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Fantasy stories · Creature training · Card games · Roleplaying · Slam poetry · Flight lore"
            }
          ]
        }
      ]
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
          "sourcePage": 2076
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Sollux"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-sollux.png",
            "alt": "Sollux Captor"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "twinArmageddons [TA]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Gold"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Programming · Hacking · Apiculture networking · Video games"
            }
          ]
        }
      ]
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
          "sourcePage": 1994
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Karkat"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-karkat.png",
            "alt": "Karkat Vantas"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "carcinoGeneticist [CG]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Mutant candy-red"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Romantic comedies · Programming · Sickle practice"
            }
          ]
        }
      ]
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
          "sourcePage": 2156
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Nepeta"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-nepeta.png",
            "alt": "Nepeta Leijon"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "arsenicCatnip [AC]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Olive"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Friendly roleplaying · Hunting · Wall comics"
            }
          ]
        }
      ]
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
          "sourcePage": 2323
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Kanaya"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-kanaya.png",
            "alt": "Kanaya Maryam"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "grimAuxiliatrix [GA]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Jade"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Landscaping · Topiary · Supernatural romance novels · Fashion · Sewing"
            }
          ]
        }
      ]
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
          "sourcePage": 2031
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Terezi"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-terezi.png",
            "alt": "Terezi Pyrope"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "gallowsCalibrator [GC]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Teal"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Dragons · Scalemates · Live-action roleplaying · Alternian law"
            }
          ]
        }
      ]
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
          "sourcePage": 2195
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Vriska"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-vriska.png",
            "alt": "Vriska Serket"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "arachnidsGrip [AG]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Cerulean"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Extreme roleplaying · Games of chance · Doomsday devices · Fortune-telling"
            }
          ]
        }
      ]
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
          "sourcePage": 2211
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Equius"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-equius.png",
            "alt": "Equius Zahhak"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "centaursTesticle [CT]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Indigo"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Archery · Musclebeast art · Robotics · Strength training"
            }
          ]
        }
      ]
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
          "sourcePage": 2012
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Gamzee"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-gamzee.png",
            "alt": "Gamzee Makara"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "terminallyCapricious [TC]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Purple"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Clowns · Unicycling · Faygo · Baking · Horns"
            }
          ]
        }
      ]
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
          "sourcePage": 2408
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Eridan"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-eridan.png",
            "alt": "Eridan Ampora"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "caligulasAquarium [CA]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Violet"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Extreme roleplaying · Doomsday devices · Military history · Legendary conquerors · Magic"
            }
          ]
        }
      ]
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
          "sourcePage": 2422
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Feferi"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-feferi.png",
            "alt": "Feferi Peixes"
          }
        }
      ],
      "stats": [
        {
          "id": "handle",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Handle",
              "value": "cuttlefishCuller [CC]"
            }
          ]
        },
        {
          "id": "blood",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Blood",
              "value": "Fuchsia"
            }
          ]
        },
        {
          "id": "interests",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Interests",
              "value": "Marine wildlife care · Aquatic hoofbeasts · Cuttlefish"
            }
          ]
        }
      ]
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
          "sourcePage": 88
        }
      ],
      "rosterLabel": [
        {
          "from": "act-1",
          "value": "Dad"
        }
      ],
      "portrait": [
        {
          "from": "act-1",
          "value": {
            "src": "../assets/ref-dad.png",
            "alt": "Dad"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-1",
              "label": "Role",
              "value": "John's guardian"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-1",
          "value": "John's father, with a fondness for baking and stage performers."
        }
      ]
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
          "sourcePage": 388
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Mom"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-mom.png",
            "alt": "Mom"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "Rose's guardian"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "Rose's mother, whose home contains wizard statues and a hidden laboratory."
        }
      ]
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
          "sourcePage": 757
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Bro"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-bro.png",
            "alt": "Bro"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "Dave's guardian"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "Dave's older brother and guardian, a swordsman and puppeteer who trains him through rooftop strifes."
        }
      ]
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
          "sourcePage": 919
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Grandpa"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-grandpa.png",
            "alt": "Grandpa Harley"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jade's former guardian"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "Jade's late grandfather, an explorer and hunter whose taxidermied body remains in her home."
        }
      ]
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
          "sourcePage": 420
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "Nannasprite"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-nannasprite.png",
            "alt": "Nannasprite"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-2",
              "label": "Role",
              "value": "John's sprite"
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-2",
              "label": "Components",
              "value": "Nanna + Harlequinsprite"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "John's deceased nanna, prototyped into his sprite to become his game guide."
        }
      ]
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
          "sourcePage": 1626
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "Jaspersprite"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-jaspersprite.png",
            "alt": "Jaspersprite"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Rose's sprite"
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-4",
              "label": "Components",
              "value": "Jaspers + Eldritch princess doll"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "Rose's deceased cat, prototyped into her sprite along with an eldritch princess doll."
        }
      ]
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
          "sourcePage": 1651
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "Davesprite"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-davesprite.png",
            "alt": "Davesprite"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dave's sprite"
            }
          ]
        },
        {
          "id": "components",
          "variants": [
            {
              "from": "act-4",
              "label": "Components",
              "value": "Doomed-timeline Dave + Crowsprite"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "A Dave from a doomed timeline who travels back to warn John, then prototypes himself into Crowsprite."
        }
      ]
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
          "sourcePage": 943
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Becquerel"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-bec.png",
            "alt": "Becquerel"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Jade's guardian"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "Jade's dog and guardian, with extraordinary teleportation and space-warping abilities."
        }
      ]
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
          "sourcePage": 666
        }
      ],
      "rosterLabel": [
        {
          "from": "act-2",
          "value": "WV"
        }
      ],
      "portrait": [
        {
          "from": "act-2",
          "value": {
            "src": "../assets/ref-wv.png",
            "alt": "Wayward Vagabond"
          }
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "WARWEARY VILLEIN"
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-2",
              "label": "Abbreviation",
              "value": "WV"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-2",
          "value": "A mysterious wanderer living in a ruined landscape who communicates with John through a terminal."
        },
        {
          "from": "act-4",
          "value": "A Dark Kingdom farmer turned exile who sends commands to John from future Earth and builds Can Town."
        }
      ]
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
          "sourcePage": 892
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "PM"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-pm.png",
            "alt": "Peregrine Mendicant"
          }
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "PARCEL MISTRESS"
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-3",
              "label": "Abbreviation",
              "value": "PM"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "A mail carrier pursuing a package delivery across the ruined landscape."
        },
        {
          "from": "act-4",
          "value": "A Prospitian mail carrier turned exile, determined to complete the delivery of Jade's package."
        }
      ]
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
          "sourcePage": 1100
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "AR"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-ar.png",
            "alt": "Aimless Renegade"
          }
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "AUTHORITY REGULATOR"
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-3",
              "label": "Abbreviation",
              "value": "AR"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "An armed exile who guards the frog ruins and issues commands to Dave."
        },
        {
          "from": "act-4",
          "value": "A Dark Kingdom officer turned exile who guards the frog ruins and sends commands to Dave."
        }
      ]
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
          "sourcePage": 1543
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "WQ"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-wq.png",
            "alt": "Windswept Questant"
          }
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "WHITE QUEEN"
            }
          ]
        },
        {
          "id": "abbreviation",
          "variants": [
            {
              "from": "act-4",
              "label": "Abbreviation",
              "value": "WQ"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "Former ruler of Prospit. She abdicates, becomes an exile, and serves as Rose's future command voice."
        }
      ]
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
          "sourcePage": 955
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "Jack Noir"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-jack-noir.png",
            "alt": "Jack Noir"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Dark Kingdom archagent"
            },
            {
              "from": "act-4",
              "label": "Role",
              "value": "The kids' session archagent"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-4",
              "label": "Counterpart",
              "value": "SPADES SLICK, troll session"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "The Dark Kingdom's archagent."
        },
        {
          "from": "act-4",
          "value": "The kids' session archagent. His troll-session counterpart is exiled and becomes Spades Slick of the Midnight Crew."
        }
      ]
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
          "sourcePage": 1532
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "DD"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-dd.png",
            "alt": "Draconian Dignitary"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dark Kingdom agent"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Counterpart",
              "value": "DIAMONDS DROOG, troll session"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "A Dark Kingdom agent."
        },
        {
          "from": "act-5-act-1",
          "value": "A Dark Kingdom agent. His troll-session counterpart is exiled and becomes Diamonds Droog of the Midnight Crew."
        }
      ]
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
          "sourcePage": 1784
        }
      ],
      "rosterLabel": [
        {
          "from": "act-4",
          "value": "CD"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-cd.png",
            "alt": "Courtyard Droll"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-4",
              "label": "Role",
              "value": "Dark Kingdom agent"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Counterpart",
              "value": "CLUBS DEUCE, troll session"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-4",
          "value": "A Dark Kingdom agent who steals the White Queen's ring."
        },
        {
          "from": "act-5-act-1",
          "value": "A Dark Kingdom agent who steals the White Queen's ring. His troll-session counterpart becomes Clubs Deuce."
        }
      ]
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
          "sourcePage": 957
        }
      ],
      "rosterLabel": [
        {
          "from": "act-3",
          "value": "HB"
        }
      ],
      "portrait": [
        {
          "from": "act-3",
          "value": {
            "src": "../assets/ref-hb.png",
            "alt": "Hegemonic Brute"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-3",
              "label": "Role",
              "value": "Dark Kingdom agent"
            }
          ]
        },
        {
          "id": "counterpart",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Counterpart",
              "value": "HEARTS BOXCARS, troll session"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-3",
          "value": "A very large Dark Kingdom agent."
        },
        {
          "from": "act-5-act-1",
          "value": "A very large Dark Kingdom agent. His troll-session counterpart becomes Hearts Boxcars."
        }
      ]
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
          "sourcePage": 1268
        }
      ],
      "rosterLabel": [
        {
          "from": "intermission",
          "value": "Snowman"
        }
      ],
      "portrait": [
        {
          "from": "act-4",
          "value": {
            "src": "../assets/ref-snowman.png",
            "alt": "Snowman in her earlier Black Queen form"
          }
        }
      ],
      "stats": [
        {
          "id": "formerly",
          "variants": [
            {
              "from": "act-4",
              "label": "Formerly",
              "value": "Troll-session BLACK QUEEN"
            }
          ]
        },
        {
          "id": "affiliation",
          "variants": [
            {
              "from": "intermission",
              "label": "Affiliation",
              "value": "The Felt, number 8"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "intermission",
          "value": "A mysterious member of the Felt known as Snowman."
        },
        {
          "from": "act-4",
          "value": "The exiled Black Queen of the trolls' session, now the Felt's number 8. Her life is tied to something much larger."
        }
      ]
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
          "sourcePage": 2253
        }
      ],
      "rosterLabel": [
        {
          "from": "act-5-act-1",
          "value": "Doc Scratch"
        }
      ],
      "portrait": [
        {
          "from": "act-5-act-1",
          "value": {
            "src": "../assets/ref-doc-scratch.png",
            "alt": "Doc Scratch"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "act-5-act-1",
              "label": "Role",
              "value": "Mysterious figure associated with the Felt"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "act-5-act-1",
          "value": "Polite, omniscient-seeming, and deeply manipulative."
        }
      ]
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
          "sourcePage": 1155
        }
      ],
      "rosterLabel": [
        {
          "from": "intermission",
          "value": "Lord English"
        }
      ],
      "portrait": [
        {
          "from": "intermission",
          "value": {
            "src": "../assets/ref-lord-english.png",
            "alt": "The Lord English code"
          }
        }
      ],
      "stats": [
        {
          "id": "role",
          "variants": [
            {
              "from": "intermission",
              "label": "Role",
              "value": "The Felt's unseen boss"
            }
          ]
        }
      ],
      "note": [
        {
          "from": "intermission",
          "value": "Known only indirectly so far."
        }
      ]
    }
  ],
  "cheatSections": [
    {
      "id": "troll-cheats",
      "title": [
        {
          "from": "act-5-act-1",
          "value": "TROLL CHEAT SHEET"
        }
      ],
      "reveal": "act-5-act-1",
      "cards": [
        {
          "id": "hemospectrum",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "HEMOSPECTRUM"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "Blood color determines caste. Rust is low. Fuchsia is highest. Karkat's candy red blood is a mutation outside the normal spectrum."
            }
          ]
        },
        {
          "id": "lusus",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "LUSUS"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "An animal guardian who raises a young troll in place of parents. Plural: LUSII."
            }
          ]
        },
        {
          "id": "trollian",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "TROLLIAN"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "The trolls' chat client. It can contact people at different points in their personal timelines."
            }
          ]
        },
        {
          "id": "flarp",
          "title": [
            {
              "from": "act-5-act-1",
              "value": "FLARP"
            }
          ],
          "body": [
            {
              "from": "act-5-act-1",
              "value": "Extreme live-action roleplaying. Tavros, Vriska, Aradia, and Terezi's old campaign produced several lasting injuries."
            }
          ]
        }
      ],
      "quadrants": [
        {
          "symbol": "♥",
          "name": "MATESPRIT",
          "caption": "flushed romance"
        },
        {
          "symbol": "♦",
          "name": "MOIRAIL",
          "caption": "pale, stabilizing bond"
        },
        {
          "symbol": "♠",
          "name": "KISMESIS",
          "caption": "hostile romance"
        },
        {
          "symbol": "♣",
          "name": "AUSPISTICE",
          "caption": "third-party mediation"
        }
      ]
    },
    {
      "id": "game-cheats",
      "title": [
        {
          "from": "act-1",
          "value": "GAME CHEAT SHEET"
        }
      ],
      "reveal": "act-1",
      "cards": [
        {
          "id": "sburb",
          "title": [
            {
              "from": "act-1",
              "value": "SBURB"
            },
            {
              "from": "act-5-act-1",
              "value": "SBURB / SGRUB"
            }
          ],
          "body": [
            {
              "from": "act-1",
              "value": "The reality-altering game played by the kids."
            },
            {
              "from": "act-5-act-1",
              "value": "The reality-altering game played by the kids. The trolls' version is called SGRUB."
            }
          ]
        },
        {
          "id": "incipisphere",
          "title": [
            {
              "from": "act-2",
              "value": "INCIPISPHERE"
            }
          ],
          "body": [
            {
              "from": "act-2",
              "value": "The larger game world surrounding Skaia."
            },
            {
              "from": "act-4",
              "value": "The game cosmos: Skaia, Prospit, the player lands, the Veil, and Derse."
            }
          ]
        },
        {
          "id": "prototyping",
          "title": [
            {
              "from": "act-2",
              "value": "PROTOTYPING"
            }
          ],
          "body": [
            {
              "from": "act-2",
              "value": "Prototyping a kernelsprite before a player enters also changes the session's enemies and royalty."
            }
          ]
        },
        {
          "id": "ectobiology",
          "title": [
            {
              "from": "act-3",
              "value": "ECTOBIOLOGY"
            }
          ],
          "body": [
            {
              "from": "act-3",
              "value": "A cloning science practiced in Rose's laboratory."
            },
            {
              "from": "act-4",
              "value": "Paradox cloning across time."
            },
            {
              "from": "act-5-act-1",
              "value": "Paradox cloning across time. The troll session also involves players helping cause their own births."
            }
          ]
        },
        {
          "id": "reckoning",
          "title": [
            {
              "from": "act-4",
              "value": "RECKONING"
            }
          ],
          "body": [
            {
              "from": "act-4",
              "value": "The meteor assault from the Veil. Skaia redirects the meteors through portals into the players' home world's history."
            }
          ]
        },
        {
          "id": "doomed-timeline",
          "title": [
            {
              "from": "act-4",
              "value": "DOOMED TIMELINE"
            }
          ],
          "body": [
            {
              "from": "act-4",
              "value": "An alternate branch that cannot sustain the main causal loop, even though its players can still act before it collapses."
            }
          ]
        }
      ]
    }
  ]
};
