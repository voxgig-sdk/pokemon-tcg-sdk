package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCardEntityFunc func(client *PokemonTcgSDK, entopts map[string]any) PokemonTcgEntity

var NewRarityEntityFunc func(client *PokemonTcgSDK, entopts map[string]any) PokemonTcgEntity

var NewSetEntityFunc func(client *PokemonTcgSDK, entopts map[string]any) PokemonTcgEntity

var NewSubtypeEntityFunc func(client *PokemonTcgSDK, entopts map[string]any) PokemonTcgEntity

var NewSupertypeEntityFunc func(client *PokemonTcgSDK, entopts map[string]any) PokemonTcgEntity

var NewTypeEntityFunc func(client *PokemonTcgSDK, entopts map[string]any) PokemonTcgEntity

