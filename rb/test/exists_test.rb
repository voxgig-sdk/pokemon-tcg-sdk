# PokemonTcg SDK exists test

require "minitest/autorun"
require_relative "../PokemonTcg_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PokemonTcgSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
