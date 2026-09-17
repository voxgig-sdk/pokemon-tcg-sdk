
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'PokemonTcg',
        slug: "pokemon-tcg",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.pokemontcg.io/v2",

    auth: {
      prefix: '',
      name: 'X-Api-Key',
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
          "short": "Artist who illustrated the card",
          "type": "`$STRING`"
        },
        {
          "name": "attacks",
          "short": "Attacks the Pokémon can perform",
          "type": "`$ARRAY`"
        },
        {
          "name": "cardmarket",
          "short": "Cardmarket information",
          "type": "`$OBJECT`"
        },
        {
          "name": "convertedRetreatCost",
          "short": "Numeric value of retreat cost",
          "type": "`$INTEGER`"
        },
        {
          "name": "evolvesFrom",
          "short": "The Pokémon this card evolves from",
          "type": "`$STRING`"
        },
        {
          "name": "evolvesTo",
          "short": "The Pokémon this card evolves to",
          "type": "`$ARRAY`"
        },
        {
          "name": "flavorText",
          "short": "Flavor text on the card",
          "type": "`$STRING`"
        },
        {
          "name": "hp",
          "short": "Hit points of the Pokémon",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the card",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "short": "Image URLs for the card",
          "type": "`$OBJECT`"
        },
        {
          "name": "legalities",
          "short": "Legality of the card in different formats",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "short": "Name of the card",
          "type": "`$STRING`"
        },
        {
          "name": "nationalPokedexNumbers",
          "short": "National Pokédex numbers",
          "type": "`$ARRAY`"
        },
        {
          "name": "number",
          "short": "Card number within the set",
          "type": "`$STRING`"
        },
        {
          "name": "rarity",
          "short": "Rarity of the card",
          "type": "`$STRING`"
        },
        {
          "name": "resistances",
          "short": "Resistances of the Pokémon",
          "type": "`$ARRAY`"
        },
        {
          "name": "retreatCost",
          "short": "Retreat cost of the Pokémon",
          "type": "`$ARRAY`"
        },
        {
          "name": "rules",
          "short": "Special rules for the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "set",
          "short": "Set information for the card",
          "type": "`$OBJECT`"
        },
        {
          "name": "subtypes",
          "short": "Subtypes of the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "supertype",
          "short": "Supertype of the card (e.g., Pokémon, Trainer, Energy)",
          "type": "`$STRING`"
        },
        {
          "name": "tcgplayer",
          "short": "TCGPlayer market information",
          "type": "`$OBJECT`"
        },
        {
          "name": "types",
          "short": "Energy types of the card",
          "type": "`$ARRAY`"
        },
        {
          "name": "weaknesses",
          "short": "Weaknesses of the Pokémon",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "cards"
                }
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
              },
              "parts": [
                "cards"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "cards",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "rarities"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "rarities"
              ]
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
          "short": "Unique identifier for the set",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "short": "Image URLs for the set",
          "type": "`$OBJECT`"
        },
        {
          "name": "legalities",
          "short": "Legality of the set in different formats",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "short": "Name of the set",
          "type": "`$STRING`"
        },
        {
          "name": "printedTotal",
          "short": "Number of cards printed in the set",
          "type": "`$INTEGER`"
        },
        {
          "name": "ptcgoCode",
          "short": "PTCGO code for the set",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "releaseDate",
          "short": "Release date of the set",
          "type": "`$STRING`"
        },
        {
          "name": "series",
          "short": "Series the set belongs to",
          "type": "`$STRING`"
        },
        {
          "name": "total",
          "short": "Total number of cards in the set including secret rares",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "short": "Last updated timestamp",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "sets"
                }
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
              },
              "parts": [
                "sets"
              ]
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
              "segments": [
                {
                  "lit": "sets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "sets",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "subtypes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "subtypes"
              ]
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
              "segments": [
                {
                  "lit": "supertypes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "supertypes"
              ]
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
              "segments": [
                {
                  "lit": "types"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "types"
              ]
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
  config,
  FEATURE_PLUGINS,
}

