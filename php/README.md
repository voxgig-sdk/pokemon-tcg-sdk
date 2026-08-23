# PokemonTcg PHP SDK



The PHP SDK for the PokemonTcg API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Card()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

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

### 2. List card records

```php
try {
    // list() returns an array of Card records — iterate directly.
    $cards = $client->Card()->list();
    foreach ($cards as $item) {
        echo $item["id"] . " " . $item["artist"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a card

```php
try {
    // load() returns the ENTITY — call data_get() for the Card record (throws on error).
    $card = $client->Card()->load(["id" => "example_id"]);
    print_r($card);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $raritys = $client->Rarity()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
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
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
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

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$rarity = $client->Rarity()->list();
print_r($rarity);
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
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `artist` | Artist who illustrated the card |
| `attacks` | Attacks the Pokémon can perform |
| `cardmarket` | Cardmarket information |
| `convertedRetreatCost` | Numeric value of retreat cost |
| `evolvesFrom` | The Pokémon this card evolves from |
| `evolvesTo` | The Pokémon this card evolves to |
| `flavorText` | Flavor text on the card |
| `hp` | Hit points of the Pokémon |
| `id` | Unique identifier for the card |
| `images` | Image URLs for the card |
| `legalities` | Legality of the card in different formats |
| `name` | Name of the card |
| `nationalPokedexNumbers` | National Pokédex numbers |
| `number` | Card number within the set |
| `rarity` | Rarity of the card |
| `resistances` | Resistances of the Pokémon |
| `retreatCost` | Retreat cost of the Pokémon |
| `rules` | Special rules for the card |
| `set` | Set information for the card |
| `subtypes` | Subtypes of the card |
| `supertype` | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `tcgplayer` | TCGPlayer market information |
| `types` | Energy types of the card |
| `weaknesses` | Weaknesses of the Pokémon |

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
| `id` | Unique identifier for the set |
| `images` | Image URLs for the set |
| `legalities` | Legality of the set in different formats |
| `name` | Name of the set |
| `printedTotal` | Number of cards printed in the set |
| `ptcgoCode` | PTCGO code for the set |
| `releaseDate` | Release date of the set |
| `series` | Series the set belongs to |
| `total` | Total number of cards in the set including secret rares |
| `updatedAt` | Last updated timestamp |

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

Create an instance: `$card = $client->Card();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artist` | `string` | Artist who illustrated the card |
| `attacks` | `array` | Attacks the Pokémon can perform |
| `cardmarket` | `array` | Cardmarket information |
| `convertedRetreatCost` | `int` | Numeric value of retreat cost |
| `evolvesFrom` | `string` | The Pokémon this card evolves from |
| `evolvesTo` | `array` | The Pokémon this card evolves to |
| `flavorText` | `string` | Flavor text on the card |
| `hp` | `string` | Hit points of the Pokémon |
| `id` | `string` | Unique identifier for the card |
| `images` | `array` | Image URLs for the card |
| `legalities` | `array` | Legality of the card in different formats |
| `name` | `string` | Name of the card |
| `nationalPokedexNumbers` | `array` | National Pokédex numbers |
| `number` | `string` | Card number within the set |
| `rarity` | `string` | Rarity of the card |
| `resistances` | `array` | Resistances of the Pokémon |
| `retreatCost` | `array` | Retreat cost of the Pokémon |
| `rules` | `array` | Special rules for the card |
| `set` | `array` | Set information for the card |
| `subtypes` | `array` | Subtypes of the card |
| `supertype` | `string` | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `tcgplayer` | `array` | TCGPlayer market information |
| `types` | `array` | Energy types of the card |
| `weaknesses` | `array` | Weaknesses of the Pokémon |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Card record (throws on error).
$card = $client->Card()->load(["id" => "card_id"]);
```

#### Example: List

```php
// list() returns an array of Card records (throws on error).
$cards = $client->Card()->list();
```


### Rarity

Create an instance: `$rarity = $client->Rarity();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: List

```php
// list() returns an array of Rarity records (throws on error).
$raritys = $client->Rarity()->list();
```


### Set

Create an instance: `$set = $client->Set();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the set |
| `images` | `array` | Image URLs for the set |
| `legalities` | `array` | Legality of the set in different formats |
| `name` | `string` | Name of the set |
| `printedTotal` | `int` | Number of cards printed in the set |
| `ptcgoCode` | `string` | PTCGO code for the set |
| `releaseDate` | `string` | Release date of the set |
| `series` | `string` | Series the set belongs to |
| `total` | `int` | Total number of cards in the set including secret rares |
| `updatedAt` | `string` | Last updated timestamp |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Set record (throws on error).
$set = $client->Set()->load(["id" => "set_id"]);
```

#### Example: List

```php
// list() returns an array of Set records (throws on error).
$sets = $client->Set()->list();
```


### Subtype

Create an instance: `$subtype = $client->Subtype();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: List

```php
// list() returns an array of Subtype records (throws on error).
$subtypes = $client->Subtype()->list();
```


### Supertype

Create an instance: `$supertype = $client->Supertype();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: List

```php
// list() returns an array of Supertype records (throws on error).
$supertypes = $client->Supertype()->list();
```


### Type

Create an instance: `$type = $client->Type();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |

#### Example: List

```php
// list() returns an array of Type records (throws on error).
$types = $client->Type()->list();
```


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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$rarity = $client->Rarity();
$rarity->list();

// $rarity->data_get() now returns the rarity data from the last list
// $rarity->match_get() returns the last match criteria
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
