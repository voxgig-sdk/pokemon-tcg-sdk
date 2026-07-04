# PokemonTcg TypeScript SDK Reference

Complete API reference for the PokemonTcg TypeScript SDK.


## PokemonTcgSDK

### Constructor

```ts
new PokemonTcgSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PokemonTcgSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PokemonTcgSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PokemonTcgSDK` instance in test mode.


### Instance Methods

#### `Card(data?: object)`

Create a new `Card` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardEntity` instance.

#### `Rarity(data?: object)`

Create a new `Rarity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RarityEntity` instance.

#### `Set(data?: object)`

Create a new `Set` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SetEntity` instance.

#### `Subtype(data?: object)`

Create a new `Subtype` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubtypeEntity` instance.

#### `Supertype(data?: object)`

Create a new `Supertype` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupertypeEntity` instance.

#### `Type(data?: object)`

Create a new `Type` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TypeEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PokemonTcgSDK.test()`.

**Returns:** `PokemonTcgSDK` instance in test mode.


---

## CardEntity

```ts
const card = client.card
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.card.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.card.load({ id: 'card_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokemonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RarityEntity

```ts
const rarity = client.rarity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.rarity.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RarityEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokemonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SetEntity

```ts
const set = client.set
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.set.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.set.load({ id: 'set_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SetEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokemonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubtypeEntity

```ts
const subtype = client.subtype
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.subtype.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubtypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokemonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupertypeEntity

```ts
const supertype = client.supertype
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.supertype.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupertypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokemonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TypeEntity

```ts
const type = client.type
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.type.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokemonTcgSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new PokemonTcgSDK({
  feature: {
    test: { active: true },
  }
})
```

