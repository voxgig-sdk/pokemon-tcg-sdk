# PokemonTcg SDK utility: prepare_body
require_relative 'media'
module PokemonTcgUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return PokemonTcgUtilities.raw_body(ctx.reqdata) if PokemonTcgUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
