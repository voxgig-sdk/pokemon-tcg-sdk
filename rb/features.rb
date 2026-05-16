# PokemonTcg SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PokemonTcgFeatures
  def self.make_feature(name)
    case name
    when "base"
      PokemonTcgBaseFeature.new
    when "test"
      PokemonTcgTestFeature.new
    else
      PokemonTcgBaseFeature.new
    end
  end
end
