-- Typed models for the PokemonTcg SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Card
---@field artist? string
---@field attacks? table
---@field cardmarket? table
---@field convertedRetreatCost? number
---@field evolvesFrom? string
---@field evolvesTo? table
---@field flavorText? string
---@field hp? string
---@field id? string
---@field images? table
---@field legalities? table
---@field name? string
---@field nationalPokedexNumbers? table
---@field number? string
---@field rarity? string
---@field resistances? table
---@field retreatCost? table
---@field rules? table
---@field set? table
---@field subtypes? table
---@field supertype? string
---@field tcgplayer? table
---@field types? table
---@field weaknesses? table

---@class CardLoadMatch
---@field id string

---@class CardListMatch
---@field order_by? string
---@field page? number
---@field page_size? number
---@field q? string
---@field select? string

---@class Rarity
---@field data? table

---@class RarityListMatch
---@field data? table

---@class Set
---@field id? string
---@field images? table
---@field legalities? table
---@field name? string
---@field printedTotal? number
---@field ptcgoCode? string
---@field releaseDate? string
---@field series? string
---@field total? number
---@field updatedAt? string

---@class SetLoadMatch
---@field id string

---@class SetListMatch
---@field order_by? string
---@field page? number
---@field page_size? number
---@field q? string

---@class Subtype
---@field data? table

---@class SubtypeListMatch
---@field data? table

---@class Supertype
---@field data? table

---@class SupertypeListMatch
---@field data? table

---@class Type
---@field data? table

---@class TypeListMatch
---@field data? table

local M = {}

return M
