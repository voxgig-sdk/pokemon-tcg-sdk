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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when POKEMON_TCG_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('POKEMON_TCG_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PokemonTcgSDK.test();
        const ent = testsdk.Set();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.POKEMON_TCG_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'set.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the set", "t": "`$STRING`", "key$": "id", "index$": 0 }, "images": { "a": true, "h": "Images", "n": "images", "r": false, "sh": "Image URLs for the set", "t": "`$OBJECT`", "key$": "images", "index$": 1 }, "legalities": { "a": true, "h": "Legalities", "n": "legalities", "r": false, "sh": "Legality of the set in different formats", "t": "`$OBJECT`", "key$": "legalities", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the set", "t": "`$STRING`", "key$": "name", "index$": 3 }, "printedTotal": { "a": true, "h": "Printed Total", "n": "printedTotal", "r": false, "sh": "Number of cards printed in the set", "t": "`$INTEGER`", "key$": "printedTotal", "index$": 4 }, "ptcgoCode": { "a": true, "h": "Ptcgo Code", "n": "ptcgoCode", "r": false, "sh": "PTCGO code for the set", "t": "`$STRING`", "key$": "ptcgoCode", "index$": 5 }, "releaseDate": { "a": true, "fo": "date", "h": "Release Date", "n": "releaseDate", "r": false, "sh": "Release date of the set", "t": "`$STRING`", "key$": "releaseDate", "index$": 6 }, "series": { "a": true, "h": "Series", "n": "series", "r": false, "sh": "Series the set belongs to", "t": "`$STRING`", "key$": "series", "index$": 7 }, "total": { "a": true, "h": "Total", "n": "total", "r": false, "sh": "Total number of cards in the set including secret rares", "t": "`$INTEGER`", "key$": "total", "index$": 8 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "Last updated timestamp", "t": "`$STRING`", "key$": "updatedAt", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "set", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /sets", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 250, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/sets", "q": { "exist": ["order_by", "page", "page_size", "q"] }, "r": {}, "s": [{ "lit": "sets" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /sets/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/sets/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "sets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "set", "name__orig": "set", "Name": "Set", "name_": "set", "name-": "set", "NAME": "SET", "index$": 2 }, { "active": true, "entity": "set", "key$": "BasicSetFlow", "kind": "basic", "name": "BasicSetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "set_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "set_ref01", "srcdatavar": "set_ref01_data", "suffix": "_dt0" }, "m": { "id": "set01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-set_ref01" } }], "index$": 1 }] }, 'Set', { "GET /sets": { "protocol": "http", "operationId": "searchSets", "responses": { "200": { "description": "Successful response with list of sets", "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "items": { "properties": { "id": { "description": "Unique identifier for the set", "type": "string", "key$": "id" }, "images": { "description": "Image URLs for the set", "properties": { "logo": { "format": "uri", "type": "string" }, "symbol": { "format": "uri", "type": "string" } }, "type": "object", "key$": "images" }, "legalities": { "description": "Legality of the set in different formats", "properties": { "expanded": { "type": "string" }, "standard": { "type": "string" }, "unlimited": { "type": "string" } }, "type": "object", "key$": "legalities" }, "name": { "description": "Name of the set", "type": "string", "key$": "name" }, "printedTotal": { "description": "Number of cards printed in the set", "type": "integer", "key$": "printedTotal" }, "ptcgoCode": { "description": "PTCGO code for the set", "type": "string", "key$": "ptcgoCode" }, "releaseDate": { "description": "Release date of the set", "format": "date", "type": "string", "key$": "releaseDate" }, "series": { "description": "Series the set belongs to", "type": "string", "key$": "series" }, "total": { "description": "Total number of cards in the set including secret rares", "type": "integer", "key$": "total" }, "updatedAt": { "description": "Last updated timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" } }, "type": "object", "x-ref": "#/components/schemas/Set", "index$": 0 }, "key$": "data", "type": "array" }, "page": { "key$": "page", "type": "integer" }, "pageSize": { "key$": "pageSize", "type": "integer" }, "count": { "key$": "count", "type": "integer" }, "totalCount": { "key$": "totalCount", "type": "integer" } } } } } }, "400": { "description": "Bad request" }, "429": { "description": "Rate limit exceeded" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "q", "in": "query", "description": "Query string for searching sets", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1 }, "index$": 1 }, { "name": "pageSize", "in": "query", "description": "Number of results per page", "required": false, "schema": { "type": "integer", "default": 250, "maximum": 250 }, "index$": 2 }, { "name": "orderBy", "in": "query", "description": "Field to order results by", "required": false, "schema": { "type": "string" }, "index$": 3 }], "security": [{ "ApiKeyAuth": [] }, {}], "securitySource": "operation", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-Api-Key", "description": "API key for authentication. Register at the Developer Portal for higher rate limits." } } }, "GET /sets/{id}": { "protocol": "http", "operationId": "getSet", "responses": { "200": { "description": "Successful response with set details", "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "type": "object", "properties": { "id": { "description": "Unique identifier for the set", "type": "string", "key$": "id" }, "name": { "description": "Name of the set", "type": "string", "key$": "name" }, "series": { "description": "Series the set belongs to", "type": "string", "key$": "series" }, "printedTotal": { "description": "Number of cards printed in the set", "type": "integer", "key$": "printedTotal" }, "total": { "description": "Total number of cards in the set including secret rares", "type": "integer", "key$": "total" }, "legalities": { "description": "Legality of the set in different formats", "properties": { "expanded": { "type": "string" }, "standard": { "type": "string" }, "unlimited": { "type": "string" } }, "type": "object", "key$": "legalities" }, "ptcgoCode": { "description": "PTCGO code for the set", "type": "string", "key$": "ptcgoCode" }, "releaseDate": { "description": "Release date of the set", "format": "date", "type": "string", "key$": "releaseDate" }, "updatedAt": { "description": "Last updated timestamp", "format": "date-time", "type": "string", "key$": "updatedAt" }, "images": { "description": "Image URLs for the set", "properties": { "logo": { "format": "uri", "type": "string" }, "symbol": { "format": "uri", "type": "string" } }, "type": "object", "key$": "images" } }, "x-ref": "#/components/schemas/Set", "index$": 0 } } } } } }, "404": { "description": "Set not found" }, "429": { "description": "Rate limit exceeded" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "id", "in": "path", "description": "The unique identifier for the set", "required": true, "schema": { "type": "string" }, "index$": 0 }], "security": [{ "ApiKeyAuth": [] }, {}], "securitySource": "operation", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-Api-Key", "description": "API key for authentication. Register at the Developer Portal for higher rate limits." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let set_ref01_data = Object.values(setup.data.existing.set)[0];
        // LIST
        const set_ref01_ent = client.Set();
        const set_ref01_match = {};
        const set_ref01_list = (await set_ref01_ent.list(set_ref01_match)).map((e) => e.data());
        // LOAD
        const set_ref01_match_dt0 = {};
        set_ref01_match_dt0.id = set_ref01_data.id;
        const set_ref01_data_dt0 = (await set_ref01_ent.load(set_ref01_match_dt0)).data();
        (0, node_assert_1.default)(set_ref01_data_dt0.id === set_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/set/SetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PokemonTcgSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['set01', 'set02', 'set03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'POKEMON_TCG_TEST_SET_ENTID': idmap,
        'POKEMON_TCG_TEST_LIVE': 'FALSE',
        'POKEMON_TCG_TEST_EXPLAIN': 'FALSE',
        'POKEMON_TCG_APIKEY': '',
    });
    idmap = env['POKEMON_TCG_TEST_SET_ENTID'];
    const live = 'TRUE' === env.POKEMON_TCG_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['POKEMON_TCG_TEST_SET_ENTID'];
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
//# sourceMappingURL=SetEntity.test.js.map