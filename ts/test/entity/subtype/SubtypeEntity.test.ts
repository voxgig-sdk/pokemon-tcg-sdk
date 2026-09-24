

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SubtypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEMON_TCG_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEMON_TCG_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokemonTcgSDK.test()
    const ent = testsdk.Subtype()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEMON_TCG_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subtype.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":0}},"name":"subtype","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subtypes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/subtypes","q":{},"r":{},"s":[{"lit":"subtypes"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"subtype","name__orig":"subtype","Name":"Subtype","name_":"subtype","name-":"subtype","NAME":"SUBTYPE","index$":3}, {"active":true,"entity":"subtype","key$":"BasicSubtypeFlow","kind":"basic","name":"BasicSubtypeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"subtype_ref01"}}],"index$":0}]}, 'Subtype', {"GET /subtypes":{"protocol":"http","operationId":"getSubtypes","responses":{"200":{"description":"Successful response with list of subtypes","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"items":{"type":"string"},"key$":"data","type":"array"}},"index$":0}}}},"429":{"description":"Rate limit exceeded"},"500":{"description":"Internal server error"}},"parameters":[],"security":[{"ApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-Api-Key","description":"API key for authentication. Register at the Developer Portal for higher rate limits."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subtype_ref01_data = Object.values(setup.data.existing.subtype)[0] as any

    // LIST
    const subtype_ref01_ent = client.Subtype()
    const subtype_ref01_match: any = {}

    const subtype_ref01_list = (await subtype_ref01_ent.list(subtype_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subtype/SubtypeTestData.json')

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
    ['subtype01','subtype02','subtype03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEMON_TCG_TEST_SUBTYPE_ENTID': idmap,
    'POKEMON_TCG_TEST_LIVE': 'FALSE',
    'POKEMON_TCG_TEST_EXPLAIN': 'FALSE',
    'POKEMON_TCG_APIKEY': '',
  })

  idmap = env['POKEMON_TCG_TEST_SUBTYPE_ENTID']

  const live = 'TRUE' === env.POKEMON_TCG_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEMON_TCG_TEST_SUBTYPE_ENTID']
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
  
