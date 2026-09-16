# PokemonTcg SDK feature factory

from pokemontcg_sdk.feature.base_feature import PokemonTcgBaseFeature
from pokemontcg_sdk.feature.ratelimit_feature import PokemonTcgRatelimitFeature
from pokemontcg_sdk.feature.retry_feature import PokemonTcgRetryFeature
from pokemontcg_sdk.feature.test_feature import PokemonTcgTestFeature
from pokemontcg_sdk.feature.timeout_feature import PokemonTcgTimeoutFeature


_FEATURES = {
    "base": lambda: PokemonTcgBaseFeature(),
    "ratelimit": lambda: PokemonTcgRatelimitFeature(),
    "retry": lambda: PokemonTcgRetryFeature(),
    "test": lambda: PokemonTcgTestFeature(),
    "timeout": lambda: PokemonTcgTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
