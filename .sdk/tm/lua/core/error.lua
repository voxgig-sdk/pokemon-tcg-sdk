-- PokemonTcg SDK error

local json = require("dkjson")

local PokemonTcgError = {}
PokemonTcgError.__index = PokemonTcgError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function PokemonTcgError.new(code, msg, ctx)
  local self = setmetatable({}, PokemonTcgError)
  self.is_sdk_error = true
  self.sdk = "PokemonTcg"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function PokemonTcgError:context()
  return CONTEXT[self]
end


function PokemonTcgError:error()
  return self.msg
end


function PokemonTcgError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function PokemonTcgError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function PokemonTcgError:to_json()
  return json.encode(self:to_table())
end


function PokemonTcgError:__tostring()
  return self.msg
end


function PokemonTcgError.__tojson(self)
  return self:to_json()
end


return PokemonTcgError
