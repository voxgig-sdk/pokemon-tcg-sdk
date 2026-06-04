-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "PokemonTcg",
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
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "attack",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "cardmarket",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "converted_retreat_cost",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "evolves_from",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "evolves_to",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 6,
          },
          {
            ["name"] = "flavor_text",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 7,
          },
          {
            ["name"] = "hp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 8,
          },
          {
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 9,
          },
          {
            ["name"] = "image",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 10,
          },
          {
            ["name"] = "legality",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 11,
          },
          {
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 12,
          },
          {
            ["name"] = "national_pokedex_number",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 13,
          },
          {
            ["name"] = "number",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 14,
          },
          {
            ["name"] = "rarity",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 15,
          },
          {
            ["name"] = "resistance",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 16,
          },
          {
            ["name"] = "retreat_cost",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 17,
          },
          {
            ["name"] = "rule",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 18,
          },
          {
            ["name"] = "set",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 19,
          },
          {
            ["name"] = "subtype",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 20,
          },
          {
            ["name"] = "supertype",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 21,
          },
          {
            ["name"] = "tcgplayer",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 22,
          },
          {
            ["name"] = "type",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 23,
          },
          {
            ["name"] = "weakness",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 24,
          },
        },
        ["name"] = "card",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 250,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "select",
                      ["orig"] = "select",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
          ["load"] = {
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
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
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
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 0,
          },
        },
        ["name"] = "rarity",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["method"] = "GET",
                ["orig"] = "/rarities",
                ["parts"] = {
                  "rarities",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["args"] = {},
                ["select"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["set"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "image",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "legality",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "printed_total",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "ptcgo_code",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 6,
          },
          {
            ["name"] = "release_date",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 7,
          },
          {
            ["name"] = "series",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 8,
          },
          {
            ["name"] = "total",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 9,
          },
          {
            ["name"] = "updated_at",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 10,
          },
        },
        ["name"] = "set",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 250,
                      ["kind"] = "query",
                      ["name"] = "page_size",
                      ["orig"] = "page_size",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
          ["load"] = {
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
                      ["active"] = true,
                    },
                  },
                },
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
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
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
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 0,
          },
        },
        ["name"] = "subtype",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["method"] = "GET",
                ["orig"] = "/subtypes",
                ["parts"] = {
                  "subtypes",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["args"] = {},
                ["select"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
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
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 0,
          },
        },
        ["name"] = "supertype",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["method"] = "GET",
                ["orig"] = "/supertypes",
                ["parts"] = {
                  "supertypes",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["args"] = {},
                ["select"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
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
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["active"] = true,
            ["index$"] = 0,
          },
        },
        ["name"] = "type",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["method"] = "GET",
                ["orig"] = "/types",
                ["parts"] = {
                  "types",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["args"] = {},
                ["select"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
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
