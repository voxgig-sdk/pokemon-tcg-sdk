# PokemonTcg PHP SDK



The PHP SDK for the PokemonTcg API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/pokemon-tcg-sdk/releases](https://github.com/voxgig-sdk/pokemon-tcg-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'pokemontcg_sdk.php';

$client = new PokemonTcgSDK([
    "apikey" => getenv("POKEMON_TCG_APIKEY"),
]);
```

### 2. List cards

```php
try {
    $result = $client->card()->list();
    if (is_array($result)) {
        foreach ($result as $item) {
            $d = $item->data_get();
            echo $d["id"] . " " . $d["name"] . "\n";
        }
    }
} catch (\Exception $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a card

```php
try {
    $result = $client->card()->load(["id" => "example_id"]);
    print_r($result);
} catch (\Exception $err) {
    echo "Error: " . $err->getMessage();
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    echo "Error: " . $result["err"]->getMessage();
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = PokemonTcgSDK::test();

$result = $client->card()->load(["id" => "test01"]);
// $result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new PokemonTcgSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
POKEMON_TCG_TEST_LIVE=TRUE
POKEMON_TCG_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### PokemonTcgSDK

```php
require_once 'pokemontcg_sdk.php';
$client = new PokemonTcgSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = PokemonTcgSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### PokemonTcgSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Card` | `($data): CardEntity` | Create a Card entity instance. |
| `Rarity` | `($data): RarityEntity` | Create a Rarity entity instance. |
| `Set` | `($data): SetEntity` | Create a Set entity instance. |
| `Subtype` | `($data): SubtypeEntity` | Create a Subtype entity instance. |
| `Supertype` | `($data): SupertypeEntity` | Create a Supertype entity instance. |
| `Type` | `($data): TypeEntity` | Create a Type entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Card

| Field | Description |
| --- | --- |
| `artist` |  |
| `attack` |  |
| `cardmarket` |  |
| `converted_retreat_cost` |  |
| `data` |  |
| `evolves_from` |  |
| `evolves_to` |  |
| `flavor_text` |  |
| `hp` |  |
| `id` |  |
| `image` |  |
| `legality` |  |
| `name` |  |
| `national_pokedex_number` |  |
| `number` |  |
| `rarity` |  |
| `resistance` |  |
| `retreat_cost` |  |
| `rule` |  |
| `set` |  |
| `subtype` |  |
| `supertype` |  |
| `tcgplayer` |  |
| `type` |  |
| `weakness` |  |

Operations: List, Load.

API path: `/cards`

#### Rarity

| Field | Description |
| --- | --- |
| `data` |  |

Operations: List.

API path: `/rarities`

#### Set

| Field | Description |
| --- | --- |
| `data` |  |
| `id` |  |
| `image` |  |
| `legality` |  |
| `name` |  |
| `printed_total` |  |
| `ptcgo_code` |  |
| `release_date` |  |
| `series` |  |
| `total` |  |
| `updated_at` |  |

Operations: List, Load.

API path: `/sets`

#### Subtype

| Field | Description |
| --- | --- |
| `data` |  |

Operations: List.

API path: `/subtypes`

#### Supertype

| Field | Description |
| --- | --- |
| `data` |  |

Operations: List.

API path: `/supertypes`

#### Type

| Field | Description |
| --- | --- |
| `data` |  |

Operations: List.

API path: `/types`



## Entities


### Card

Create an instance: `const card = client.card`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const card = await client.card.load({ id: 'card_id' })
```

#### Example: List

```ts
const cards = await client.card.list()
```


### Rarity

Create an instance: `const rarity = client.rarity`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |

#### Example: List

```ts
const raritys = await client.rarity.list()
```


### Set

Create an instance: `const set = client.set`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const set = await client.set.load({ id: 'set_id' })
```

#### Example: List

```ts
const sets = await client.set.list()
```


### Subtype

Create an instance: `const subtype = client.subtype`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |

#### Example: List

```ts
const subtypes = await client.subtype.list()
```


### Supertype

Create an instance: `const supertype = client.supertype`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |

#### Example: List

```ts
const supertypes = await client.supertype.list()
```


### Type

Create an instance: `const type = client.type`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |

#### Example: List

```ts
const types = await client.type.list()
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
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── pokemontcg_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`pokemontcg_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$card = $client->card();
$card->load(["id" => "example_id"]);

// $card->dataGet() now returns the loaded card data
// $card->matchGet() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
