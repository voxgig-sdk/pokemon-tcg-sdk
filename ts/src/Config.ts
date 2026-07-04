
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.pokemontcg.io/v2',

    auth: {
      prefix: 'Bearer',
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
          "active": true,
          "name": "artist",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "attack",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "cardmarket",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 2
        },
        {
          "active": true,
          "name": "converted_retreat_cost",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 3
        },
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 4
        },
        {
          "active": true,
          "name": "evolves_from",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "evolves_to",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 6
        },
        {
          "active": true,
          "name": "flavor_text",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "hp",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "image",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 10
        },
        {
          "active": true,
          "name": "legality",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 11
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "national_pokedex_number",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 13
        },
        {
          "active": true,
          "name": "number",
          "req": false,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "rarity",
          "req": false,
          "type": "`$STRING`",
          "index$": 15
        },
        {
          "active": true,
          "name": "resistance",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 16
        },
        {
          "active": true,
          "name": "retreat_cost",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 17
        },
        {
          "active": true,
          "name": "rule",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 18
        },
        {
          "active": true,
          "name": "set",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 19
        },
        {
          "active": true,
          "name": "subtype",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 20
        },
        {
          "active": true,
          "name": "supertype",
          "req": false,
          "type": "`$STRING`",
          "index$": 21
        },
        {
          "active": true,
          "name": "tcgplayer",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 22
        },
        {
          "active": true,
          "name": "type",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 23
        },
        {
          "active": true,
          "name": "weakness",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 24
        }
      ],
      "name": "card",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 250,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "select",
                    "orig": "select",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rarity": {
      "fields": [
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        }
      ],
      "name": "rarity",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/rarities",
              "parts": [
                "rarities"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "set": {
      "fields": [
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 0
        },
        {
          "active": true,
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "image",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 2
        },
        {
          "active": true,
          "name": "legality",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 3
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "printed_total",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 5
        },
        {
          "active": true,
          "name": "ptcgo_code",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "release_date",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "series",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "total",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 9
        },
        {
          "active": true,
          "name": "updated_at",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        }
      ],
      "name": "set",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 250,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "subtype": {
      "fields": [
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        }
      ],
      "name": "subtype",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/subtypes",
              "parts": [
                "subtypes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "supertype": {
      "fields": [
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        }
      ],
      "name": "supertype",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/supertypes",
              "parts": [
                "supertypes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "type": {
      "fields": [
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        }
      ],
      "name": "type",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/types",
              "parts": [
                "types"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
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

