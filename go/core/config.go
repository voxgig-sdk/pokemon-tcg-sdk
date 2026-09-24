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
				"name": "X-Api-Key",
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
						"title": "Artist",
						"type": "`$STRING`",
						"short": "Artist who illustrated the card",
					},
					map[string]any{
						"name": "attacks",
						"title": "Attacks",
						"type": "`$ARRAY`",
						"short": "Attacks the Pokémon can perform",
					},
					map[string]any{
						"name": "cardmarket",
						"title": "Cardmarket",
						"type": "`$OBJECT`",
						"short": "Cardmarket information",
					},
					map[string]any{
						"name": "convertedRetreatCost",
						"title": "Converted Retreat Cost",
						"type": "`$INTEGER`",
						"short": "Numeric value of retreat cost",
					},
					map[string]any{
						"name": "evolvesFrom",
						"title": "Evolves From",
						"type": "`$STRING`",
						"short": "The Pokémon this card evolves from",
					},
					map[string]any{
						"name": "evolvesTo",
						"title": "Evolves To",
						"type": "`$ARRAY`",
						"short": "The Pokémon this card evolves to",
					},
					map[string]any{
						"name": "flavorText",
						"title": "Flavor Text",
						"type": "`$STRING`",
						"short": "Flavor text on the card",
					},
					map[string]any{
						"name": "hp",
						"title": "Hp",
						"type": "`$STRING`",
						"short": "Hit points of the Pokémon",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the card",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
						"short": "Image URLs for the card",
					},
					map[string]any{
						"name": "legalities",
						"title": "Legalities",
						"type": "`$OBJECT`",
						"short": "Legality of the card in different formats",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the card",
					},
					map[string]any{
						"name": "nationalPokedexNumbers",
						"title": "National Pokedex Numbers",
						"type": "`$ARRAY`",
						"short": "National Pokédex numbers",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$STRING`",
						"short": "Card number within the set",
					},
					map[string]any{
						"name": "rarity",
						"title": "Rarity",
						"type": "`$STRING`",
						"short": "Rarity of the card",
					},
					map[string]any{
						"name": "resistances",
						"title": "Resistances",
						"type": "`$ARRAY`",
						"short": "Resistances of the Pokémon",
					},
					map[string]any{
						"name": "retreatCost",
						"title": "Retreat Cost",
						"type": "`$ARRAY`",
						"short": "Retreat cost of the Pokémon",
					},
					map[string]any{
						"name": "rules",
						"title": "Rules",
						"type": "`$ARRAY`",
						"short": "Special rules for the card",
					},
					map[string]any{
						"name": "set",
						"title": "Set",
						"type": "`$OBJECT`",
						"short": "Set information for the card",
					},
					map[string]any{
						"name": "subtypes",
						"title": "Subtypes",
						"type": "`$ARRAY`",
						"short": "Subtypes of the card",
					},
					map[string]any{
						"name": "supertype",
						"title": "Supertype",
						"type": "`$STRING`",
						"short": "Supertype of the card (e.g., Pokémon, Trainer, Energy)",
					},
					map[string]any{
						"name": "tcgplayer",
						"title": "Tcgplayer",
						"type": "`$OBJECT`",
						"short": "TCGPlayer market information",
					},
					map[string]any{
						"name": "types",
						"title": "Types",
						"type": "`$ARRAY`",
						"short": "Energy types of the card",
					},
					map[string]any{
						"name": "weaknesses",
						"title": "Weaknesses",
						"type": "`$ARRAY`",
						"short": "Weaknesses of the Pokémon",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cards",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
								},
								"parts": []any{
									"cards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 250,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "select",
											"orig": "select",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Data",
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
								"kind": "http",
								"method": "GET",
								"orig": "/rarities",
								"segments": []any{
									map[string]any{
										"lit": "rarities",
									},
								},
								"parts": []any{
									"rarities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the set",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
						"short": "Image URLs for the set",
					},
					map[string]any{
						"name": "legalities",
						"title": "Legalities",
						"type": "`$OBJECT`",
						"short": "Legality of the set in different formats",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the set",
					},
					map[string]any{
						"name": "printedTotal",
						"title": "Printed Total",
						"type": "`$INTEGER`",
						"short": "Number of cards printed in the set",
					},
					map[string]any{
						"name": "ptcgoCode",
						"title": "Ptcgo Code",
						"type": "`$STRING`",
						"short": "PTCGO code for the set",
					},
					map[string]any{
						"name": "releaseDate",
						"title": "Release Date",
						"type": "`$STRING`",
						"short": "Release date of the set",
						"format": "date",
					},
					map[string]any{
						"name": "series",
						"title": "Series",
						"type": "`$STRING`",
						"short": "Series the set belongs to",
					},
					map[string]any{
						"name": "total",
						"title": "Total",
						"type": "`$INTEGER`",
						"short": "Total number of cards in the set including secret rares",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "Last updated timestamp",
						"format": "date-time",
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
								"kind": "http",
								"method": "GET",
								"orig": "/sets",
								"segments": []any{
									map[string]any{
										"lit": "sets",
									},
								},
								"parts": []any{
									"sets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 250,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"sets",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Data",
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
								"kind": "http",
								"method": "GET",
								"orig": "/subtypes",
								"segments": []any{
									map[string]any{
										"lit": "subtypes",
									},
								},
								"parts": []any{
									"subtypes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Data",
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
								"kind": "http",
								"method": "GET",
								"orig": "/supertypes",
								"segments": []any{
									map[string]any{
										"lit": "supertypes",
									},
								},
								"parts": []any{
									"supertypes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Data",
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
								"kind": "http",
								"method": "GET",
								"orig": "/types",
								"segments": []any{
									map[string]any{
										"lit": "types",
									},
								},
								"parts": []any{
									"types",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
