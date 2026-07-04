// Typed models for the PokemonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Card {
  artist?: string
  attack?: any[]
  cardmarket?: Record<string, any>
  converted_retreat_cost?: number
  data?: Record<string, any>
  evolves_from?: string
  evolves_to?: any[]
  flavor_text?: string
  hp?: string
  id?: string
  image?: Record<string, any>
  legality?: Record<string, any>
  name?: string
  national_pokedex_number?: any[]
  number?: string
  rarity?: string
  resistance?: any[]
  retreat_cost?: any[]
  rule?: any[]
  set?: Record<string, any>
  subtype?: any[]
  supertype?: string
  tcgplayer?: Record<string, any>
  type?: any[]
  weakness?: any[]
}

export interface CardLoadMatch {
  id: string
}

export type CardListMatch = Partial<Card>

export interface Rarity {
  data?: any[]
}

export type RarityListMatch = Partial<Rarity>

export interface Set {
  data?: Record<string, any>
  id?: string
  image?: Record<string, any>
  legality?: Record<string, any>
  name?: string
  printed_total?: number
  ptcgo_code?: string
  release_date?: string
  series?: string
  total?: number
  updated_at?: string
}

export interface SetLoadMatch {
  id: string
}

export type SetListMatch = Partial<Set>

export interface Subtype {
  data?: any[]
}

export type SubtypeListMatch = Partial<Subtype>

export interface Supertype {
  data?: any[]
}

export type SupertypeListMatch = Partial<Supertype>

export interface Type {
  data?: any[]
}

export type TypeListMatch = Partial<Type>

