# PokemonTcg SDK

Query Pokemon Trading Card Game cards, sets, types and rarities through a JSON REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Pokémon TCG API

The [Pokemon TCG API](https://pokemontcg.io/) is a community-maintained REST API that exposes data from the Pokemon Trading Card Game, including every printed card, set, supertype, subtype, type and rarity. It is served from `https://api.pokemontcg.io/v2`.

What you get from the API:

- Card records with names, images, attacks, abilities, weaknesses, HP and set membership
- Set metadata such as release date, total card count and series
- Reference lists of valid `types`, `supertypes`, `subtypes` and `rarities` for use in filters
- A query language (`q=` parameter) for filtering by attributes like `name`, `types`, `set.id` or `rarity`

The API is JSON over HTTPS. An `X-Api-Key` header is supported and recommended; anonymous requests work but are subject to lower rate limits. SDKs are published by the project for JavaScript, Python, Ruby, Go, C# and other languages.

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

## 30-second quickstart

### TypeScript

```ts
import { PokemonTcgSDK } from 'pokemon-tcg'

const client = new PokemonTcgSDK({})

// List all cards
const cards = await client.Card().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **Card** | An individual Pokemon trading card with name, images, attacks, abilities, HP, weaknesses and set linkage; available at `/v2/cards` and `/v2/cards/{id}`. | `/cards` |
| **Rarity** | A reference list of valid card rarity names (e.g. Common, Rare, Rare Holo) usable in card queries; exposed at `/v2/rarities`. | `/rarities` |
| **Set** | A Pokemon TCG release set with series, release date and total card count; available at `/v2/sets` and `/v2/sets/{id}`. | `/sets` |
| **Subtype** | A reference list of card subtypes (e.g. Basic, Stage 1, EX, V) that further classify cards; exposed at `/v2/subtypes`. | `/subtypes` |
| **Supertype** | A reference list of top-level card categories (Pokemon, Trainer, Energy); exposed at `/v2/supertypes`. | `/supertypes` |
| **Type** | A reference list of Pokemon energy types (e.g. Fire, Water, Psychic) used to classify cards; exposed at `/v2/types`. | `/types` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from pokemontcg_sdk import PokemonTcgSDK

client = PokemonTcgSDK({})

# List all cards
cards, err = client.Card(None).list(None, None)

# Load a specific card
card, err = client.Card(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'pokemontcg_sdk.php';

$client = new PokemonTcgSDK([]);

// List all cards
[$cards, $err] = $client->Card(null)->list(null, null);

// Load a specific card
[$card, $err] = $client->Card(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/pokemon-tcg-sdk/go"

client := sdk.NewPokemonTcgSDK(map[string]any{})

// List all cards
cards, err := client.Card(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "PokemonTcg_sdk"

client = PokemonTcgSDK.new({})

# List all cards
cards, err = client.Card(nil).list(nil, nil)

# Load a specific card
card, err = client.Card(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("pokemon-tcg_sdk")

local client = sdk.new({})

-- List all cards
local cards, err = client:Card(nil):list(nil, nil)

-- Load a specific card
local card, err = client:Card(nil):load(
  { id = "example_id" }, nil
)
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
client = PokemonTcgSDK.test(None, None)
result, err = client.Card(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = PokemonTcgSDK::test(null, null);
[$result, $err] = $client->Card(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Card(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = PokemonTcgSDK.test(nil, nil)
result, err = client.Card(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Card(nil):load(
  { id = "test01" }, nil
)
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

## Using the Pokémon TCG API

- Upstream: [https://pokemontcg.io/](https://pokemontcg.io/)
- API docs: [https://docs.pokemontcg.io/](https://docs.pokemontcg.io/)

- The Pokemon TCG SDK and related tooling are released under the MIT License.
- Card text, set names, images and other game assets are trademarks of The Pokemon Company, Nintendo, Game Freak and Creatures Inc.
- The API is provided by the community project at pokemontcg.io and is not an official Pokemon product.
- Use of an `X-Api-Key` header is recommended for higher request quotas; check the docs for current limits.

---

Generated from the Pokémon TCG API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
