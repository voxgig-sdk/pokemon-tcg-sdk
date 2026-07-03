-- Rarity entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("pokemon-tcg_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("RarityEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Rarity(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = rarity_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"list"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "rarity." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set POKEMONTCG_TEST_RARITY_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local rarity_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.rarity")))
    local rarity_ref01_data = nil
    if #rarity_ref01_data_raw > 0 then
      rarity_ref01_data = helpers.to_map(rarity_ref01_data_raw[1][2])
    end

    -- LIST
    local rarity_ref01_ent = client:Rarity(nil)
    local rarity_ref01_match = {}

    local rarity_ref01_list_result, err = rarity_ref01_ent:list(rarity_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(rarity_ref01_list_result)

  end)
end)

function rarity_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/rarity/RarityTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read rarity test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "rarity01", "rarity02", "rarity03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("POKEMONTCG_TEST_RARITY_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["POKEMONTCG_TEST_RARITY_ENTID"] = idmap,
    ["POKEMONTCG_TEST_LIVE"] = "FALSE",
    ["POKEMONTCG_TEST_EXPLAIN"] = "FALSE",
    ["POKEMONTCG_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["POKEMONTCG_TEST_RARITY_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["POKEMONTCG_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["POKEMONTCG_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["POKEMONTCG_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["POKEMONTCG_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
