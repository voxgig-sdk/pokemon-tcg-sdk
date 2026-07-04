// PokemonTcg Ts SDK

import { CardEntity } from './entity/CardEntity'
import { RarityEntity } from './entity/RarityEntity'
import { SetEntity } from './entity/SetEntity'
import { SubtypeEntity } from './entity/SubtypeEntity'
import { SupertypeEntity } from './entity/SupertypeEntity'
import { TypeEntity } from './entity/TypeEntity'

export type * from './PokemonTcgTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { PokemonTcgEntityBase } from './PokemonTcgEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class PokemonTcgSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  _card?: CardEntity

  // Idiomatic facade: `client.card.list()` / `client.card.load({ id })`.
  get card(): CardEntity {
    return (this._card ??= new CardEntity(this, undefined))
  }

  /** @deprecated Use `client.card` instead. */
  Card(data?: any) {
    const self = this
    return new CardEntity(self,data)
  }


  _rarity?: RarityEntity

  // Idiomatic facade: `client.rarity.list()` / `client.rarity.load({ id })`.
  get rarity(): RarityEntity {
    return (this._rarity ??= new RarityEntity(this, undefined))
  }

  /** @deprecated Use `client.rarity` instead. */
  Rarity(data?: any) {
    const self = this
    return new RarityEntity(self,data)
  }


  _set?: SetEntity

  // Idiomatic facade: `client.set.list()` / `client.set.load({ id })`.
  get set(): SetEntity {
    return (this._set ??= new SetEntity(this, undefined))
  }

  /** @deprecated Use `client.set` instead. */
  Set(data?: any) {
    const self = this
    return new SetEntity(self,data)
  }


  _subtype?: SubtypeEntity

  // Idiomatic facade: `client.subtype.list()` / `client.subtype.load({ id })`.
  get subtype(): SubtypeEntity {
    return (this._subtype ??= new SubtypeEntity(this, undefined))
  }

  /** @deprecated Use `client.subtype` instead. */
  Subtype(data?: any) {
    const self = this
    return new SubtypeEntity(self,data)
  }


  _supertype?: SupertypeEntity

  // Idiomatic facade: `client.supertype.list()` / `client.supertype.load({ id })`.
  get supertype(): SupertypeEntity {
    return (this._supertype ??= new SupertypeEntity(this, undefined))
  }

  /** @deprecated Use `client.supertype` instead. */
  Supertype(data?: any) {
    const self = this
    return new SupertypeEntity(self,data)
  }


  _type?: TypeEntity

  // Idiomatic facade: `client.type.list()` / `client.type.load({ id })`.
  get type(): TypeEntity {
    return (this._type ??= new TypeEntity(this, undefined))
  }

  /** @deprecated Use `client.type` instead. */
  Type(data?: any) {
    const self = this
    return new TypeEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new PokemonTcgSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return PokemonTcgSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'PokemonTcg' }
  }

  toString() {
    return 'PokemonTcg ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = PokemonTcgSDK


export {
  stdutil,

  BaseFeature,
  PokemonTcgEntityBase,

  PokemonTcgSDK,
  SDK,
}


