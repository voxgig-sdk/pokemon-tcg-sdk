<?php
declare(strict_types=1);

// PokemonTcg SDK utility: feature_add

class PokemonTcgFeatureAdd
{
    public static function call(PokemonTcgContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
