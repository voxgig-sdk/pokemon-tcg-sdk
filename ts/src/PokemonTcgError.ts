
import { Context } from './Context'


class PokemonTcgError extends Error {

  isPokemonTcgError = true

  sdk = 'PokemonTcg'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PokemonTcgError
}

