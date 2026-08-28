// Typed models for the PokemonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Card {
  artist?: string
  attacks?: any[]
  cardmarket?: Record<string, any>
  convertedRetreatCost?: number
  evolvesFrom?: string
  evolvesTo?: any[]
  flavorText?: string
  hp?: string
  id?: string
  images?: Record<string, any>
  legalities?: Record<string, any>
  name?: string
  nationalPokedexNumbers?: any[]
  number?: string
  rarity?: string
  resistances?: any[]
  retreatCost?: any[]
  rules?: any[]
  set?: Record<string, any>
  subtypes?: any[]
  supertype?: string
  tcgplayer?: Record<string, any>
  types?: any[]
  weaknesses?: any[]
}

export interface CardLoadMatch {
  id: string
}

export interface CardListMatch {
  order_by?: string
  page?: number
  page_size?: number
  q?: string
  select?: string
}

export interface Rarity {
  data?: any[]
}

export interface RarityListMatch {
  data?: any[]
}

export interface SetType {
  id?: string
  images?: Record<string, any>
  legalities?: Record<string, any>
  name?: string
  printedTotal?: number
  ptcgoCode?: string
  releaseDate?: string
  series?: string
  total?: number
  updatedAt?: string
}

export interface SetLoadMatch {
  id: string
}

export interface SetListMatch {
  order_by?: string
  page?: number
  page_size?: number
  q?: string
}

export interface Subtype {
  data?: any[]
}

export interface SubtypeListMatch {
  data?: any[]
}

export interface Supertype {
  data?: any[]
}

export interface SupertypeListMatch {
  data?: any[]
}

export interface Type {
  data?: any[]
}

export interface TypeListMatch {
  data?: any[]
}

