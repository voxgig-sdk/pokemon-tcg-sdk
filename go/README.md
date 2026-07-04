# PokemonTcg Golang SDK



The Golang SDK for the PokemonTcg API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
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

card, err := client.Card(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(card) // the loaded mock data
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
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    card, err := client.Card(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // card is the loaded record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Card

| Field | Description |
| --- | --- |
| `"artist"` |  |
| `"attack"` |  |
| `"cardmarket"` |  |
| `"converted_retreat_cost"` |  |
| `"data"` |  |
| `"evolves_from"` |  |
| `"evolves_to"` |  |
| `"flavor_text"` |  |
| `"hp"` |  |
| `"id"` |  |
| `"image"` |  |
| `"legality"` |  |
| `"name"` |  |
| `"national_pokedex_number"` |  |
| `"number"` |  |
| `"rarity"` |  |
| `"resistance"` |  |
| `"retreat_cost"` |  |
| `"rule"` |  |
| `"set"` |  |
| `"subtype"` |  |
| `"supertype"` |  |
| `"tcgplayer"` |  |
| `"type"` |  |
| `"weakness"` |  |

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
| `"data"` |  |
| `"id"` |  |
| `"image"` |  |
| `"legality"` |  |
| `"name"` |  |
| `"printed_total"` |  |
| `"ptcgo_code"` |  |
| `"release_date"` |  |
| `"series"` |  |
| `"total"` |  |
| `"updated_at"` |  |

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
| `artist` | ``$STRING`` |  |
| `attack` | ``$ARRAY`` |  |
| `cardmarket` | ``$OBJECT`` |  |
| `converted_retreat_cost` | ``$INTEGER`` |  |
| `data` | ``$OBJECT`` |  |
| `evolves_from` | ``$STRING`` |  |
| `evolves_to` | ``$ARRAY`` |  |
| `flavor_text` | ``$STRING`` |  |
| `hp` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `image` | ``$OBJECT`` |  |
| `legality` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `national_pokedex_number` | ``$ARRAY`` |  |
| `number` | ``$STRING`` |  |
| `rarity` | ``$STRING`` |  |
| `resistance` | ``$ARRAY`` |  |
| `retreat_cost` | ``$ARRAY`` |  |
| `rule` | ``$ARRAY`` |  |
| `set` | ``$OBJECT`` |  |
| `subtype` | ``$ARRAY`` |  |
| `supertype` | ``$STRING`` |  |
| `tcgplayer` | ``$OBJECT`` |  |
| `type` | ``$ARRAY`` |  |
| `weakness` | ``$ARRAY`` |  |

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
| `data` | ``$ARRAY`` |  |

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
| `data` | ``$OBJECT`` |  |
| `id` | ``$STRING`` |  |
| `image` | ``$OBJECT`` |  |
| `legality` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `printed_total` | ``$INTEGER`` |  |
| `ptcgo_code` | ``$STRING`` |  |
| `release_date` | ``$STRING`` |  |
| `series` | ``$STRING`` |  |
| `total` | ``$INTEGER`` |  |
| `updated_at` | ``$STRING`` |  |

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
| `data` | ``$ARRAY`` |  |

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
| `data` | ``$ARRAY`` |  |

#### Example: List

```go
supertypes, err := client.Supertype(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(supertypes) // the array of records
```


### Type

Create an instance: `type := client.Type(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |

#### Example: List

```go
types, err := client.Type(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(types) // the array of records
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

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

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
card := client.Card(nil)
card.Load(map[string]any{"id": "example_id"}, nil)

// card.Data() now returns the loaded card data
// card.Match() returns the last match criteria
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
