"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'PokemonTcg',
        slug: "pokemon-tcg",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
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
        retry: {
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
        test: {
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
        timeout: {
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
    };
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
            card: {},
            rarity: {},
            set: {},
            subtype: {},
            supertype: {},
            type: {},
        }
    };
    entity = {
        "card": {
            "fields": [
                {
                    "name": "artist",
                    "title": "Artist",
                    "type": "`$STRING`",
                    "short": "Artist who illustrated the card"
                },
                {
                    "name": "attacks",
                    "title": "Attacks",
                    "type": "`$ARRAY`",
                    "short": "Attacks the Pokémon can perform"
                },
                {
                    "name": "cardmarket",
                    "title": "Cardmarket",
                    "type": "`$OBJECT`",
                    "short": "Cardmarket information"
                },
                {
                    "name": "convertedRetreatCost",
                    "title": "Converted Retreat Cost",
                    "type": "`$INTEGER`",
                    "short": "Numeric value of retreat cost"
                },
                {
                    "name": "evolvesFrom",
                    "title": "Evolves From",
                    "type": "`$STRING`",
                    "short": "The Pokémon this card evolves from"
                },
                {
                    "name": "evolvesTo",
                    "title": "Evolves To",
                    "type": "`$ARRAY`",
                    "short": "The Pokémon this card evolves to"
                },
                {
                    "name": "flavorText",
                    "title": "Flavor Text",
                    "type": "`$STRING`",
                    "short": "Flavor text on the card"
                },
                {
                    "name": "hp",
                    "title": "Hp",
                    "type": "`$STRING`",
                    "short": "Hit points of the Pokémon"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the card"
                },
                {
                    "name": "images",
                    "title": "Images",
                    "type": "`$OBJECT`",
                    "short": "Image URLs for the card"
                },
                {
                    "name": "legalities",
                    "title": "Legalities",
                    "type": "`$OBJECT`",
                    "short": "Legality of the card in different formats"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the card"
                },
                {
                    "name": "nationalPokedexNumbers",
                    "title": "National Pokedex Numbers",
                    "type": "`$ARRAY`",
                    "short": "National Pokédex numbers"
                },
                {
                    "name": "number",
                    "title": "Number",
                    "type": "`$STRING`",
                    "short": "Card number within the set"
                },
                {
                    "name": "rarity",
                    "title": "Rarity",
                    "type": "`$STRING`",
                    "short": "Rarity of the card"
                },
                {
                    "name": "resistances",
                    "title": "Resistances",
                    "type": "`$ARRAY`",
                    "short": "Resistances of the Pokémon"
                },
                {
                    "name": "retreatCost",
                    "title": "Retreat Cost",
                    "type": "`$ARRAY`",
                    "short": "Retreat cost of the Pokémon"
                },
                {
                    "name": "rules",
                    "title": "Rules",
                    "type": "`$ARRAY`",
                    "short": "Special rules for the card"
                },
                {
                    "name": "set",
                    "title": "Set",
                    "type": "`$OBJECT`",
                    "short": "Set information for the card"
                },
                {
                    "name": "subtypes",
                    "title": "Subtypes",
                    "type": "`$ARRAY`",
                    "short": "Subtypes of the card"
                },
                {
                    "name": "supertype",
                    "title": "Supertype",
                    "type": "`$STRING`",
                    "short": "Supertype of the card (e.g., Pokémon, Trainer, Energy)"
                },
                {
                    "name": "tcgplayer",
                    "title": "Tcgplayer",
                    "type": "`$OBJECT`",
                    "short": "TCGPlayer market information"
                },
                {
                    "name": "types",
                    "title": "Types",
                    "type": "`$ARRAY`",
                    "short": "Energy types of the card"
                },
                {
                    "name": "weaknesses",
                    "title": "Weaknesses",
                    "type": "`$ARRAY`",
                    "short": "Weaknesses of the Pokémon"
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards",
                            "segments": [
                                {
                                    "lit": "cards"
                                }
                            ],
                            "parts": [
                                "cards"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 250
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "select",
                                        "orig": "select",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "q",
                                    "select"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
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
                            "parts": [
                                "cards",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
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
                    "title": "Data",
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/rarities",
                            "segments": [
                                {
                                    "lit": "rarities"
                                }
                            ],
                            "parts": [
                                "rarities"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the set"
                },
                {
                    "name": "images",
                    "title": "Images",
                    "type": "`$OBJECT`",
                    "short": "Image URLs for the set"
                },
                {
                    "name": "legalities",
                    "title": "Legalities",
                    "type": "`$OBJECT`",
                    "short": "Legality of the set in different formats"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the set"
                },
                {
                    "name": "printedTotal",
                    "title": "Printed Total",
                    "type": "`$INTEGER`",
                    "short": "Number of cards printed in the set"
                },
                {
                    "name": "ptcgoCode",
                    "title": "Ptcgo Code",
                    "type": "`$STRING`",
                    "short": "PTCGO code for the set"
                },
                {
                    "name": "releaseDate",
                    "title": "Release Date",
                    "type": "`$STRING`",
                    "short": "Release date of the set",
                    "format": "date"
                },
                {
                    "name": "series",
                    "title": "Series",
                    "type": "`$STRING`",
                    "short": "Series the set belongs to"
                },
                {
                    "name": "total",
                    "title": "Total",
                    "type": "`$INTEGER`",
                    "short": "Total number of cards in the set including secret rares"
                },
                {
                    "name": "updatedAt",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "short": "Last updated timestamp",
                    "format": "date-time"
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/sets",
                            "segments": [
                                {
                                    "lit": "sets"
                                }
                            ],
                            "parts": [
                                "sets"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 250
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "order_by",
                                    "page",
                                    "page_size",
                                    "q"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
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
                            "parts": [
                                "sets",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
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
                    "title": "Data",
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subtypes",
                            "segments": [
                                {
                                    "lit": "subtypes"
                                }
                            ],
                            "parts": [
                                "subtypes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Data",
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/supertypes",
                            "segments": [
                                {
                                    "lit": "supertypes"
                                }
                            ],
                            "parts": [
                                "supertypes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
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
                    "title": "Data",
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
                            "kind": "http",
                            "method": "GET",
                            "orig": "/types",
                            "segments": [
                                {
                                    "lit": "types"
                                }
                            ],
                            "parts": [
                                "types"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map