<?php
declare(strict_types=1);

// PokemonTcg SDK utility: prepare_body

class PokemonTcgPrepareBody
{
    public static function call(PokemonTcgContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
