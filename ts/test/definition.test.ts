import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "card",
    "accessor": "Card",
    "op": "list",
    "method": "GET",
    "path": "/cards",
    "args": [],
    "select": {
      "order_by": "v1",
      "page": "v1",
      "page_size": "v1",
      "q": "v1",
      "select": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "page",
      "pageSize",
      "orderBy",
      "select"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "data": [
        {
          "artist": "x",
          "attacks": [
            {
              "convertedEnergyCost": 1,
              "cost": [
                "x"
              ],
              "damage": "x",
              "name": "x",
              "text": "x"
            }
          ],
          "cardmarket": {},
          "convertedRetreatCost": 1,
          "evolvesFrom": "x",
          "evolvesTo": [
            "x"
          ],
          "flavorText": "x",
          "hp": "x",
          "id": "x",
          "images": {
            "large": "x",
            "small": "x"
          },
          "legalities": {
            "expanded": "x",
            "standard": "x",
            "unlimited": "x"
          },
          "name": "x",
          "nationalPokedexNumbers": [
            1
          ],
          "number": "x",
          "rarity": "x",
          "resistances": [
            {
              "type": "x",
              "value": "x"
            }
          ],
          "retreatCost": [
            "x"
          ],
          "rules": [
            "x"
          ],
          "set": {
            "id": "x",
            "images": {
              "logo": "x",
              "symbol": "x"
            },
            "legalities": {
              "expanded": "x",
              "standard": "x",
              "unlimited": "x"
            },
            "name": "x",
            "printedTotal": 1,
            "ptcgoCode": "x",
            "releaseDate": "2026-01-01",
            "series": "x",
            "total": 1,
            "updatedAt": "2026-01-01T00:00:00Z"
          },
          "subtypes": [
            "x"
          ],
          "supertype": "x",
          "tcgplayer": {},
          "types": [
            "x"
          ],
          "weaknesses": [
            {
              "type": "x",
              "value": "x"
            }
          ]
        }
      ],
      "page": 1,
      "pageSize": 1,
      "count": 1,
      "totalCount": 1
    },
    "idField": "id"
  },
  {
    "entity": "card",
    "accessor": "Card",
    "op": "load",
    "method": "GET",
    "path": "/cards/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "data": {
        "id": "x",
        "name": "x",
        "supertype": "x",
        "subtypes": [
          "x"
        ],
        "hp": "x",
        "types": [
          "x"
        ],
        "evolvesFrom": "x",
        "evolvesTo": [
          "x"
        ],
        "rules": [
          "x"
        ],
        "attacks": [
          {
            "convertedEnergyCost": 1,
            "cost": [
              "x"
            ],
            "damage": "x",
            "name": "x",
            "text": "x"
          }
        ],
        "weaknesses": [
          {
            "type": "x",
            "value": "x"
          }
        ],
        "resistances": [
          {
            "type": "x",
            "value": "x"
          }
        ],
        "retreatCost": [
          "x"
        ],
        "convertedRetreatCost": 1,
        "set": {
          "id": "x",
          "images": {
            "logo": "x",
            "symbol": "x"
          },
          "legalities": {
            "expanded": "x",
            "standard": "x",
            "unlimited": "x"
          },
          "name": "x",
          "printedTotal": 1,
          "ptcgoCode": "x",
          "releaseDate": "2026-01-01",
          "series": "x",
          "total": 1,
          "updatedAt": "2026-01-01T00:00:00Z"
        },
        "number": "x",
        "artist": "x",
        "rarity": "x",
        "flavorText": "x",
        "nationalPokedexNumbers": [
          1
        ],
        "legalities": {
          "expanded": "x",
          "standard": "x",
          "unlimited": "x"
        },
        "images": {
          "large": "x",
          "small": "x"
        },
        "tcgplayer": {},
        "cardmarket": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "rarity",
    "accessor": "Rarity",
    "op": "list",
    "method": "GET",
    "path": "/rarities",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "data": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "set",
    "accessor": "Set",
    "op": "list",
    "method": "GET",
    "path": "/sets",
    "args": [],
    "select": {
      "order_by": "v1",
      "page": "v1",
      "page_size": "v1",
      "q": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "page",
      "pageSize",
      "orderBy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "data": [
        {
          "id": "x",
          "images": {
            "logo": "x",
            "symbol": "x"
          },
          "legalities": {
            "expanded": "x",
            "standard": "x",
            "unlimited": "x"
          },
          "name": "x",
          "printedTotal": 1,
          "ptcgoCode": "x",
          "releaseDate": "2026-01-01",
          "series": "x",
          "total": 1,
          "updatedAt": "2026-01-01T00:00:00Z"
        }
      ],
      "page": 1,
      "pageSize": 1,
      "count": 1,
      "totalCount": 1
    },
    "idField": "id"
  },
  {
    "entity": "set",
    "accessor": "Set",
    "op": "load",
    "method": "GET",
    "path": "/sets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "data": {
        "id": "x",
        "name": "x",
        "series": "x",
        "printedTotal": 1,
        "total": 1,
        "legalities": {
          "expanded": "x",
          "standard": "x",
          "unlimited": "x"
        },
        "ptcgoCode": "x",
        "releaseDate": "2026-01-01",
        "updatedAt": "2026-01-01T00:00:00Z",
        "images": {
          "logo": "x",
          "symbol": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subtype",
    "accessor": "Subtype",
    "op": "list",
    "method": "GET",
    "path": "/subtypes",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "data": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "supertype",
    "accessor": "Supertype",
    "op": "list",
    "method": "GET",
    "path": "/supertypes",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "data": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "list",
    "method": "GET",
    "path": "/types",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "data": [
        "x"
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
