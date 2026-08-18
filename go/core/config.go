package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "PokemonTcg",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.pokemontcg.io/v2",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"card": map[string]any{},
				"rarity": map[string]any{},
				"set": map[string]any{},
				"subtype": map[string]any{},
				"supertype": map[string]any{},
				"type": map[string]any{},
			},
		},
		"entity": map[string]any{
			"card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "artist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "attacks",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cardmarket",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "convertedRetreatCost",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "evolvesFrom",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "evolvesTo",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "flavorText",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "legalities",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nationalPokedexNumbers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rarity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resistances",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "retreatCost",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rules",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "set",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subtypes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supertype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tcgplayer",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "types",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "weaknesses",
						"type": "`$ARRAY`",
					},
				},
				"name": "card",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 250,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "select",
											"orig": "select",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards",
								"parts": []any{
									"cards",
								},
								"select": map[string]any{
									"exist": []any{
										"order_by",
										"page",
										"page_size",
										"q",
										"select",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}",
								"parts": []any{
									"cards",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rarity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
				},
				"name": "rarity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/rarities",
								"parts": []any{
									"rarities",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"set": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "legalities",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "printedTotal",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ptcgoCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "releaseDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "series",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updatedAt",
						"type": "`$STRING`",
					},
				},
				"name": "set",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 250,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/sets",
								"parts": []any{
									"sets",
								},
								"select": map[string]any{
									"exist": []any{
										"order_by",
										"page",
										"page_size",
										"q",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/sets/{id}",
								"parts": []any{
									"sets",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subtype": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
				},
				"name": "subtype",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/subtypes",
								"parts": []any{
									"subtypes",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"supertype": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
				},
				"name": "supertype",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/supertypes",
								"parts": []any{
									"supertypes",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"type": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
				},
				"name": "type",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/types",
								"parts": []any{
									"types",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
