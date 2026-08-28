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

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
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
| `artist` | `string` | No | Artist who illustrated the card |
| `attacks` | `table` | No | Attacks the Pokémon can perform |
| `cardmarket` | `table` | No | Cardmarket information |
| `convertedRetreatCost` | `number` | No | Numeric value of retreat cost |
| `evolvesFrom` | `string` | No | The Pokémon this card evolves from |
| `evolvesTo` | `table` | No | The Pokémon this card evolves to |
| `flavorText` | `string` | No | Flavor text on the card |
| `hp` | `string` | No | Hit points of the Pokémon |
| `id` | `string` | No | Unique identifier for the card |
| `images` | `table` | No | Image URLs for the card |
| `legalities` | `table` | No | Legality of the card in different formats |
| `name` | `string` | No | Name of the card |
| `nationalPokedexNumbers` | `table` | No | National Pokédex numbers |
| `number` | `string` | No | Card number within the set |
| `rarity` | `string` | No | Rarity of the card |
| `resistances` | `table` | No | Resistances of the Pokémon |
| `retreatCost` | `table` | No | Retreat cost of the Pokémon |
| `rules` | `table` | No | Special rules for the card |
| `set` | `table` | No | Set information for the card |
| `subtypes` | `table` | No | Subtypes of the card |
| `supertype` | `string` | No | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `tcgplayer` | `table` | No | TCGPlayer market information |
| `types` | `table` | No | Energy types of the card |
| `weaknesses` | `table` | No | Weaknesses of the Pokémon |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Card():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Card():load({ id = "card_id" })
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
| `data` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Rarity():list()
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
| `id` | `string` | No | Unique identifier for the set |
| `images` | `table` | No | Image URLs for the set |
| `legalities` | `table` | No | Legality of the set in different formats |
| `name` | `string` | No | Name of the set |
| `printedTotal` | `number` | No | Number of cards printed in the set |
| `ptcgoCode` | `string` | No | PTCGO code for the set |
| `releaseDate` | `string` | No | Release date of the set |
| `series` | `string` | No | Series the set belongs to |
| `total` | `number` | No | Total number of cards in the set including secret rares |
| `updatedAt` | `string` | No | Last updated timestamp |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Set():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Set():load({ id = "set_id" })
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
| `data` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Subtype():list()
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
| `data` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Supertype():list()
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
| `data` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Type():list()
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

