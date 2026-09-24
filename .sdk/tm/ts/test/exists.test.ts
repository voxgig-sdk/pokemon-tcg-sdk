
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PokemonTcgSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PokemonTcgSDK.test()
    equal(testsdk instanceof PokemonTcgSDK, true,
      'PokemonTcgSDK.test() must return a client synchronously')
  })

})
