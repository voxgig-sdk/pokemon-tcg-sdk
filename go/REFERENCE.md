# PokemonTcg Golang SDK Reference

Complete API reference for the PokemonTcg Golang SDK.


## PokemonTcgSDK

### Constructor

```go
func NewPokemonTcgSDK(options map[string]any) *PokemonTcgSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *PokemonTcgSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *PokemonTcgSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Card(data map[string]any) PokemonTcgEntity`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Rarity(data map[string]any) PokemonTcgEntity`

Create a new `Rarity` entity instance. Pass `nil` for no initial data.

#### `Set(data map[string]any) PokemonTcgEntity`

Create a new `Set` entity instance. Pass `nil` for no initial data.

#### `Subtype(data map[string]any) PokemonTcgEntity`

Create a new `Subtype` entity instance. Pass `nil` for no initial data.

#### `Supertype(data map[string]any) PokemonTcgEntity`

Create a new `Supertype` entity instance. Pass `nil` for no initial data.

#### `Type(data map[string]any) PokemonTcgEntity`

Create a new `Type` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CardEntity

```go
card := client.Card(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No |  |
| `attack` | `[]any` | No |  |
| `cardmarket` | `map[string]any` | No |  |
| `converted_retreat_cost` | `int` | No |  |
| `data` | `map[string]any` | No |  |
| `evolves_from` | `string` | No |  |
| `evolves_to` | `[]any` | No |  |
| `flavor_text` | `string` | No |  |
| `hp` | `string` | No |  |
| `id` | `string` | No |  |
| `image` | `map[string]any` | No |  |
| `legality` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `national_pokedex_number` | `[]any` | No |  |
| `number` | `string` | No |  |
| `rarity` | `string` | No |  |
| `resistance` | `[]any` | No |  |
| `retreat_cost` | `[]any` | No |  |
| `rule` | `[]any` | No |  |
| `set` | `map[string]any` | No |  |
| `subtype` | `[]any` | No |  |
| `supertype` | `string` | No |  |
| `tcgplayer` | `map[string]any` | No |  |
| `type` | `[]any` | No |  |
| `weakness` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Card(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RarityEntity

```go
rarity := client.Rarity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rarity(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RarityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SetEntity

```go
set := client.Set(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `image` | `map[string]any` | No |  |
| `legality` | `map[string]any` | No |  |
| `name` | `string` | No |  |
| `printed_total` | `int` | No |  |
| `ptcgo_code` | `string` | No |  |
| `release_date` | `string` | No |  |
| `series` | `string` | No |  |
| `total` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Set(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Set(nil).Load(map[string]any{"id": "set_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubtypeEntity

```go
subtype := client.Subtype(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Subtype(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubtypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SupertypeEntity

```go
supertype := client.Supertype(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Supertype(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SupertypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TypeEntity

```go
type := client.Type(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Type(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewPokemonTcgSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

