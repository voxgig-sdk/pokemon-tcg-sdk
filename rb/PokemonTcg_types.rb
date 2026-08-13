# frozen_string_literal: true

# Typed models for the PokemonTcg SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Card entity data model.
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] attacks
#   @return [Array, nil]
#
# @!attribute [rw] cardmarket
#   @return [Hash, nil]
#
# @!attribute [rw] convertedRetreatCost
#   @return [Integer, nil]
#
# @!attribute [rw] evolvesFrom
#   @return [String, nil]
#
# @!attribute [rw] evolvesTo
#   @return [Array, nil]
#
# @!attribute [rw] flavorText
#   @return [String, nil]
#
# @!attribute [rw] hp
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] legalities
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nationalPokedexNumbers
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] resistances
#   @return [Array, nil]
#
# @!attribute [rw] retreatCost
#   @return [Array, nil]
#
# @!attribute [rw] rules
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [Hash, nil]
#
# @!attribute [rw] subtypes
#   @return [Array, nil]
#
# @!attribute [rw] supertype
#   @return [String, nil]
#
# @!attribute [rw] tcgplayer
#   @return [Hash, nil]
#
# @!attribute [rw] types
#   @return [Array, nil]
#
# @!attribute [rw] weaknesses
#   @return [Array, nil]
Card = Struct.new(
  :artist,
  :attacks,
  :cardmarket,
  :convertedRetreatCost,
  :evolvesFrom,
  :evolvesTo,
  :flavorText,
  :hp,
  :id,
  :images,
  :legalities,
  :name,
  :nationalPokedexNumbers,
  :number,
  :rarity,
  :resistances,
  :retreatCost,
  :rules,
  :set,
  :subtypes,
  :supertype,
  :tcgplayer,
  :types,
  :weaknesses,
  keyword_init: true
)

# Request payload for Card#load.
#
# @!attribute [rw] id
#   @return [String]
CardLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Card#list.
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] attacks
#   @return [Array, nil]
#
# @!attribute [rw] cardmarket
#   @return [Hash, nil]
#
# @!attribute [rw] convertedRetreatCost
#   @return [Integer, nil]
#
# @!attribute [rw] evolvesFrom
#   @return [String, nil]
#
# @!attribute [rw] evolvesTo
#   @return [Array, nil]
#
# @!attribute [rw] flavorText
#   @return [String, nil]
#
# @!attribute [rw] hp
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] legalities
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] nationalPokedexNumbers
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] resistances
#   @return [Array, nil]
#
# @!attribute [rw] retreatCost
#   @return [Array, nil]
#
# @!attribute [rw] rules
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [Hash, nil]
#
# @!attribute [rw] subtypes
#   @return [Array, nil]
#
# @!attribute [rw] supertype
#   @return [String, nil]
#
# @!attribute [rw] tcgplayer
#   @return [Hash, nil]
#
# @!attribute [rw] types
#   @return [Array, nil]
#
# @!attribute [rw] weaknesses
#   @return [Array, nil]
CardListMatch = Struct.new(
  :artist,
  :attacks,
  :cardmarket,
  :convertedRetreatCost,
  :evolvesFrom,
  :evolvesTo,
  :flavorText,
  :hp,
  :id,
  :images,
  :legalities,
  :name,
  :nationalPokedexNumbers,
  :number,
  :rarity,
  :resistances,
  :retreatCost,
  :rules,
  :set,
  :subtypes,
  :supertype,
  :tcgplayer,
  :types,
  :weaknesses,
  keyword_init: true
)

# Rarity entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
Rarity = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Rarity#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
RarityListMatch = Struct.new(
  :data,
  keyword_init: true
)

# Set entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] legalities
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] printedTotal
#   @return [Integer, nil]
#
# @!attribute [rw] ptcgoCode
#   @return [String, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] series
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SetType = Struct.new(
  :id,
  :images,
  :legalities,
  :name,
  :printedTotal,
  :ptcgoCode,
  :releaseDate,
  :series,
  :total,
  :updatedAt,
  keyword_init: true
)

# Request payload for Set#load.
#
# @!attribute [rw] id
#   @return [String]
SetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Set#list.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] legalities
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] printedTotal
#   @return [Integer, nil]
#
# @!attribute [rw] ptcgoCode
#   @return [String, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] series
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updatedAt
#   @return [String, nil]
SetListMatch = Struct.new(
  :id,
  :images,
  :legalities,
  :name,
  :printedTotal,
  :ptcgoCode,
  :releaseDate,
  :series,
  :total,
  :updatedAt,
  keyword_init: true
)

# Subtype entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
Subtype = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Subtype#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
SubtypeListMatch = Struct.new(
  :data,
  keyword_init: true
)

# Supertype entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
Supertype = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Supertype#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
SupertypeListMatch = Struct.new(
  :data,
  keyword_init: true
)

# Type entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
Type = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Type#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
TypeListMatch = Struct.new(
  :data,
  keyword_init: true
)

