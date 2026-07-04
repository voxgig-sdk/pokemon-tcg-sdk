# PokemonTcg Python SDK



The Python SDK for the PokemonTcg API — an entity-oriented client following Pythonic conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/pokemon-tcg-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from pokemontcg_sdk import PokemonTcgSDK

client = PokemonTcgSDK({
    "apikey": os.environ.get("POKEMON_TCG_APIKEY"),
})
```

### 2. List cards

```python
try:
    result = client.card.list()
    for item in result:
        d = item.data_get()
        print(d["id"], d["name"])
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a card

```python
try:
    result = client.card.load({"id": "example_id"})
    print(result)
except Exception as err:
    print(f"load failed: {err}")
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    print(result["err"])     # error value
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = PokemonTcgSDK.test()

result = client.card.load({"id": "test01"})
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = PokemonTcgSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### PokemonTcgSDK

```python
from pokemontcg_sdk import PokemonTcgSDK

client = PokemonTcgSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = PokemonTcgSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### PokemonTcgSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Card` | `(data) -> CardEntity` | Create a Card entity instance. |
| `Rarity` | `(data) -> RarityEntity` | Create a Rarity entity instance. |
| `Set` | `(data) -> SetEntity` | Create a Set entity instance. |
| `Subtype` | `(data) -> SubtypeEntity` | Create a Subtype entity instance. |
| `Supertype` | `(data) -> SupertypeEntity` | Create a Supertype entity instance. |
| `Type` | `(data) -> TypeEntity` | Create a Type entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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
error is returned to the caller as the second element in the return tuple.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── pokemontcg_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`pokemontcg_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
card = client.card
card.load({"id": "example_id"})

# card.data_get() now returns the loaded card data
# card.match_get() returns the last match criteria
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
