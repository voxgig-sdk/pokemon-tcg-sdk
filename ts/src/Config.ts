
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'PokemonTcg',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.pokemontcg.io/v2",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      card: {
      },

      rarity: {
      },

      set: {
      },

      subtype: {
      },

      supertype: {
      },

      type: {
      },

    }
  }


  entity = {
    "card": {
      "fields": [
        {
          "name": "artist",
          "type": "`$STRING`"
        },
        {
          "name": "attacks",
          "type": "`$ARRAY`"
        },
        {
          "name": "cardmarket",
          "type": "`$OBJECT`"
        },
        {
          "name": "convertedRetreatCost",
          "type": "`$INTEGER`"
        },
        {
          "name": "evolvesFrom",
          "type": "`$STRING`"
        },
        {
          "name": "evolvesTo",
          "type": "`$ARRAY`"
        },
        {
          "name": "flavorText",
          "type": "`$STRING`"
        },
        {
          "name": "hp",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "legalities",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "nationalPokedexNumbers",
          "type": "`$ARRAY`"
        },
        {
          "name": "number",
          "type": "`$STRING`"
        },
        {
          "name": "rarity",
          "type": "`$STRING`"
        },
        {
          "name": "resistances",
          "type": "`$ARRAY`"
        },
        {
          "name": "retreatCost",
          "type": "`$ARRAY`"
        },
        {
          "name": "rules",
          "type": "`$ARRAY`"
        },
        {
          "name": "set",
          "type": "`$OBJECT`"
        },
        {
          "name": "subtypes",
          "type": "`$ARRAY`"
        },
        {
          "name": "supertype",
          "type": "`$STRING`"
        },
        {
          "name": "tcgplayer",
          "type": "`$OBJECT`"
        },
        {
          "name": "types",
          "type": "`$ARRAY`"
        },
        {
          "name": "weaknesses",
          "type": "`$ARRAY`"
        }
      ],
      "name": "card",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 250,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "select",
                    "orig": "select",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cards",
              "parts": [
                "cards"
              ],
              "select": {
                "exist": [
                  "order_by",
                  "page",
                  "page_size",
                  "q",
                  "select"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cards/{id}",
              "parts": [
                "cards",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rarity": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        }
      ],
      "name": "rarity",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/rarities",
              "parts": [
                "rarities"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "set": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "legalities",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "printedTotal",
          "type": "`$INTEGER`"
        },
        {
          "name": "ptcgoCode",
          "type": "`$STRING`"
        },
        {
          "name": "releaseDate",
          "type": "`$STRING`"
        },
        {
          "name": "series",
          "type": "`$STRING`"
        },
        {
          "name": "total",
          "type": "`$INTEGER`"
        },
        {
          "name": "updatedAt",
          "type": "`$STRING`"
        }
      ],
      "name": "set",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 250,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/sets",
              "parts": [
                "sets"
              ],
              "select": {
                "exist": [
                  "order_by",
                  "page",
                  "page_size",
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/sets/{id}",
              "parts": [
                "sets",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "subtype": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        }
      ],
      "name": "subtype",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/subtypes",
              "parts": [
                "subtypes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "supertype": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        }
      ],
      "name": "supertype",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/supertypes",
              "parts": [
                "supertypes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "type": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        }
      ],
      "name": "type",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/types",
              "parts": [
                "types"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

