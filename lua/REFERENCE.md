# PokemonTcg Lua SDK Reference

Complete API reference for the PokemonTcg Lua SDK.


## PokemonTcgSDK

### Constructor

```lua
local sdk = require("pokemon-tcg_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Card(data)`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Rarity(data)`

Create a new `Rarity` entity instance. Pass `nil` for no initial data.

#### `Set(data)`

Create a new `Set` entity instance. Pass `nil` for no initial data.

#### `Subtype(data)`

Create a new `Subtype` entity instance. Pass `nil` for no initial data.

#### `Supertype(data)`

Create a new `Supertype` entity instance. Pass `nil` for no initial data.

#### `Type(data)`

Create a new `Type` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CardEntity

```lua
local card = client:Card(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | ``$STRING`` | No |  |
| `attack` | ``$ARRAY`` | No |  |
| `cardmarket` | ``$OBJECT`` | No |  |
| `converted_retreat_cost` | ``$INTEGER`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `evolves_from` | ``$STRING`` | No |  |
| `evolves_to` | ``$ARRAY`` | No |  |
| `flavor_text` | ``$STRING`` | No |  |
| `hp` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `image` | ``$OBJECT`` | No |  |
| `legality` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `national_pokedex_number` | ``$ARRAY`` | No |  |
| `number` | ``$STRING`` | No |  |
| `rarity` | ``$STRING`` | No |  |
| `resistance` | ``$ARRAY`` | No |  |
| `retreat_cost` | ``$ARRAY`` | No |  |
| `rule` | ``$ARRAY`` | No |  |
| `set` | ``$OBJECT`` | No |  |
| `subtype` | ``$ARRAY`` | No |  |
| `supertype` | ``$STRING`` | No |  |
| `tcgplayer` | ``$OBJECT`` | No |  |
| `type` | ``$ARRAY`` | No |  |
| `weakness` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Card(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Card(nil):load({ id = "card_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RarityEntity

```lua
local rarity = client:Rarity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Rarity(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RarityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SetEntity

```lua
local set = client:Set(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |
| `id` | ``$STRING`` | No |  |
| `image` | ``$OBJECT`` | No |  |
| `legality` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `printed_total` | ``$INTEGER`` | No |  |
| `ptcgo_code` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | No |  |
| `series` | ``$STRING`` | No |  |
| `total` | ``$INTEGER`` | No |  |
| `updated_at` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Set(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Set(nil):load({ id = "set_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubtypeEntity

```lua
local subtype = client:Subtype(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Subtype(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubtypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SupertypeEntity

```lua
local supertype = client:Supertype(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Supertype(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupertypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TypeEntity

```lua
local type = client:Type(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Type(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

