-- PokemonTcg SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "PokemonTcg",
      slug = "pokemon-tcg",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.pokemontcg.io/v2",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["card"] = {},
        ["rarity"] = {},
        ["set"] = {},
        ["subtype"] = {},
        ["supertype"] = {},
        ["type"] = {},
      },
    },
    entity = {
      ["card"] = {
        ["fields"] = {
          {
            ["name"] = "artist",
            ["short"] = "Artist who illustrated the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "attacks",
            ["short"] = "Attacks the Pokémon can perform",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "cardmarket",
            ["short"] = "Cardmarket information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "convertedRetreatCost",
            ["short"] = "Numeric value of retreat cost",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "evolvesFrom",
            ["short"] = "The Pokémon this card evolves from",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "evolvesTo",
            ["short"] = "The Pokémon this card evolves to",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "flavorText",
            ["short"] = "Flavor text on the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hp",
            ["short"] = "Hit points of the Pokémon",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "images",
            ["short"] = "Image URLs for the card",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "legalities",
            ["short"] = "Legality of the card in different formats",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nationalPokedexNumbers",
            ["short"] = "National Pokédex numbers",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "number",
            ["short"] = "Card number within the set",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rarity",
            ["short"] = "Rarity of the card",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "resistances",
            ["short"] = "Resistances of the Pokémon",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "retreatCost",
            ["short"] = "Retreat cost of the Pokémon",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "rules",
            ["short"] = "Special rules for the card",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "set",
            ["short"] = "Set information for the card",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "subtypes",
            ["short"] = "Subtypes of the card",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "supertype",
            ["short"] = "Supertype of the card (e.g., Pokémon, Trainer, Energy)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tcgplayer",
            ["short"] = "TCGPlayer market information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "types",
            ["short"] = "Energy types of the card",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "weaknesses",
            ["short"] = "Weaknesses of the Pokémon",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "card",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 250,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "select",
                      ["orig"] = "select",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards",
                ["parts"] = {
                  "cards",
                },
                ["select"] = {
                  ["exist"] = {
                    "order_by",
                    "page",
                    "page_size",
                    "q",
                    "select",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}",
                ["parts"] = {
                  "cards",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rarity"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "rarity",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/rarities",
                ["parts"] = {
                  "rarities",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["set"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the set",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "images",
            ["short"] = "Image URLs for the set",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "legalities",
            ["short"] = "Legality of the set in different formats",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the set",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "printedTotal",
            ["short"] = "Number of cards printed in the set",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "ptcgoCode",
            ["short"] = "PTCGO code for the set",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "releaseDate",
            ["short"] = "Release date of the set",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "series",
            ["short"] = "Series the set belongs to",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "total",
            ["short"] = "Total number of cards in the set including secret rares",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "updatedAt",
            ["short"] = "Last updated timestamp",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "set",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 250,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/sets",
                ["parts"] = {
                  "sets",
                },
                ["select"] = {
                  ["exist"] = {
                    "order_by",
                    "page",
                    "page_size",
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/sets/{id}",
                ["parts"] = {
                  "sets",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["subtype"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "subtype",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/subtypes",
                ["parts"] = {
                  "subtypes",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["supertype"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "supertype",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/supertypes",
                ["parts"] = {
                  "supertypes",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["type"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "type",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/types",
                ["parts"] = {
                  "types",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
