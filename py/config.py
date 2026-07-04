# PokemonTcg SDK configuration


def make_config():
    return {
        "main": {
            "name": "PokemonTcg",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.pokemontcg.io/v2",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "card": {},
                "rarity": {},
                "set": {},
                "subtype": {},
                "supertype": {},
                "type": {},
            },
        },
        "entity": {
      "card": {
        "fields": [
          {
            "active": True,
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "attack",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "cardmarket",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "converted_retreat_cost",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "evolves_from",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "evolves_to",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "flavor_text",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "hp",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "image",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "legality",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "national_pokedex_number",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "number",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "rarity",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "resistance",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "retreat_cost",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "rule",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "set",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "subtype",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "supertype",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "tcgplayer",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "type",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "weakness",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 24,
          },
        ],
        "name": "card",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 250,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "select",
                      "orig": "select",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/cards",
                "parts": [
                  "cards",
                ],
                "select": {
                  "exist": [
                    "order_by",
                    "page",
                    "page_size",
                    "q",
                    "select",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/cards/{id}",
                "parts": [
                  "cards",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rarity": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "rarity",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/rarities",
                "parts": [
                  "rarities",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "set": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "image",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "legality",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "printed_total",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "ptcgo_code",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "release_date",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "series",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "total",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "set",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 250,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/sets",
                "parts": [
                  "sets",
                ],
                "select": {
                  "exist": [
                    "order_by",
                    "page",
                    "page_size",
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/sets/{id}",
                "parts": [
                  "sets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "subtype": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "subtype",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/subtypes",
                "parts": [
                  "subtypes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "supertype": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "supertype",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/supertypes",
                "parts": [
                  "supertypes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "type": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "type",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/types",
                "parts": [
                  "types",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
