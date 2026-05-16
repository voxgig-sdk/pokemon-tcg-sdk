<?php
declare(strict_types=1);

// PokemonTcg SDK exists test

require_once __DIR__ . '/../pokemontcg_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = PokemonTcgSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
