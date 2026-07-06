# PokemonTcg PHP SDK Reference

Complete API reference for the PokemonTcg PHP SDK.


## PokemonTcgSDK

### Constructor

```php
require_once __DIR__ . '/pokemontcg_sdk.php';

$client = new PokemonTcgSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PokemonTcgSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = PokemonTcgSDK::test();
```


### Instance Methods

#### `Card($data = null)`

Create a new `CardEntity` instance. Pass `null` for no initial data.

#### `Rarity($data = null)`

Create a new `RarityEntity` instance. Pass `null` for no initial data.

#### `Set($data = null)`

Create a new `SetEntity` instance. Pass `null` for no initial data.

#### `Subtype($data = null)`

Create a new `SubtypeEntity` instance. Pass `null` for no initial data.

#### `Supertype($data = null)`

Create a new `SupertypeEntity` instance. Pass `null` for no initial data.

#### `Type($data = null)`

Create a new `TypeEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): PokemonTcgUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CardEntity

```php
$card = $client->Card();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No |  |
| `attack` | `array` | No |  |
| `cardmarket` | `array` | No |  |
| `converted_retreat_cost` | `int` | No |  |
| `data` | `array` | No |  |
| `evolves_from` | `string` | No |  |
| `evolves_to` | `array` | No |  |
| `flavor_text` | `string` | No |  |
| `hp` | `string` | No |  |
| `id` | `string` | No |  |
| `image` | `array` | No |  |
| `legality` | `array` | No |  |
| `name` | `string` | No |  |
| `national_pokedex_number` | `array` | No |  |
| `number` | `string` | No |  |
| `rarity` | `string` | No |  |
| `resistance` | `array` | No |  |
| `retreat_cost` | `array` | No |  |
| `rule` | `array` | No |  |
| `set` | `array` | No |  |
| `subtype` | `array` | No |  |
| `supertype` | `string` | No |  |
| `tcgplayer` | `array` | No |  |
| `type` | `array` | No |  |
| `weakness` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Card()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Card()->load(["id" => "card_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardEntity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RarityEntity

```php
$rarity = $client->Rarity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Rarity()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RarityEntity`

Create a new `RarityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SetEntity

```php
$set = $client->Set();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `id` | `string` | No |  |
| `image` | `array` | No |  |
| `legality` | `array` | No |  |
| `name` | `string` | No |  |
| `printed_total` | `int` | No |  |
| `ptcgo_code` | `string` | No |  |
| `release_date` | `string` | No |  |
| `series` | `string` | No |  |
| `total` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Set()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Set()->load(["id" => "set_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SetEntity`

Create a new `SetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubtypeEntity

```php
$subtype = $client->Subtype();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Subtype()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubtypeEntity`

Create a new `SubtypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SupertypeEntity

```php
$supertype = $client->Supertype();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Supertype()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SupertypeEntity`

Create a new `SupertypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TypeEntity

```php
$type = $client->Type();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Type()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TypeEntity`

Create a new `TypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new PokemonTcgSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

