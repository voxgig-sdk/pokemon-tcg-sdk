-- Typed models for the PokemonTcg SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Card
---@field artist? string
---@field attack? table
---@field cardmarket? table
---@field converted_retreat_cost? number
---@field data? table
---@field evolves_from? string
---@field evolves_to? table
---@field flavor_text? string
---@field hp? string
---@field id? string
---@field image? table
---@field legality? table
---@field name? string
---@field national_pokedex_number? table
---@field number? string
---@field rarity? string
---@field resistance? table
---@field retreat_cost? table
---@field rule? table
---@field set? table
---@field subtype? table
---@field supertype? string
---@field tcgplayer? table
---@field type? table
---@field weakness? table

---@class CardLoadMatch
---@field id string

---@class CardListMatch
---@field artist? string
---@field attack? table
---@field cardmarket? table
---@field converted_retreat_cost? number
---@field data? table
---@field evolves_from? string
---@field evolves_to? table
---@field flavor_text? string
---@field hp? string
---@field id? string
---@field image? table
---@field legality? table
---@field name? string
---@field national_pokedex_number? table
---@field number? string
---@field rarity? string
---@field resistance? table
---@field retreat_cost? table
---@field rule? table
---@field set? table
---@field subtype? table
---@field supertype? string
---@field tcgplayer? table
---@field type? table
---@field weakness? table

---@class Rarity
---@field data? table

---@class RarityListMatch
---@field data? table

---@class Set
---@field data? table
---@field id? string
---@field image? table
---@field legality? table
---@field name? string
---@field printed_total? number
---@field ptcgo_code? string
---@field release_date? string
---@field series? string
---@field total? number
---@field updated_at? string

---@class SetLoadMatch
---@field id string

---@class SetListMatch
---@field data? table
---@field id? string
---@field image? table
---@field legality? table
---@field name? string
---@field printed_total? number
---@field ptcgo_code? string
---@field release_date? string
---@field series? string
---@field total? number
---@field updated_at? string

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
