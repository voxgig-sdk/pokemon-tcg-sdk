// Typed models for the PokemonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Card is the typed data model for the card entity.
type Card struct {
	Artist *string `json:"artist,omitempty"`
	Attack *[]any `json:"attack,omitempty"`
	Cardmarket *map[string]any `json:"cardmarket,omitempty"`
	ConvertedRetreatCost *int `json:"converted_retreat_cost,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	EvolvesFrom *string `json:"evolves_from,omitempty"`
	EvolvesTo *[]any `json:"evolves_to,omitempty"`
	FlavorText *string `json:"flavor_text,omitempty"`
	Hp *string `json:"hp,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Legality *map[string]any `json:"legality,omitempty"`
	Name *string `json:"name,omitempty"`
	NationalPokedexNumber *[]any `json:"national_pokedex_number,omitempty"`
	Number *string `json:"number,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Resistance *[]any `json:"resistance,omitempty"`
	RetreatCost *[]any `json:"retreat_cost,omitempty"`
	Rule *[]any `json:"rule,omitempty"`
	Set *map[string]any `json:"set,omitempty"`
	Subtype *[]any `json:"subtype,omitempty"`
	Supertype *string `json:"supertype,omitempty"`
	Tcgplayer *map[string]any `json:"tcgplayer,omitempty"`
	Type *[]any `json:"type,omitempty"`
	Weakness *[]any `json:"weakness,omitempty"`
}

// CardLoadMatch is the typed request payload for Card.LoadTyped.
type CardLoadMatch struct {
	Id string `json:"id"`
}

// CardListMatch is the typed request payload for Card.ListTyped.
type CardListMatch struct {
	Artist *string `json:"artist,omitempty"`
	Attack *[]any `json:"attack,omitempty"`
	Cardmarket *map[string]any `json:"cardmarket,omitempty"`
	ConvertedRetreatCost *int `json:"converted_retreat_cost,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	EvolvesFrom *string `json:"evolves_from,omitempty"`
	EvolvesTo *[]any `json:"evolves_to,omitempty"`
	FlavorText *string `json:"flavor_text,omitempty"`
	Hp *string `json:"hp,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Legality *map[string]any `json:"legality,omitempty"`
	Name *string `json:"name,omitempty"`
	NationalPokedexNumber *[]any `json:"national_pokedex_number,omitempty"`
	Number *string `json:"number,omitempty"`
	Rarity *string `json:"rarity,omitempty"`
	Resistance *[]any `json:"resistance,omitempty"`
	RetreatCost *[]any `json:"retreat_cost,omitempty"`
	Rule *[]any `json:"rule,omitempty"`
	Set *map[string]any `json:"set,omitempty"`
	Subtype *[]any `json:"subtype,omitempty"`
	Supertype *string `json:"supertype,omitempty"`
	Tcgplayer *map[string]any `json:"tcgplayer,omitempty"`
	Type *[]any `json:"type,omitempty"`
	Weakness *[]any `json:"weakness,omitempty"`
}

// Rarity is the typed data model for the rarity entity.
type Rarity struct {
	Data *[]any `json:"data,omitempty"`
}

// RarityListMatch is the typed request payload for Rarity.ListTyped.
type RarityListMatch struct {
	Data *[]any `json:"data,omitempty"`
}

// Set is the typed data model for the set entity.
type Set struct {
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Legality *map[string]any `json:"legality,omitempty"`
	Name *string `json:"name,omitempty"`
	PrintedTotal *int `json:"printed_total,omitempty"`
	PtcgoCode *string `json:"ptcgo_code,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Series *string `json:"series,omitempty"`
	Total *int `json:"total,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SetLoadMatch is the typed request payload for Set.LoadTyped.
type SetLoadMatch struct {
	Id string `json:"id"`
}

// SetListMatch is the typed request payload for Set.ListTyped.
type SetListMatch struct {
	Data *map[string]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	Legality *map[string]any `json:"legality,omitempty"`
	Name *string `json:"name,omitempty"`
	PrintedTotal *int `json:"printed_total,omitempty"`
	PtcgoCode *string `json:"ptcgo_code,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Series *string `json:"series,omitempty"`
	Total *int `json:"total,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Subtype is the typed data model for the subtype entity.
type Subtype struct {
	Data *[]any `json:"data,omitempty"`
}

// SubtypeListMatch is the typed request payload for Subtype.ListTyped.
type SubtypeListMatch struct {
	Data *[]any `json:"data,omitempty"`
}

// Supertype is the typed data model for the supertype entity.
type Supertype struct {
	Data *[]any `json:"data,omitempty"`
}

// SupertypeListMatch is the typed request payload for Supertype.ListTyped.
type SupertypeListMatch struct {
	Data *[]any `json:"data,omitempty"`
}

// Type is the typed data model for the type entity.
type Type struct {
	Data *[]any `json:"data,omitempty"`
}

// TypeListMatch is the typed request payload for Type.ListTyped.
type TypeListMatch struct {
	Data *[]any `json:"data,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
