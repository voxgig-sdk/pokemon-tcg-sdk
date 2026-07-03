# PokemonTcg SDK

Pokémon TCG API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install pokemon-tcg
```

**Python**
```bash
pip install pokemon-tcg-sdk
```

**PHP**
```bash
composer require voxgig/pokemon-tcg-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/pokemon-tcg-sdk/go
```

**Ruby**
```bash
gem install pokemon-tcg-sdk
```

**Lua**
```bash
luarocks install pokemon-tcg-sdk
```

## Quickstart

### TypeScript

```ts
import { PokemonTcgSDK } from 'pokemon-tcg'

const client = new PokemonTcgSDK({
  apikey: process.env.POKEMON-TCG_APIKEY,
})

// List all cards
const cards = await client.Card().list()
console.log(cards.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o pokemon-tcg-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "pokemon-tcg": {
      "command": "/abs/path/to/pokemon-tcg-mcp"
    }
  }
}
```

## Entities

The API exposes 6 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Card** |  | `/cards` |
| **Rarity** |  | `/rarities` |
| **Set** |  | `/sets` |
| **Subtype** |  | `/subtypes` |
| **Supertype** |  | `/supertypes` |
| **Type** |  | `/types` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from pokemontcg_sdk import PokemonTcgSDK

client = PokemonTcgSDK({
    "apikey": os.environ.get("POKEMON-TCG_APIKEY"),
})

# List all cards
cards, err = client.Card().list()
print(cards)

# Load a specific card
card, err = client.Card().load({"id": "example_id"})
print(card)
```

### PHP

```php
<?php
require_once 'pokemontcg_sdk.php';

$client = new PokemonTcgSDK([
    "apikey" => getenv("POKEMON-TCG_APIKEY"),
]);

// List all cards
[$cards, $err] = $client->Card()->list();
print_r($cards);

// Load a specific card
[$card, $err] = $client->Card()->load(["id" => "example_id"]);
print_r($card);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/pokemon-tcg-sdk/go"

client := sdk.NewPokemonTcgSDK(map[string]any{
    "apikey": os.Getenv("POKEMON-TCG_APIKEY"),
})

// List all cards
cards, err := client.Card(nil).List(nil, nil)
fmt.Println(cards)
```

### Ruby

```ruby
require_relative "PokemonTcg_sdk"

client = PokemonTcgSDK.new({
  "apikey" => ENV["POKEMON-TCG_APIKEY"],
})

# List all cards
cards, err = client.Card().list
puts cards

# Load a specific card
card, err = client.Card().load({ "id" => "example_id" })
puts card
```

### Lua

```lua
local sdk = require("pokemon-tcg_sdk")

local client = sdk.new({
  apikey = os.getenv("POKEMON-TCG_APIKEY"),
})

-- List all cards
local cards, err = client:Card():list()
print(cards)

-- Load a specific card
local card, err = client:Card():load({ id = "example_id" })
print(card)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = PokemonTcgSDK.test()
const result = await client.Card().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = PokemonTcgSDK.test()
result, err = client.Card().load({"id": "test01"})
```

### PHP

```php
$client = PokemonTcgSDK::test();
[$result, $err] = $client->Card()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Card(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = PokemonTcgSDK.test
result, err = client.Card().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Card():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the Pokémon TCG API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
