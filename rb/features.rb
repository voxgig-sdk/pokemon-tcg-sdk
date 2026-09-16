# PokemonTcg SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PokemonTcgFeatures
  def self.make_feature(name)
    case name
    when "base"
      PokemonTcgBaseFeature.new
    when "ratelimit"
      PokemonTcgRatelimitFeature.new
    when "retry"
      PokemonTcgRetryFeature.new
    when "test"
      PokemonTcgTestFeature.new
    when "timeout"
      PokemonTcgTimeoutFeature.new
    else
      PokemonTcgBaseFeature.new
    end
  end
end
