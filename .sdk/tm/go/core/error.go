package core

type PokemonTcgError struct {
	IsPokemonTcgError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPokemonTcgError(code string, msg string, ctx *Context) *PokemonTcgError {
	return &PokemonTcgError{
		IsPokemonTcgError: true,
		Sdk:              "PokemonTcg",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PokemonTcgError) Error() string {
	return e.Msg
}
