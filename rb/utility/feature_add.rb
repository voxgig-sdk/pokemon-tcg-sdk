# PokemonTcg SDK utility: feature_add
module PokemonTcgUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
