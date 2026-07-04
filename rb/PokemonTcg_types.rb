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
# @!attribute [rw] attack
#   @return [Array, nil]
#
# @!attribute [rw] cardmarket
#   @return [Hash, nil]
#
# @!attribute [rw] converted_retreat_cost
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] evolves_from
#   @return [String, nil]
#
# @!attribute [rw] evolves_to
#   @return [Array, nil]
#
# @!attribute [rw] flavor_text
#   @return [String, nil]
#
# @!attribute [rw] hp
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] legality
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] national_pokedex_number
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] resistance
#   @return [Array, nil]
#
# @!attribute [rw] retreat_cost
#   @return [Array, nil]
#
# @!attribute [rw] rule
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [Hash, nil]
#
# @!attribute [rw] subtype
#   @return [Array, nil]
#
# @!attribute [rw] supertype
#   @return [String, nil]
#
# @!attribute [rw] tcgplayer
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [Array, nil]
#
# @!attribute [rw] weakness
#   @return [Array, nil]
Card = Struct.new(
  :artist,
  :attack,
  :cardmarket,
  :converted_retreat_cost,
  :data,
  :evolves_from,
  :evolves_to,
  :flavor_text,
  :hp,
  :id,
  :image,
  :legality,
  :name,
  :national_pokedex_number,
  :number,
  :rarity,
  :resistance,
  :retreat_cost,
  :rule,
  :set,
  :subtype,
  :supertype,
  :tcgplayer,
  :type,
  :weakness,
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

# Match filter for Card#list (any subset of Card fields).
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] attack
#   @return [Array, nil]
#
# @!attribute [rw] cardmarket
#   @return [Hash, nil]
#
# @!attribute [rw] converted_retreat_cost
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] evolves_from
#   @return [String, nil]
#
# @!attribute [rw] evolves_to
#   @return [Array, nil]
#
# @!attribute [rw] flavor_text
#   @return [String, nil]
#
# @!attribute [rw] hp
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] legality
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] national_pokedex_number
#   @return [Array, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] rarity
#   @return [String, nil]
#
# @!attribute [rw] resistance
#   @return [Array, nil]
#
# @!attribute [rw] retreat_cost
#   @return [Array, nil]
#
# @!attribute [rw] rule
#   @return [Array, nil]
#
# @!attribute [rw] set
#   @return [Hash, nil]
#
# @!attribute [rw] subtype
#   @return [Array, nil]
#
# @!attribute [rw] supertype
#   @return [String, nil]
#
# @!attribute [rw] tcgplayer
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [Array, nil]
#
# @!attribute [rw] weakness
#   @return [Array, nil]
CardListMatch = Struct.new(
  :artist,
  :attack,
  :cardmarket,
  :converted_retreat_cost,
  :data,
  :evolves_from,
  :evolves_to,
  :flavor_text,
  :hp,
  :id,
  :image,
  :legality,
  :name,
  :national_pokedex_number,
  :number,
  :rarity,
  :resistance,
  :retreat_cost,
  :rule,
  :set,
  :subtype,
  :supertype,
  :tcgplayer,
  :type,
  :weakness,
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

# Match filter for Rarity#list (any subset of Rarity fields).
#
# @!attribute [rw] data
#   @return [Array, nil]
RarityListMatch = Struct.new(
  :data,
  keyword_init: true
)

# Set entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] legality
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] printed_total
#   @return [Integer, nil]
#
# @!attribute [rw] ptcgo_code
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] series
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
Set = Struct.new(
  :data,
  :id,
  :image,
  :legality,
  :name,
  :printed_total,
  :ptcgo_code,
  :release_date,
  :series,
  :total,
  :updated_at,
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

# Match filter for Set#list (any subset of Set fields).
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] legality
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] printed_total
#   @return [Integer, nil]
#
# @!attribute [rw] ptcgo_code
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] series
#   @return [String, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SetListMatch = Struct.new(
  :data,
  :id,
  :image,
  :legality,
  :name,
  :printed_total,
  :ptcgo_code,
  :release_date,
  :series,
  :total,
  :updated_at,
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

# Match filter for Subtype#list (any subset of Subtype fields).
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

# Match filter for Supertype#list (any subset of Supertype fields).
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

# Match filter for Type#list (any subset of Type fields).
#
# @!attribute [rw] data
#   @return [Array, nil]
TypeListMatch = Struct.new(
  :data,
  keyword_init: true
)

