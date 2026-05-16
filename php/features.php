<?php
declare(strict_types=1);

// PokemonTcg SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PokemonTcgFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PokemonTcgBaseFeature();
            case "test":
                return new PokemonTcgTestFeature();
            default:
                return new PokemonTcgBaseFeature();
        }
    }
}
