<?php
declare(strict_types=1);

// PokemonTcg SDK base feature

class PokemonTcgBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(PokemonTcgContext $ctx, array $options): void {}
    public function PostConstruct(PokemonTcgContext $ctx): void {}
    public function PostConstructEntity(PokemonTcgContext $ctx): void {}
    public function SetData(PokemonTcgContext $ctx): void {}
    public function GetData(PokemonTcgContext $ctx): void {}
    public function GetMatch(PokemonTcgContext $ctx): void {}
    public function SetMatch(PokemonTcgContext $ctx): void {}
    public function PrePoint(PokemonTcgContext $ctx): void {}
    public function PreSpec(PokemonTcgContext $ctx): void {}
    public function PreRequest(PokemonTcgContext $ctx): void {}
    public function PreResponse(PokemonTcgContext $ctx): void {}
    public function PreResult(PokemonTcgContext $ctx): void {}
    public function PreDone(PokemonTcgContext $ctx): void {}
    public function PreUnexpected(PokemonTcgContext $ctx): void {}
}
