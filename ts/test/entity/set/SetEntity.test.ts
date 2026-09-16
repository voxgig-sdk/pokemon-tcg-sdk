

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PokemonTcgSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEMON_TCG_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEMON_TCG_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokemonTcgSDK.test()
    const ent = testsdk.Set()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEMON_TCG_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'set.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"short":"Unique identifier for the set","type":"`$STRING`","index$":0},{"active":true,"name":"images","req":false,"short":"Image URLs for the set","type":"`$OBJECT`","index$":1},{"active":true,"name":"legalities","req":false,"short":"Legality of the set in different formats","type":"`$OBJECT`","index$":2},{"active":true,"name":"name","req":false,"short":"Name of the set","type":"`$STRING`","index$":3},{"active":true,"name":"printedTotal","req":false,"short":"Number of cards printed in the set","type":"`$INTEGER`","index$":4},{"active":true,"name":"ptcgoCode","req":false,"short":"PTCGO code for the set","type":"`$STRING`","index$":5},{"active":true,"format":"date","name":"releaseDate","req":false,"short":"Release date of the set","type":"`$STRING`","index$":6},{"active":true,"name":"series","req":false,"short":"Series the set belongs to","type":"`$STRING`","index$":7},{"active":true,"name":"total","req":false,"short":"Total number of cards in the set including secret rares","type":"`$INTEGER`","index$":8},{"active":true,"format":"date-time","name":"updatedAt","req":false,"short":"Last updated timestamp","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"set","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":250,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /sets","json":"{\"operationId\":\"searchSets\",\"parameters\":[{\"description\":\"Query string for searching sets\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":250,\"maximum\":250,\"type\":\"integer\"}},{\"description\":\"Field to order results by\",\"in\":\"query\",\"name\":\"orderBy\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"data\":{\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the set\",\"type\":\"string\"},\"images\":{\"description\":\"Image URLs for the set\",\"properties\":{\"logo\":{\"format\":\"uri\",\"type\":\"string\"},\"symbol\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"legalities\":{\"description\":\"Legality of the set in different formats\",\"properties\":{\"expanded\":{\"type\":\"string\"},\"standard\":{\"type\":\"string\"},\"unlimited\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the set\",\"type\":\"string\"},\"printedTotal\":{\"description\":\"Number of cards printed in the set\",\"type\":\"integer\"},\"ptcgoCode\":{\"description\":\"PTCGO code for the set\",\"type\":\"string\"},\"releaseDate\":{\"description\":\"Release date of the set\",\"format\":\"date\",\"type\":\"string\"},\"series\":{\"description\":\"Series the set belongs to\",\"type\":\"string\"},\"total\":{\"description\":\"Total number of cards in the set including secret rares\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Last updated timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"type\":\"integer\"},\"pageSize\":{\"type\":\"integer\"},\"totalCount\":{\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of sets\"},\"400\":{\"description\":\"Bad request\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Register at the Developer Portal for higher rate limits.\",\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/sets","segments":[{"lit":"sets"}],"select":{"exist":["order_by","page","page_size","q"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /sets/{id}","json":"{\"operationId\":\"getSet\",\"parameters\":[{\"description\":\"The unique identifier for the set\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the set\",\"type\":\"string\"},\"images\":{\"description\":\"Image URLs for the set\",\"properties\":{\"logo\":{\"format\":\"uri\",\"type\":\"string\"},\"symbol\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"legalities\":{\"description\":\"Legality of the set in different formats\",\"properties\":{\"expanded\":{\"type\":\"string\"},\"standard\":{\"type\":\"string\"},\"unlimited\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"description\":\"Name of the set\",\"type\":\"string\"},\"printedTotal\":{\"description\":\"Number of cards printed in the set\",\"type\":\"integer\"},\"ptcgoCode\":{\"description\":\"PTCGO code for the set\",\"type\":\"string\"},\"releaseDate\":{\"description\":\"Release date of the set\",\"format\":\"date\",\"type\":\"string\"},\"series\":{\"description\":\"Series the set belongs to\",\"type\":\"string\"},\"total\":{\"description\":\"Total number of cards in the set including secret rares\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Last updated timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with set details\"},\"404\":{\"description\":\"Set not found\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]},{}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Register at the Developer Portal for higher rate limits.\",\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/sets/{id}","segments":[{"lit":"sets"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"set","name__orig":"set","Name":"Set","name_":"set","name-":"set","NAME":"SET","index$":2}, {"active":true,"entity":"set","key$":"BasicSetFlow","kind":"basic","name":"BasicSetFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"set_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"set_ref01","srcdatavar":"set_ref01_data","suffix":"_dt0"},"match":{"id":"set01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-set_ref01"}}],"index$":1}]}, 'Set')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let set_ref01_data = Object.values(setup.data.existing.set)[0] as any

    // LIST
    const set_ref01_ent = client.Set()
    const set_ref01_match: any = {}

    const set_ref01_list = (await set_ref01_ent.list(set_ref01_match)).map((e: any) => e.data())


    // LOAD
    const set_ref01_match_dt0: any = {}
    set_ref01_match_dt0.id = set_ref01_data.id
    const set_ref01_data_dt0 = (await set_ref01_ent.load(set_ref01_match_dt0)).data()
    assert(set_ref01_data_dt0.id === set_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/set/SetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PokemonTcgSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['set01','set02','set03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEMON_TCG_TEST_SET_ENTID': idmap,
    'POKEMON_TCG_TEST_LIVE': 'FALSE',
    'POKEMON_TCG_TEST_EXPLAIN': 'FALSE',
    'POKEMON_TCG_APIKEY': '',
  })

  idmap = env['POKEMON_TCG_TEST_SET_ENTID']

  const live = 'TRUE' === env.POKEMON_TCG_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEMON_TCG_TEST_SET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PokemonTcgSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
