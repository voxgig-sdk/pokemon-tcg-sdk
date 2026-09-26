# PokemonTcg Ruby SDK Reference

Complete API reference for the PokemonTcg Ruby SDK.


## PokemonTcgSDK

### Constructor

```ruby
require_relative 'PokemonTcg_sdk'

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

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

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

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CardEntity

```ruby
card = client.Card
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `String` | No | Artist who illustrated the card |
| `attacks` | `Array` | No | Attacks the Pokémon can perform |
| `cardmarket` | `Hash` | No | Cardmarket information |
| `convertedRetreatCost` | `Integer` | No | Numeric value of retreat cost |
| `evolvesFrom` | `String` | No | The Pokémon this card evolves from |
| `evolvesTo` | `Array` | No | The Pokémon this card evolves to |
| `flavorText` | `String` | No | Flavor text on the card |
| `hp` | `String` | No | Hit points of the Pokémon |
| `id` | `String` | No | Unique identifier for the card |
| `images` | `Hash` | No | Image URLs for the card |
| `legalities` | `Hash` | No | Legality of the card in different formats |
| `name` | `String` | No | Name of the card |
| `nationalPokedexNumbers` | `Array` | No | National Pokédex numbers |
| `number` | `String` | No | Card number within the set |
| `rarity` | `String` | No | Rarity of the card |
| `resistances` | `Array` | No | Resistances of the Pokémon |
| `retreatCost` | `Array` | No | Retreat cost of the Pokémon |
| `rules` | `Array` | No | Special rules for the card |
| `set` | `Hash` | No | Set information for the card |
| `subtypes` | `Array` | No | Subtypes of the card |
| `supertype` | `String` | No | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `tcgplayer` | `Hash` | No | TCGPlayer market information |
| `types` | `Array` | No | Energy types of the card |
| `weaknesses` | `Array` | No | Weaknesses of the Pokémon |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Card.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Card.load({ "id" => "card_id" })
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
| `data` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Rarity.list
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
| `id` | `String` | No | Unique identifier for the set |
| `images` | `Hash` | No | Image URLs for the set |
| `legalities` | `Hash` | No | Legality of the set in different formats |
| `name` | `String` | No | Name of the set |
| `printedTotal` | `Integer` | No | Number of cards printed in the set |
| `ptcgoCode` | `String` | No | PTCGO code for the set |
| `releaseDate` | `String` | No | Release date of the set |
| `series` | `String` | No | Series the set belongs to |
| `total` | `Integer` | No | Total number of cards in the set including secret rares |
| `updatedAt` | `String` | No | Last updated timestamp |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Set.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Set.load({ "id" => "set_id" })
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
| `data` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Subtype.list
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
| `data` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Supertype.list
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
| `data` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Type.list
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
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ruby
client = PokemonTcgSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

