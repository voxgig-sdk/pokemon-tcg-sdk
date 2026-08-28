# PokemonTcg TypeScript SDK



The TypeScript SDK for the PokemonTcg API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Card()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/pokemon-tcg-sdk/releases](https://github.com/voxgig-sdk/pokemon-tcg-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { PokemonTcgSDK } from '@voxgig-sdk/pokemon-tcg'

const client = new PokemonTcgSDK({
  apikey: process.env.POKEMON_TCG_APIKEY,
})
```

### 2. List card records

`list()` resolves to an array of Card ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const cards = await client.Card().list()

for (const card of cards) {
  console.log(card)
}
```

### 3. Load a card

`load()` returns the entity directly and throws on failure:

```ts
try {
  const card = await client.Card().load({ id: 'example_id' })
  console.log(card)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const raritys = await client.Rarity().list()
  console.log(raritys)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = PokemonTcgSDK.test()

const rarity = await client.Rarity().list()
// rarity is the entity, populated with mock response data
// — call rarity.data() for the record itself
console.log(rarity)
```

You can also use the instance method:

```ts
const client = new PokemonTcgSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Rarity()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new PokemonTcgSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### PokemonTcgSDK

#### Constructor

```ts
new PokemonTcgSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Card(data?)` | `CardEntity` | Create a Card entity instance. |
| `Rarity(data?)` | `RarityEntity` | Create a Rarity entity instance. |
| `Set(data?)` | `SetEntity` | Create a Set entity instance. |
| `Subtype(data?)` | `SubtypeEntity` | Create a Subtype entity instance. |
| `Supertype(data?)` | `SupertypeEntity` | Create a Supertype entity instance. |
| `Type(data?)` | `TypeEntity` | Create a Type entity instance. |
| `tester(testopts?, sdkopts?)` | `PokemonTcgSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `PokemonTcgSDK.test(testopts?, sdkopts?)` | `PokemonTcgSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): PokemonTcgSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: list, load.

API path: `/cards`

#### Rarity

| Field | Description |
| --- | --- |
| `data` |  |

Operations: list.

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

Operations: list, load.

API path: `/sets`

#### Subtype

| Field | Description |
| --- | --- |
| `data` |  |

Operations: list.

API path: `/subtypes`

#### Supertype

| Field | Description |
| --- | --- |
| `data` |  |

Operations: list.

API path: `/supertypes`

#### Type

| Field | Description |
| --- | --- |
| `data` |  |

Operations: list.

API path: `/types`



## Entities


### Card

Create an instance: `const card = client.Card()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `artist` | `string` | Artist who illustrated the card |
| `attacks` | `any[]` | Attacks the Pokémon can perform |
| `cardmarket` | `Record<string, any>` | Cardmarket information |
| `convertedRetreatCost` | `number` | Numeric value of retreat cost |
| `evolvesFrom` | `string` | The Pokémon this card evolves from |
| `evolvesTo` | `any[]` | The Pokémon this card evolves to |
| `flavorText` | `string` | Flavor text on the card |
| `hp` | `string` | Hit points of the Pokémon |
| `id` | `string` | Unique identifier for the card |
| `images` | `Record<string, any>` | Image URLs for the card |
| `legalities` | `Record<string, any>` | Legality of the card in different formats |
| `name` | `string` | Name of the card |
| `nationalPokedexNumbers` | `any[]` | National Pokédex numbers |
| `number` | `string` | Card number within the set |
| `rarity` | `string` | Rarity of the card |
| `resistances` | `any[]` | Resistances of the Pokémon |
| `retreatCost` | `any[]` | Retreat cost of the Pokémon |
| `rules` | `any[]` | Special rules for the card |
| `set` | `Record<string, any>` | Set information for the card |
| `subtypes` | `any[]` | Subtypes of the card |
| `supertype` | `string` | Supertype of the card (e.g., Pokémon, Trainer, Energy) |
| `tcgplayer` | `Record<string, any>` | TCGPlayer market information |
| `types` | `any[]` | Energy types of the card |
| `weaknesses` | `any[]` | Weaknesses of the Pokémon |

#### Example: Load

```ts
const card = await client.Card().load({ id: 'card_id' })
```

#### Example: List

```ts
const cards = await client.Card().list()
```


### Rarity

Create an instance: `const rarity = client.Rarity()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |

#### Example: List

```ts
const raritys = await client.Rarity().list()
```


### Set

Create an instance: `const set = client.Set()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the set |
| `images` | `Record<string, any>` | Image URLs for the set |
| `legalities` | `Record<string, any>` | Legality of the set in different formats |
| `name` | `string` | Name of the set |
| `printedTotal` | `number` | Number of cards printed in the set |
| `ptcgoCode` | `string` | PTCGO code for the set |
| `releaseDate` | `string` | Release date of the set |
| `series` | `string` | Series the set belongs to |
| `total` | `number` | Total number of cards in the set including secret rares |
| `updatedAt` | `string` | Last updated timestamp |

#### Example: Load

```ts
const set = await client.Set().load({ id: 'set_id' })
```

#### Example: List

```ts
const sets = await client.Set().list()
```


### Subtype

Create an instance: `const subtype = client.Subtype()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |

#### Example: List

```ts
const subtypes = await client.Subtype().list()
```


### Supertype

Create an instance: `const supertype = client.Supertype()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |

#### Example: List

```ts
const supertypes = await client.Supertype().list()
```


### Type

Create an instance: `const type = client.Type()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |

#### Example: List

```ts
const types = await client.Type().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
pokemon-tcg/
├── src/
│   ├── PokemonTcgSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { PokemonTcgSDK } from '@voxgig-sdk/pokemon-tcg'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const rarity = client.Rarity()
await rarity.list()

// rarity.data() now returns the rarity data from the last `list`
// rarity.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
