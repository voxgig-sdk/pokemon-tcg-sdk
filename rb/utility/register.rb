# PokemonTcg SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PokemonTcgUtility.registrar = ->(u) {
  u.clean = PokemonTcgUtilities::Clean
  u.done = PokemonTcgUtilities::Done
  u.make_error = PokemonTcgUtilities::MakeError
  u.feature_add = PokemonTcgUtilities::FeatureAdd
  u.feature_hook = PokemonTcgUtilities::FeatureHook
  u.feature_init = PokemonTcgUtilities::FeatureInit
  u.fetcher = PokemonTcgUtilities::Fetcher
  u.make_fetch_def = PokemonTcgUtilities::MakeFetchDef
  u.make_context = PokemonTcgUtilities::MakeContext
  u.make_options = PokemonTcgUtilities::MakeOptions
  u.make_request = PokemonTcgUtilities::MakeRequest
  u.make_response = PokemonTcgUtilities::MakeResponse
  u.make_result = PokemonTcgUtilities::MakeResult
  u.make_point = PokemonTcgUtilities::MakePoint
  u.make_spec = PokemonTcgUtilities::MakeSpec
  u.make_url = PokemonTcgUtilities::MakeUrl
  u.param = PokemonTcgUtilities::Param
  u.prepare_auth = PokemonTcgUtilities::PrepareAuth
  u.prepare_body = PokemonTcgUtilities::PrepareBody
  u.prepare_headers = PokemonTcgUtilities::PrepareHeaders
  u.prepare_method = PokemonTcgUtilities::PrepareMethod
  u.prepare_params = PokemonTcgUtilities::PrepareParams
  u.prepare_path = PokemonTcgUtilities::PreparePath
  u.prepare_query = PokemonTcgUtilities::PrepareQuery
  u.result_basic = PokemonTcgUtilities::ResultBasic
  u.result_body = PokemonTcgUtilities::ResultBody
  u.result_headers = PokemonTcgUtilities::ResultHeaders
  u.transform_request = PokemonTcgUtilities::TransformRequest
  u.transform_response = PokemonTcgUtilities::TransformResponse
}
