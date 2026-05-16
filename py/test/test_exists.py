# ProjectName SDK exists test

import pytest
from pokemontcg_sdk import PokemonTcgSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PokemonTcgSDK.test(None, None)
        assert testsdk is not None
