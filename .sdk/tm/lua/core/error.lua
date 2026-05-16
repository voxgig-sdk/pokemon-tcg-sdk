-- PokemonTcg SDK error

local PokemonTcgError = {}
PokemonTcgError.__index = PokemonTcgError


function PokemonTcgError.new(code, msg, ctx)
  local self = setmetatable({}, PokemonTcgError)
  self.is_sdk_error = true
  self.sdk = "PokemonTcg"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PokemonTcgError:error()
  return self.msg
end


function PokemonTcgError:__tostring()
  return self.msg
end


return PokemonTcgError
