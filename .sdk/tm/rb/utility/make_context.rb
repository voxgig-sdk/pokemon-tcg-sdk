# PokemonTcg SDK utility: make_context
require_relative '../core/context'
module PokemonTcgUtilities
  MakeContext = ->(ctxmap, basectx) {
    PokemonTcgContext.new(ctxmap, basectx)
  }
end
