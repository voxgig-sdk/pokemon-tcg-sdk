<?php
declare(strict_types=1);

// PokemonTcg SDK utility: result_body

class PokemonTcgResultBody
{
    public static function call(PokemonTcgContext $ctx): ?PokemonTcgResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
