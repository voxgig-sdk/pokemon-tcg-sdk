# PokemonTcg SDK feature factory

from pokemontcg_sdk.feature.base_feature import PokemonTcgBaseFeature
from pokemontcg_sdk.feature.test_feature import PokemonTcgTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PokemonTcgBaseFeature(),
        "test": lambda: PokemonTcgTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
