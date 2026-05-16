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
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "attack",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "cardmarket",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "converted_retreat_cost",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "evolves_from",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "evolves_to",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "flavor_text",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "hp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "legality",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "national_pokedex_number",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "number",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "rarity",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "resistance",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "retreat_cost",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "rule",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "set",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "subtype",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "supertype",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "tcgplayer",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 22,
          },
          {
            "name": "type",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 23,
          },
          {
            "name": "weakness",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 24,
          },
        ],
        "name": "card",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 250,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "select",
                      "orig": "select",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "rarity",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/rarities",
                "parts": [
                  "rarities",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "legality",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "printed_total",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "ptcgo_code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "release_date",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "series",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "total",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
        ],
        "name": "set",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "order_by",
                      "orig": "order_by",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 250,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "subtype",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/subtypes",
                "parts": [
                  "subtypes",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "supertype",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/supertypes",
                "parts": [
                  "supertypes",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "type",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/types",
                "parts": [
                  "types",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
