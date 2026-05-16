<?php
declare(strict_types=1);

// PokemonTcg SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PokemonTcgMakeContext
{
    public static function call(array $ctxmap, ?PokemonTcgContext $basectx): PokemonTcgContext
    {
        return new PokemonTcgContext($ctxmap, $basectx);
    }
}
