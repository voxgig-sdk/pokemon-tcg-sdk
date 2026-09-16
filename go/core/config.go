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
			"slug": "pokemon-tcg",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"short": "Artist who illustrated the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "attacks",
						"short": "Attacks the Pokémon can perform",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cardmarket",
						"short": "Cardmarket information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "convertedRetreatCost",
						"short": "Numeric value of retreat cost",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "evolvesFrom",
						"short": "The Pokémon this card evolves from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "evolvesTo",
						"short": "The Pokémon this card evolves to",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "flavorText",
						"short": "Flavor text on the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hp",
						"short": "Hit points of the Pokémon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"short": "Image URLs for the card",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "legalities",
						"short": "Legality of the card in different formats",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nationalPokedexNumbers",
						"short": "National Pokédex numbers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "number",
						"short": "Card number within the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rarity",
						"short": "Rarity of the card",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resistances",
						"short": "Resistances of the Pokémon",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "retreatCost",
						"short": "Retreat cost of the Pokémon",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rules",
						"short": "Special rules for the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "set",
						"short": "Set information for the card",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subtypes",
						"short": "Subtypes of the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "supertype",
						"short": "Supertype of the card (e.g., Pokémon, Trainer, Energy)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tcgplayer",
						"short": "TCGPlayer market information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "types",
						"short": "Energy types of the card",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "weaknesses",
						"short": "Weaknesses of the Pokémon",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
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
								"parts": []any{
									"cards",
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
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"cards",
									"{id}",
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
								"segments": []any{
									map[string]any{
										"lit": "rarities",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"rarities",
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
						"short": "Unique identifier for the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"short": "Image URLs for the set",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "legalities",
						"short": "Legality of the set in different formats",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "printedTotal",
						"short": "Number of cards printed in the set",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ptcgoCode",
						"short": "PTCGO code for the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "releaseDate",
						"short": "Release date of the set",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "series",
						"short": "Series the set belongs to",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of cards in the set including secret rares",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"short": "Last updated timestamp",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "sets",
									},
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
								"parts": []any{
									"sets",
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
								"segments": []any{
									map[string]any{
										"lit": "sets",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"sets",
									"{id}",
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
								"segments": []any{
									map[string]any{
										"lit": "subtypes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"subtypes",
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
								"segments": []any{
									map[string]any{
										"lit": "supertypes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"supertypes",
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
								"segments": []any{
									map[string]any{
										"lit": "types",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"types",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
