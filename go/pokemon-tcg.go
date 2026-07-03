package voxgigpokemontcgsdk

import (
	"github.com/voxgig-sdk/pokemon-tcg-sdk/go/core"
	"github.com/voxgig-sdk/pokemon-tcg-sdk/go/entity"
	"github.com/voxgig-sdk/pokemon-tcg-sdk/go/feature"
	_ "github.com/voxgig-sdk/pokemon-tcg-sdk/go/utility"
)

// Type aliases preserve external API.
type PokemonTcgSDK = core.PokemonTcgSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type PokemonTcgEntity = core.PokemonTcgEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type PokemonTcgError = core.PokemonTcgError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCardEntityFunc = func(client *core.PokemonTcgSDK, entopts map[string]any) core.PokemonTcgEntity {
		return entity.NewCardEntity(client, entopts)
	}
	core.NewRarityEntityFunc = func(client *core.PokemonTcgSDK, entopts map[string]any) core.PokemonTcgEntity {
		return entity.NewRarityEntity(client, entopts)
	}
	core.NewSetEntityFunc = func(client *core.PokemonTcgSDK, entopts map[string]any) core.PokemonTcgEntity {
		return entity.NewSetEntity(client, entopts)
	}
	core.NewSubtypeEntityFunc = func(client *core.PokemonTcgSDK, entopts map[string]any) core.PokemonTcgEntity {
		return entity.NewSubtypeEntity(client, entopts)
	}
	core.NewSupertypeEntityFunc = func(client *core.PokemonTcgSDK, entopts map[string]any) core.PokemonTcgEntity {
		return entity.NewSupertypeEntity(client, entopts)
	}
	core.NewTypeEntityFunc = func(client *core.PokemonTcgSDK, entopts map[string]any) core.PokemonTcgEntity {
		return entity.NewTypeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewPokemonTcgSDK = core.NewPokemonTcgSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewPokemonTcgSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *PokemonTcgSDK  { return NewPokemonTcgSDK(nil) }
func Test() *PokemonTcgSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
