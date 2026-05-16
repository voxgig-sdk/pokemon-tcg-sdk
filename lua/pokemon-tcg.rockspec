package = "voxgig-sdk-pokemon-tcg"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/pokemon-tcg-sdk.git"
}
description = {
  summary = "PokemonTcg SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["pokemon-tcg_sdk"] = "pokemon-tcg_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
