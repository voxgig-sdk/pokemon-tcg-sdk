# PokemonTcg SDK utility: make_context

from projectname_sdk.core.context import PokemonTcgContext


def make_context_util(ctxmap, basectx):
    return PokemonTcgContext(ctxmap, basectx)
