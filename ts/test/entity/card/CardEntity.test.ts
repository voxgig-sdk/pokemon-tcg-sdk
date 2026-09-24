

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


describe('CardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEMON_TCG_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEMON_TCG_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokemonTcgSDK.test()
    const ent = testsdk.Card()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEMON_TCG_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'card.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"artist":{"a":true,"h":"Artist","n":"artist","r":false,"sh":"Artist who illustrated the card","t":"`$STRING`","key$":"artist","index$":0},"attacks":{"a":true,"h":"Attacks","n":"attacks","r":false,"sh":"Attacks the Pokémon can perform","t":"`$ARRAY`","key$":"attacks","index$":1},"cardmarket":{"a":true,"h":"Cardmarket","n":"cardmarket","r":false,"sh":"Cardmarket information","t":"`$OBJECT`","key$":"cardmarket","index$":2},"convertedRetreatCost":{"a":true,"h":"Converted Retreat Cost","n":"convertedRetreatCost","r":false,"sh":"Numeric value of retreat cost","t":"`$INTEGER`","key$":"convertedRetreatCost","index$":3},"evolvesFrom":{"a":true,"h":"Evolves From","n":"evolvesFrom","r":false,"sh":"The Pokémon this card evolves from","t":"`$STRING`","key$":"evolvesFrom","index$":4},"evolvesTo":{"a":true,"h":"Evolves To","n":"evolvesTo","r":false,"sh":"The Pokémon this card evolves to","t":"`$ARRAY`","key$":"evolvesTo","index$":5},"flavorText":{"a":true,"h":"Flavor Text","n":"flavorText","r":false,"sh":"Flavor text on the card","t":"`$STRING`","key$":"flavorText","index$":6},"hp":{"a":true,"h":"Hp","n":"hp","r":false,"sh":"Hit points of the Pokémon","t":"`$STRING`","key$":"hp","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the card","t":"`$STRING`","key$":"id","index$":8},"images":{"a":true,"h":"Images","n":"images","r":false,"sh":"Image URLs for the card","t":"`$OBJECT`","key$":"images","index$":9},"legalities":{"a":true,"h":"Legalities","n":"legalities","r":false,"sh":"Legality of the card in different formats","t":"`$OBJECT`","key$":"legalities","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the card","t":"`$STRING`","key$":"name","index$":11},"nationalPokedexNumbers":{"a":true,"h":"National Pokedex Numbers","n":"nationalPokedexNumbers","r":false,"sh":"National Pokédex numbers","t":"`$ARRAY`","key$":"nationalPokedexNumbers","index$":12},"number":{"a":true,"h":"Number","n":"number","r":false,"sh":"Card number within the set","t":"`$STRING`","key$":"number","index$":13},"rarity":{"a":true,"h":"Rarity","n":"rarity","r":false,"sh":"Rarity of the card","t":"`$STRING`","key$":"rarity","index$":14},"resistances":{"a":true,"h":"Resistances","n":"resistances","r":false,"sh":"Resistances of the Pokémon","t":"`$ARRAY`","key$":"resistances","index$":15},"retreatCost":{"a":true,"h":"Retreat Cost","n":"retreatCost","r":false,"sh":"Retreat cost of the Pokémon","t":"`$ARRAY`","key$":"retreatCost","index$":16},"rules":{"a":true,"h":"Rules","n":"rules","r":false,"sh":"Special rules for the card","t":"`$ARRAY`","key$":"rules","index$":17},"set":{"a":true,"h":"Set","n":"set","r":false,"sh":"Set information for the card","t":"`$OBJECT`","key$":"set","index$":18},"subtypes":{"a":true,"h":"Subtypes","n":"subtypes","r":false,"sh":"Subtypes of the card","t":"`$ARRAY`","key$":"subtypes","index$":19},"supertype":{"a":true,"h":"Supertype","n":"supertype","r":false,"sh":"Supertype of the card (e.g., Pokémon, Trainer, Energy)","t":"`$STRING`","key$":"supertype","index$":20},"tcgplayer":{"a":true,"h":"Tcgplayer","n":"tcgplayer","r":false,"sh":"TCGPlayer market information","t":"`$OBJECT`","key$":"tcgplayer","index$":21},"types":{"a":true,"h":"Types","n":"types","r":false,"sh":"Energy types of the card","t":"`$ARRAY`","key$":"types","index$":22},"weaknesses":{"a":true,"h":"Weaknesses","n":"weaknesses","r":false,"sh":"Weaknesses of the Pokémon","t":"`$ARRAY`","key$":"weaknesses","index$":23}},"id":{"field":"id","name":"id"},"name":"card","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cards","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":250,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"select","or":"select","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/cards","q":{"exist":["order_by","page","page_size","q","select"]},"r":{},"s":[{"lit":"cards"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /cards/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/cards/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"cards"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"card","name__orig":"card","Name":"Card","name_":"card","name-":"card","NAME":"CARD","index$":0}, {"active":true,"entity":"card","key$":"BasicCardFlow","kind":"basic","name":"BasicCardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"card_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"card_ref01","srcdatavar":"card_ref01_data","suffix":"_dt0"},"m":{"id":"card01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-card_ref01"}}],"index$":1}]}, 'Card', {"GET /cards":{"protocol":"http","operationId":"searchCards","responses":{"200":{"description":"Successful response with list of cards","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"items":{"properties":{"artist":{"description":"Artist who illustrated the card","type":"string","key$":"artist"},"attacks":{"description":"Attacks the Pokémon can perform","items":{"properties":{"convertedEnergyCost":{"type":"integer"},"cost":{"items":{"type":"string"},"type":"array"},"damage":{"type":"string"},"name":{"type":"string"},"text":{"type":"string"}},"type":"object"},"type":"array","key$":"attacks"},"cardmarket":{"description":"Cardmarket information","type":"object","key$":"cardmarket"},"convertedRetreatCost":{"description":"Numeric value of retreat cost","type":"integer","key$":"convertedRetreatCost"},"evolvesFrom":{"description":"The Pokémon this card evolves from","type":"string","key$":"evolvesFrom"},"evolvesTo":{"description":"The Pokémon this card evolves to","items":{"type":"string"},"type":"array","key$":"evolvesTo"},"flavorText":{"description":"Flavor text on the card","type":"string","key$":"flavorText"},"hp":{"description":"Hit points of the Pokémon","type":"string","key$":"hp"},"id":{"description":"Unique identifier for the card","type":"string","key$":"id"},"images":{"description":"Image URLs for the card","properties":{"large":{"format":"uri","type":"string"},"small":{"format":"uri","type":"string"}},"type":"object","key$":"images"},"legalities":{"description":"Legality of the card in different formats","properties":{"expanded":{"type":"string"},"standard":{"type":"string"},"unlimited":{"type":"string"}},"type":"object","key$":"legalities"},"name":{"description":"Name of the card","type":"string","key$":"name"},"nationalPokedexNumbers":{"description":"National Pokédex numbers","items":{"type":"integer"},"type":"array","key$":"nationalPokedexNumbers"},"number":{"description":"Card number within the set","type":"string","key$":"number"},"rarity":{"description":"Rarity of the card","type":"string","key$":"rarity"},"resistances":{"description":"Resistances of the Pokémon","items":{"properties":{"type":{"type":"string"},"value":{"type":"string"}},"type":"object"},"type":"array","key$":"resistances"},"retreatCost":{"description":"Retreat cost of the Pokémon","items":{"type":"string"},"type":"array","key$":"retreatCost"},"rules":{"description":"Special rules for the card","items":{"type":"string"},"type":"array","key$":"rules"},"set":{"description":"Set information for the card","properties":{"id":{"description":"Unique identifier for the set","type":"string"},"images":{"description":"Image URLs for the set","properties":{"logo":{"format":"uri","type":"string"},"symbol":{"format":"uri","type":"string"}},"type":"object"},"legalities":{"description":"Legality of the set in different formats","properties":{"expanded":{"type":"string"},"standard":{"type":"string"},"unlimited":{"type":"string"}},"type":"object"},"name":{"description":"Name of the set","type":"string"},"printedTotal":{"description":"Number of cards printed in the set","type":"integer"},"ptcgoCode":{"description":"PTCGO code for the set","type":"string"},"releaseDate":{"description":"Release date of the set","format":"date","type":"string"},"series":{"description":"Series the set belongs to","type":"string"},"total":{"description":"Total number of cards in the set including secret rares","type":"integer"},"updatedAt":{"description":"Last updated timestamp","format":"date-time","type":"string"}},"type":"object","x-ref":"#/components/schemas/Set","key$":"set"},"subtypes":{"description":"Subtypes of the card","items":{"type":"string"},"type":"array","key$":"subtypes"},"supertype":{"description":"Supertype of the card (e.g., Pokémon, Trainer, Energy)","type":"string","key$":"supertype"},"tcgplayer":{"description":"TCGPlayer market information","type":"object","key$":"tcgplayer"},"types":{"description":"Energy types of the card","items":{"type":"string"},"type":"array","key$":"types"},"weaknesses":{"description":"Weaknesses of the Pokémon","items":{"properties":{"type":{"type":"string"},"value":{"type":"string"}},"type":"object"},"type":"array","key$":"weaknesses"}},"type":"object","x-ref":"#/components/schemas/Card","index$":0},"key$":"data","type":"array"},"page":{"key$":"page","type":"integer"},"pageSize":{"key$":"pageSize","type":"integer"},"count":{"key$":"count","type":"integer"},"totalCount":{"key$":"totalCount","type":"integer"}}}}}},"400":{"description":"Bad request"},"429":{"description":"Rate limit exceeded"},"500":{"description":"Internal server error"}},"parameters":[{"name":"q","in":"query","description":"Query string for searching cards (e.g., 'name:charizard', 'types:fire')","required":false,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1},"index$":1},{"name":"pageSize","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","default":250,"maximum":250},"index$":2},{"name":"orderBy","in":"query","description":"Field to order results by","required":false,"schema":{"type":"string"},"index$":3},{"name":"select","in":"query","description":"Comma-separated list of fields to return","required":false,"schema":{"type":"string"},"index$":4}],"security":[{"ApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-Api-Key","description":"API key for authentication. Register at the Developer Portal for higher rate limits."}}},"GET /cards/{id}":{"protocol":"http","operationId":"getCard","responses":{"200":{"description":"Successful response with card details","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object","properties":{"id":{"description":"Unique identifier for the card","type":"string","key$":"id"},"name":{"description":"Name of the card","type":"string","key$":"name"},"supertype":{"description":"Supertype of the card (e.g., Pokémon, Trainer, Energy)","type":"string","key$":"supertype"},"subtypes":{"description":"Subtypes of the card","items":{"type":"string"},"type":"array","key$":"subtypes"},"hp":{"description":"Hit points of the Pokémon","type":"string","key$":"hp"},"types":{"description":"Energy types of the card","items":{"type":"string"},"type":"array","key$":"types"},"evolvesFrom":{"description":"The Pokémon this card evolves from","type":"string","key$":"evolvesFrom"},"evolvesTo":{"description":"The Pokémon this card evolves to","items":{"type":"string"},"type":"array","key$":"evolvesTo"},"rules":{"description":"Special rules for the card","items":{"type":"string"},"type":"array","key$":"rules"},"attacks":{"description":"Attacks the Pokémon can perform","items":{"properties":{"convertedEnergyCost":{"type":"integer"},"cost":{"items":{"type":"string"},"type":"array"},"damage":{"type":"string"},"name":{"type":"string"},"text":{"type":"string"}},"type":"object"},"type":"array","key$":"attacks"},"weaknesses":{"description":"Weaknesses of the Pokémon","items":{"properties":{"type":{"type":"string"},"value":{"type":"string"}},"type":"object"},"type":"array","key$":"weaknesses"},"resistances":{"description":"Resistances of the Pokémon","items":{"properties":{"type":{"type":"string"},"value":{"type":"string"}},"type":"object"},"type":"array","key$":"resistances"},"retreatCost":{"description":"Retreat cost of the Pokémon","items":{"type":"string"},"type":"array","key$":"retreatCost"},"convertedRetreatCost":{"description":"Numeric value of retreat cost","type":"integer","key$":"convertedRetreatCost"},"set":{"description":"Set information for the card","properties":{"id":{"description":"Unique identifier for the set","type":"string"},"images":{"description":"Image URLs for the set","properties":{"logo":{"format":"uri","type":"string"},"symbol":{"format":"uri","type":"string"}},"type":"object"},"legalities":{"description":"Legality of the set in different formats","properties":{"expanded":{"type":"string"},"standard":{"type":"string"},"unlimited":{"type":"string"}},"type":"object"},"name":{"description":"Name of the set","type":"string"},"printedTotal":{"description":"Number of cards printed in the set","type":"integer"},"ptcgoCode":{"description":"PTCGO code for the set","type":"string"},"releaseDate":{"description":"Release date of the set","format":"date","type":"string"},"series":{"description":"Series the set belongs to","type":"string"},"total":{"description":"Total number of cards in the set including secret rares","type":"integer"},"updatedAt":{"description":"Last updated timestamp","format":"date-time","type":"string"}},"type":"object","x-ref":"#/components/schemas/Set","key$":"set"},"number":{"description":"Card number within the set","type":"string","key$":"number"},"artist":{"description":"Artist who illustrated the card","type":"string","key$":"artist"},"rarity":{"description":"Rarity of the card","type":"string","key$":"rarity"},"flavorText":{"description":"Flavor text on the card","type":"string","key$":"flavorText"},"nationalPokedexNumbers":{"description":"National Pokédex numbers","items":{"type":"integer"},"type":"array","key$":"nationalPokedexNumbers"},"legalities":{"description":"Legality of the card in different formats","properties":{"expanded":{"type":"string"},"standard":{"type":"string"},"unlimited":{"type":"string"}},"type":"object","key$":"legalities"},"images":{"description":"Image URLs for the card","properties":{"large":{"format":"uri","type":"string"},"small":{"format":"uri","type":"string"}},"type":"object","key$":"images"},"tcgplayer":{"description":"TCGPlayer market information","type":"object","key$":"tcgplayer"},"cardmarket":{"description":"Cardmarket information","type":"object","key$":"cardmarket"}},"x-ref":"#/components/schemas/Card","index$":0}}}}}},"404":{"description":"Card not found"},"429":{"description":"Rate limit exceeded"},"500":{"description":"Internal server error"}},"parameters":[{"name":"id","in":"path","description":"The unique identifier for the card","required":true,"schema":{"type":"string"},"index$":0}],"security":[{"ApiKeyAuth":[]},{}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-Api-Key","description":"API key for authentication. Register at the Developer Portal for higher rate limits."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let card_ref01_data = Object.values(setup.data.existing.card)[0] as any

    // LIST
    const card_ref01_ent = client.Card()
    const card_ref01_match: any = {}

    const card_ref01_list = (await card_ref01_ent.list(card_ref01_match)).map((e: any) => e.data())


    // LOAD
    const card_ref01_match_dt0: any = {}
    card_ref01_match_dt0.id = card_ref01_data.id
    const card_ref01_data_dt0 = (await card_ref01_ent.load(card_ref01_match_dt0)).data()
    assert(card_ref01_data_dt0.id === card_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/card/CardTestData.json')

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
    ['card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEMON_TCG_TEST_CARD_ENTID': idmap,
    'POKEMON_TCG_TEST_LIVE': 'FALSE',
    'POKEMON_TCG_TEST_EXPLAIN': 'FALSE',
    'POKEMON_TCG_APIKEY': '',
  })

  idmap = env['POKEMON_TCG_TEST_CARD_ENTID']

  const live = 'TRUE' === env.POKEMON_TCG_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEMON_TCG_TEST_CARD_ENTID']
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
  
