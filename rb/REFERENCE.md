# PokemonTcg Ruby SDK Reference

Complete API reference for the PokemonTcg Ruby SDK.


## PokemonTcgSDK

### Constructor

```ruby
require_relative 'pokemon-tcg_sdk'

client = PokemonTcgSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PokemonTcgSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = PokemonTcgSDK.test
```


### Instance Methods

#### `Card(data = nil)`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `Rarity(data = nil)`

Create a new `Rarity` entity instance. Pass `nil` for no initial data.

#### `Set(data = nil)`

Create a new `Set` entity instance. Pass `nil` for no initial data.

#### `Subtype(data = nil)`

Create a new `Subtype` entity instance. Pass `nil` for no initial data.

#### `Supertype(data = nil)`

Create a new `Supertype` entity instance. Pass `nil` for no initial data.

#### `Type(data = nil)`

Create a new `Type` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## CardEntity

```ruby
card = client.Card
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Card.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Card.load({ "id" => "card_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RarityEntity

```ruby
rarity = client.Rarity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Rarity.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RarityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SetEntity

```ruby
set = client.Set
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Set.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Set.load({ "id" => "set_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubtypeEntity

```ruby
subtype = client.Subtype
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Subtype.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubtypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SupertypeEntity

```ruby
supertype = client.Supertype
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Supertype.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SupertypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TypeEntity

```ruby
type = client.Type
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Type.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = PokemonTcgSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

