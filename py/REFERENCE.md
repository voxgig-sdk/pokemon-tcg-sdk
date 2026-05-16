# PokemonTcg Python SDK Reference

Complete API reference for the PokemonTcg Python SDK.


## PokemonTcgSDK

### Constructor

```python
from pokemon-tcg_sdk import PokemonTcgSDK

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

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## CardEntity

```python
card = client.Card()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Card().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Card().load({"id": "card_id"})
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
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Rarity().list({})
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Set().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Set().load({"id": "set_id"})
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
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Subtype().list({})
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
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Supertype().list({})
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
| `data` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Type().list({})
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

