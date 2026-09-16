"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when POKEMON_TCG_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('POKEMON_TCG_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PokemonTcgSDK.test();
        const ent = testsdk.Card();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.POKEMON_TCG_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'card.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "artist", "req": false, "short": "Artist who illustrated the card", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "attacks", "req": false, "short": "Attacks the Pokémon can perform", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "cardmarket", "req": false, "short": "Cardmarket information", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "convertedRetreatCost", "req": false, "short": "Numeric value of retreat cost", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "evolvesFrom", "req": false, "short": "The Pokémon this card evolves from", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "evolvesTo", "req": false, "short": "The Pokémon this card evolves to", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "flavorText", "req": false, "short": "Flavor text on the card", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "hp", "req": false, "short": "Hit points of the Pokémon", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the card", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "images", "req": false, "short": "Image URLs for the card", "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "legalities", "req": false, "short": "Legality of the card in different formats", "type": "`$OBJECT`", "index$": 10 }, { "active": true, "name": "name", "req": false, "short": "Name of the card", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "nationalPokedexNumbers", "req": false, "short": "National Pokédex numbers", "type": "`$ARRAY`", "index$": 12 }, { "active": true, "name": "number", "req": false, "short": "Card number within the set", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "rarity", "req": false, "short": "Rarity of the card", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "resistances", "req": false, "short": "Resistances of the Pokémon", "type": "`$ARRAY`", "index$": 15 }, { "active": true, "name": "retreatCost", "req": false, "short": "Retreat cost of the Pokémon", "type": "`$ARRAY`", "index$": 16 }, { "active": true, "name": "rules", "req": false, "short": "Special rules for the card", "type": "`$ARRAY`", "index$": 17 }, { "active": true, "name": "set", "req": false, "short": "Set information for the card", "type": "`$OBJECT`", "index$": 18 }, { "active": true, "name": "subtypes", "req": false, "short": "Subtypes of the card", "type": "`$ARRAY`", "index$": 19 }, { "active": true, "name": "supertype", "req": false, "short": "Supertype of the card (e.g., Pokémon, Trainer, Energy)", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "tcgplayer", "req": false, "short": "TCGPlayer market information", "type": "`$OBJECT`", "index$": 21 }, { "active": true, "name": "types", "req": false, "short": "Energy types of the card", "type": "`$ARRAY`", "index$": 22 }, { "active": true, "name": "weaknesses", "req": false, "short": "Weaknesses of the Pokémon", "type": "`$ARRAY`", "index$": 23 }], "id": { "field": "id", "name": "id" }, "name": "card", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 250, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "select", "orig": "select", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /cards", "json": "{\"operationId\":\"searchCards\",\"parameters\":[{\"description\":\"Query string for searching cards (e.g., 'name:charizard', 'types:fire')\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":250,\"maximum\":250,\"type\":\"integer\"}},{\"description\":\"Field to order results by\",\"in\":\"query\",\"name\":\"orderBy\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of fields to return\",\"in\":\"query\",\"name\":\"select\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"data\":{\"items\":{\"properties\":{\"artist\":{\"description\":\"Artist who illustrated the card\",\"type\":\"string\"},\"attacks\":{\"description\":\"Attacks the Pokémon can perform\",\"items\":{\"properties\":{\"convertedEnergyCost\":{\"type\":\"integer\"},\"cost\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"damage\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"cardmarket\":{\"description\":\"Cardmarket information\",\"type\":\"object\"},\"convertedRetreatCost\":{\"description\":\"Numeric value of retreat cost\",\"type\":\"integer\"},\"evolvesFrom\":{\"description\":\"The Pokémon this card evolves from\",\"type\":\"string\"},\"evolvesTo\":{\"description\":\"The Pokémon this card evolves to\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"flavorText\":{\"description\":\"Flavor text on the card\",\"type\":\"string\"},\"hp\":{\"description\":\"Hit points of the Pokémon\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the card\",\"type\":\"string\"},\"images\":{\"description\":\"Image URLs for the card\",\"properties\":{\"large\":{\"format\":\"uri\",\"type\":\"string\"},\"small\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"legalities\":{\"description\":\"Legality of the card in different formats\",\"properties\":{\"expanded\":{\"type\":\"string\"},\"standard\":{\"type\":\"string\"},\"unlimited\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the card\",\"type\":\"string\"},\"nationalPokedexNumbers\":{\"description\":\"National Pokédex numbers\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"number\":{\"description\":\"Card number within the set\",\"type\":\"string\"},\"rarity\":{\"description\":\"Rarity of the card\",\"type\":\"string\"},\"resistances\":{\"description\":\"Resistances of the Pokémon\",\"items\":{\"properties\":{\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"retreatCost\":{\"description\":\"Retreat cost of the Pokémon\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"rules\":{\"description\":\"Special rules for the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"set\":{\"description\":\"Set information for the card\",\"properties\":{\"id\":{\"description\":\"Unique identifier for the set\",\"type\":\"string\"},\"images\":{\"description\":\"Image URLs for the set\",\"properties\":{\"logo\":{\"format\":\"uri\",\"type\":\"string\"},\"symbol\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"legalities\":{\"description\":\"Legality of the set in different formats\",\"properties\":{\"expanded\":{\"type\":\"string\"},\"standard\":{\"type\":\"string\"},\"unlimited\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the set\",\"type\":\"string\"},\"printedTotal\":{\"description\":\"Number of cards printed in the set\",\"type\":\"integer\"},\"ptcgoCode\":{\"description\":\"PTCGO code for the set\",\"type\":\"string\"},\"releaseDate\":{\"description\":\"Release date of the set\",\"format\":\"date\",\"type\":\"string\"},\"series\":{\"description\":\"Series the set belongs to\",\"type\":\"string\"},\"total\":{\"description\":\"Total number of cards in the set including secret rares\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Last updated timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"subtypes\":{\"description\":\"Subtypes of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"supertype\":{\"description\":\"Supertype of the card (e.g., Pokémon, Trainer, Energy)\",\"type\":\"string\"},\"tcgplayer\":{\"description\":\"TCGPlayer market information\",\"type\":\"object\"},\"types\":{\"description\":\"Energy types of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"weaknesses\":{\"description\":\"Weaknesses of the Pokémon\",\"items\":{\"properties\":{\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"type\":\"integer\"},\"pageSize\":{\"type\":\"integer\"},\"totalCount\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of cards\"},\"400\":{\"description\":\"Bad request\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Register at the Developer Portal for higher rate limits.\",\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cards", "segments": [{ "lit": "cards" }], "select": { "exist": ["order_by", "page", "page_size", "q", "select"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /cards/{id}", "json": "{\"operationId\":\"getCard\",\"parameters\":[{\"description\":\"The unique identifier for the card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"artist\":{\"description\":\"Artist who illustrated the card\",\"type\":\"string\"},\"attacks\":{\"description\":\"Attacks the Pokémon can perform\",\"items\":{\"properties\":{\"convertedEnergyCost\":{\"type\":\"integer\"},\"cost\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"damage\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"text\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"cardmarket\":{\"description\":\"Cardmarket information\",\"type\":\"object\"},\"convertedRetreatCost\":{\"description\":\"Numeric value of retreat cost\",\"type\":\"integer\"},\"evolvesFrom\":{\"description\":\"The Pokémon this card evolves from\",\"type\":\"string\"},\"evolvesTo\":{\"description\":\"The Pokémon this card evolves to\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"flavorText\":{\"description\":\"Flavor text on the card\",\"type\":\"string\"},\"hp\":{\"description\":\"Hit points of the Pokémon\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the card\",\"type\":\"string\"},\"images\":{\"description\":\"Image URLs for the card\",\"properties\":{\"large\":{\"format\":\"uri\",\"type\":\"string\"},\"small\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"legalities\":{\"description\":\"Legality of the card in different formats\",\"properties\":{\"expanded\":{\"type\":\"string\"},\"standard\":{\"type\":\"string\"},\"unlimited\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the card\",\"type\":\"string\"},\"nationalPokedexNumbers\":{\"description\":\"National Pokédex numbers\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"number\":{\"description\":\"Card number within the set\",\"type\":\"string\"},\"rarity\":{\"description\":\"Rarity of the card\",\"type\":\"string\"},\"resistances\":{\"description\":\"Resistances of the Pokémon\",\"items\":{\"properties\":{\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"retreatCost\":{\"description\":\"Retreat cost of the Pokémon\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"rules\":{\"description\":\"Special rules for the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"set\":{\"description\":\"Set information for the card\",\"properties\":{\"id\":{\"description\":\"Unique identifier for the set\",\"type\":\"string\"},\"images\":{\"description\":\"Image URLs for the set\",\"properties\":{\"logo\":{\"format\":\"uri\",\"type\":\"string\"},\"symbol\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"legalities\":{\"description\":\"Legality of the set in different formats\",\"properties\":{\"expanded\":{\"type\":\"string\"},\"standard\":{\"type\":\"string\"},\"unlimited\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the set\",\"type\":\"string\"},\"printedTotal\":{\"description\":\"Number of cards printed in the set\",\"type\":\"integer\"},\"ptcgoCode\":{\"description\":\"PTCGO code for the set\",\"type\":\"string\"},\"releaseDate\":{\"description\":\"Release date of the set\",\"format\":\"date\",\"type\":\"string\"},\"series\":{\"description\":\"Series the set belongs to\",\"type\":\"string\"},\"total\":{\"description\":\"Total number of cards in the set including secret rares\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Last updated timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"subtypes\":{\"description\":\"Subtypes of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"supertype\":{\"description\":\"Supertype of the card (e.g., Pokémon, Trainer, Energy)\",\"type\":\"string\"},\"tcgplayer\":{\"description\":\"TCGPlayer market information\",\"type\":\"object\"},\"types\":{\"description\":\"Energy types of the card\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"weaknesses\":{\"description\":\"Weaknesses of the Pokémon\",\"items\":{\"properties\":{\"type\":{\"type\":\"string\"},\"value\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with card details\"},\"404\":{\"description\":\"Card not found\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Register at the Developer Portal for higher rate limits.\",\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cards/{id}", "segments": [{ "lit": "cards" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "card", "name__orig": "card", "Name": "Card", "name_": "card", "name-": "card", "NAME": "CARD", "index$": 0 }, { "active": true, "entity": "card", "key$": "BasicCardFlow", "kind": "basic", "name": "BasicCardFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "card_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "card_ref01", "srcdatavar": "card_ref01_data", "suffix": "_dt0" }, "match": { "id": "card01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-card_ref01" } }], "index$": 1 }] }, 'Card');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let card_ref01_data = Object.values(setup.data.existing.card)[0];
        // LIST
        const card_ref01_ent = client.Card();
        const card_ref01_match = {};
        const card_ref01_list = (await card_ref01_ent.list(card_ref01_match)).map((e) => e.data());
        // LOAD
        const card_ref01_match_dt0 = {};
        card_ref01_match_dt0.id = card_ref01_data.id;
        const card_ref01_data_dt0 = (await card_ref01_ent.load(card_ref01_match_dt0)).data();
        (0, node_assert_1.default)(card_ref01_data_dt0.id === card_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/card/CardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PokemonTcgSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['card01', 'card02', 'card03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'POKEMON_TCG_TEST_CARD_ENTID': idmap,
        'POKEMON_TCG_TEST_LIVE': 'FALSE',
        'POKEMON_TCG_TEST_EXPLAIN': 'FALSE',
        'POKEMON_TCG_APIKEY': '',
    });
    idmap = env['POKEMON_TCG_TEST_CARD_ENTID'];
    const live = 'TRUE' === env.POKEMON_TCG_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['POKEMON_TCG_TEST_CARD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.PokemonTcgSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.POKEMON_TCG_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.POKEMON_TCG_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CardEntity.test.js.map