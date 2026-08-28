# PokemonTcg Golang SDK



The Golang SDK for the PokemonTcg API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Card(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/pokemon-tcg-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/pokemon-tcg-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/pokemon-tcg-sdk/go=../pokemon-tcg-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/pokemon-tcg-sdk/go"
)

func main() {
    client := sdk.NewPokemonTcgSDK(map[string]any{
        "apikey": os.Getenv("POKEMON_TCG_APIKEY"),
    })

    // List card records — the value is the array of records itself.
    cards, err := client.Card(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range cards.([]any) {
        fmt.Println(item)
    }

    // Load a single card — the value is the loaded record.
    card, err := client.Card(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(card)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
raritys, err := client.Rarity(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = raritys
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

rarity, err := client.Rarity(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(rarity) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewPokemonTcgSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
POKEMON_TCG_TEST_LIVE=TRUE
POKEMON_TCG_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewPokemonTcgSDK

```go
func NewPokemonTcgSDK(options map[string]any) *PokemonTcgSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *PokemonTcgSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### PokemonTcgSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Card` | `(data map[string]any) PokemonTcgEntity` | Create a Card entity instance. |
| `Rarity` | `(data map[string]any) PokemonTcgEntity` | Create a Rarity entity instance. |
| `Set` | `(data map[string]any) PokemonTcgEntity` | Create a Set entity instance. |
| `Subtype` | `(data map[string]any) PokemonTcgEntity` | Create a Subtype entity instance. |
| `Supertype` | `(data map[string]any) PokemonTcgEntity` | Create a Supertype entity instance. |
| `Type` | `(data map[string]any) PokemonTcgEntity` | Create a Type entity instance. |

### Entity interface (PokemonTcgEntity)

All entities implement the `PokemonTcgEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    card, err := client.Card(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // card is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Card

| Field | Description |
| --- | --- |
| `"artist"` | Artist who illustrated the card |
| `"attacks"` | Attacks the Pokémon can perform |
| `"cardmarket"` | Cardmarket information |
| `"convertedRetreatCost"` | Numeric value of retreat cost |
| `"evolvesFrom"` | The Pokémon this card evolves from |
| `"evolvesTo"` | The Pokémon this card evolves to |
| `"flavorText"` | Flavor text on the card |
| `"hp"` | Hit points of the Pokémon |
| `"id"` | Unique identifier for the card |
| `"images"` | Image URLs for the card |
| `"legalities"` | Legality of the card in different formats |
| `"name"` | Name of the card |
| `"nationalPokedexNumbers"` | National Pokédex numbers |
| `"number"` | Card number within the set |
| `"rarity"` | Rarity of the card |
| `"resistances"` | Resistances of the Pokémon |
| `"retreatCost"` | Retreat cost of the Pokémon |
| `"rules"` | Special rules for the card |
| `"set"` | Set information for the card |
| `"subtypes"` | Subtypes of the card |
| `"supertype"` | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `"tcgplayer"` | TCGPlayer market information |
| `"types"` | Energy types of the card |
| `"weaknesses"` | Weaknesses of the Pokémon |

Operations: List, Load.

API path: `/cards`

#### Rarity

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: List.

API path: `/rarities`

#### Set

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier for the set |
| `"images"` | Image URLs for the set |
| `"legalities"` | Legality of the set in different formats |
| `"name"` | Name of the set |
| `"printedTotal"` | Number of cards printed in the set |
| `"ptcgoCode"` | PTCGO code for the set |
| `"releaseDate"` | Release date of the set |
| `"series"` | Series the set belongs to |
| `"total"` | Total number of cards in the set including secret rares |
| `"updatedAt"` | Last updated timestamp |

Operations: List, Load.

API path: `/sets`

#### Subtype

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: List.

API path: `/subtypes`

#### Supertype

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: List.

API path: `/supertypes`

#### Type

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: List.

API path: `/types`



## Entities


### Card

Create an instance: `card := client.Card(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artist` | `string` | Artist who illustrated the card |
| `attacks` | `[]any` | Attacks the Pokémon can perform |
| `cardmarket` | `map[string]any` | Cardmarket information |
| `convertedRetreatCost` | `int` | Numeric value of retreat cost |
| `evolvesFrom` | `string` | The Pokémon this card evolves from |
| `evolvesTo` | `[]any` | The Pokémon this card evolves to |
| `flavorText` | `string` | Flavor text on the card |
| `hp` | `string` | Hit points of the Pokémon |
| `id` | `string` | Unique identifier for the card |
| `images` | `map[string]any` | Image URLs for the card |
| `legalities` | `map[string]any` | Legality of the card in different formats |
| `name` | `string` | Name of the card |
| `nationalPokedexNumbers` | `[]any` | National Pokédex numbers |
| `number` | `string` | Card number within the set |
| `rarity` | `string` | Rarity of the card |
| `resistances` | `[]any` | Resistances of the Pokémon |
| `retreatCost` | `[]any` | Retreat cost of the Pokémon |
| `rules` | `[]any` | Special rules for the card |
| `set` | `map[string]any` | Set information for the card |
| `subtypes` | `[]any` | Subtypes of the card |
| `supertype` | `string` | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `tcgplayer` | `map[string]any` | TCGPlayer market information |
| `types` | `[]any` | Energy types of the card |
| `weaknesses` | `[]any` | Weaknesses of the Pokémon |

#### Example: Load

```go
card, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(card) // the loaded record
```

#### Example: List

```go
cards, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cards) // the array of records
```


### Rarity

Create an instance: `rarity := client.Rarity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |

#### Example: List

```go
raritys, err := client.Rarity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(raritys) // the array of records
```


### Set

Create an instance: `set := client.Set(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the set |
| `images` | `map[string]any` | Image URLs for the set |
| `legalities` | `map[string]any` | Legality of the set in different formats |
| `name` | `string` | Name of the set |
| `printedTotal` | `int` | Number of cards printed in the set |
| `ptcgoCode` | `string` | PTCGO code for the set |
| `releaseDate` | `string` | Release date of the set |
| `series` | `string` | Series the set belongs to |
| `total` | `int` | Total number of cards in the set including secret rares |
| `updatedAt` | `string` | Last updated timestamp |

#### Example: Load

```go
set, err := client.Set(nil).Load(map[string]any{"id": "set_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(set) // the loaded record
```

#### Example: List

```go
sets, err := client.Set(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sets) // the array of records
```


### Subtype

Create an instance: `subtype := client.Subtype(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |

#### Example: List

```go
subtypes, err := client.Subtype(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subtypes) // the array of records
```


### Supertype

Create an instance: `supertype := client.Supertype(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |

#### Example: List

```go
supertypes, err := client.Supertype(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(supertypes) // the array of records
```


### Type

Create an instance: `type_ := client.Type(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |

#### Example: List

```go
type_s, err := client.Type(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(type_s) // the array of records
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/pokemon-tcg-sdk/go/
├── pokemon-tcg.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/pokemon-tcg-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
rarity := client.Rarity(nil)
rarity.List(nil, nil)

// rarity.Data() now returns the rarity data from the last list
// rarity.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
