# PokemonTcg SDK utility: make_context

from core.context import PokemonTcgContext


def make_context_util(ctxmap, basectx):
    return PokemonTcgContext(ctxmap, basectx)
