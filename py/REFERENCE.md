# PokemonTcg Python SDK Reference

Complete API reference for the PokemonTcg Python SDK.


## PokemonTcgSDK

### Constructor

```python
from pokemontcg_sdk import PokemonTcgSDK

client = PokemonTcgSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PokemonTcgSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = PokemonTcgSDK.test()
```


### Instance Methods

#### `Card(data=None)`

Create a new `CardEntity` instance. Pass `None` for no initial data.

#### `Rarity(data=None)`

Create a new `RarityEntity` instance. Pass `None` for no initial data.

#### `Set(data=None)`

Create a new `SetEntity` instance. Pass `None` for no initial data.

#### `Subtype(data=None)`

Create a new `SubtypeEntity` instance. Pass `None` for no initial data.

#### `Supertype(data=None)`

Create a new `SupertypeEntity` instance. Pass `None` for no initial data.

#### `Type(data=None)`

Create a new `TypeEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CardEntity

```python
card = client.Card()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `str` | No |  |
| `attacks` | `list` | No |  |
| `cardmarket` | `dict` | No |  |
| `convertedRetreatCost` | `int` | No |  |
| `evolvesFrom` | `str` | No |  |
| `evolvesTo` | `list` | No |  |
| `flavorText` | `str` | No |  |
| `hp` | `str` | No |  |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `legalities` | `dict` | No |  |
| `name` | `str` | No |  |
| `nationalPokedexNumbers` | `list` | No |  |
| `number` | `str` | No |  |
| `rarity` | `str` | No |  |
| `resistances` | `list` | No |  |
| `retreatCost` | `list` | No |  |
| `rules` | `list` | No |  |
| `set` | `dict` | No |  |
| `subtypes` | `list` | No |  |
| `supertype` | `str` | No |  |
| `tcgplayer` | `dict` | No |  |
| `types` | `list` | No |  |
| `weaknesses` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Card().list()
for card in results:
    print(card)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Card().load({"id": "card_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RarityEntity

```python
rarity = client.Rarity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Rarity().list()
for rarity in results:
    print(rarity)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RarityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SetEntity

```python
set = client.Set()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `legalities` | `dict` | No |  |
| `name` | `str` | No |  |
| `printedTotal` | `int` | No |  |
| `ptcgoCode` | `str` | No |  |
| `releaseDate` | `str` | No |  |
| `series` | `str` | No |  |
| `total` | `int` | No |  |
| `updatedAt` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Set().list()
for set in results:
    print(set)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Set().load({"id": "set_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubtypeEntity

```python
subtype = client.Subtype()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Subtype().list()
for subtype in results:
    print(subtype)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubtypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SupertypeEntity

```python
supertype = client.Supertype()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Supertype().list()
for supertype in results:
    print(supertype)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SupertypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TypeEntity

```python
type = client.Type()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Type().list()
for type in results:
    print(type)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = PokemonTcgSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

