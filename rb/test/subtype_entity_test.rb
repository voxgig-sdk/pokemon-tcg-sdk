# Subtype entity test

require "minitest/autorun"
require "json"
require_relative "../PokemonTcg_sdk"
require_relative "runner"

class SubtypeEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = PokemonTcgSDK.test(nil, nil)
    ent = testsdk.Subtype(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "subtype" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = PokemonTcgSDK.test(seed, nil).Subtype(nil).list(nil, nil)
    # list resolves to one entity per record; data_get reads the record.
    assert_equal 2, items.length
    items.each do |item|
      assert item.respond_to?(:data_get)
      assert item.data_get.is_a?(Hash)
    end
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "subtype" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = PokemonTcgSDK.test(seed, nil)
    seen = base.Subtype(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = PokemonTcgConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = PokemonTcgSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.Subtype(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  class FailHook < PokemonTcgBaseFeature
    attr_reader :unexpected

    def initialize
      super()
      @name = "failhook"
      @unexpected = 0
    end

    def PreSpec(ctx)
      raise "subtype hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      PokemonTcgSDK.test(offline, nil).Subtype(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    PokemonTcgSDK.test(offline, nil).Subtype(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = PokemonTcgConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = PokemonTcgSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.Subtype(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    PokemonTcgSDK.test(nil, nil).Subtype(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = PokemonTcgSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.Subtype(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.Subtype(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate_list_response
    cfg = PokemonTcgConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    opts = { "feature" => { "validate" => { "active" => true, "request" => false, "response" => true } } }
    listed = PokemonTcgSDK.test({ "entity" => { "subtype" => { "v1" => {  } } } }, opts).Subtype(nil).list(nil, nil)
    assert_equal ["v1"], listed.map { |ent| ent.data_get["id"] }
  end

  def test_basic_flow
    setup = subtype_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "subtype." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    subtype_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.subtype")))
    subtype_ref01_data = nil
    if subtype_ref01_data_raw.length > 0
      subtype_ref01_data = Helpers.to_map(subtype_ref01_data_raw[0][1])
    end

    # LIST
    subtype_ref01_ent = client.Subtype(nil)
    subtype_ref01_match = {}

    subtype_ref01_list_result = subtype_ref01_ent.list(subtype_ref01_match, nil)
    assert subtype_ref01_list_result.is_a?(Array)

  end
end

def subtype_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "subtype", "SubtypeTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = PokemonTcgSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["subtype01", "subtype02", "subtype03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["POKEMON_TCG_TEST_SUBTYPE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "POKEMON_TCG_TEST_SUBTYPE_ENTID" => idmap,
    "POKEMON_TCG_TEST_LIVE" => "FALSE",
    "POKEMON_TCG_TEST_EXPLAIN" => "FALSE",
    "POKEMON_TCG_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["POKEMON_TCG_TEST_SUBTYPE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["POKEMON_TCG_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["POKEMON_TCG_APIKEY"],
      },
      extra || {},
    ])
    client = PokemonTcgSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["POKEMON_TCG_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["POKEMON_TCG_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
