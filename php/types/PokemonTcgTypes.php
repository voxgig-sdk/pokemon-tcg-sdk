<?php
declare(strict_types=1);

// Typed models for the PokemonTcg SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Card entity data model. */
class Card
{
    public ?string $artist = null;
    public ?array $attack = null;
    public ?array $cardmarket = null;
    public ?int $converted_retreat_cost = null;
    public ?array $data = null;
    public ?string $evolves_from = null;
    public ?array $evolves_to = null;
    public ?string $flavor_text = null;
    public ?string $hp = null;
    public ?string $id = null;
    public ?array $image = null;
    public ?array $legality = null;
    public ?string $name = null;
    public ?array $national_pokedex_number = null;
    public ?string $number = null;
    public ?string $rarity = null;
    public ?array $resistance = null;
    public ?array $retreat_cost = null;
    public ?array $rule = null;
    public ?array $set = null;
    public ?array $subtype = null;
    public ?string $supertype = null;
    public ?array $tcgplayer = null;
    public ?array $type = null;
    public ?array $weakness = null;
}

/** Request payload for Card#load. */
class CardLoadMatch
{
    public string $id;
}

/** Match filter for Card#list (any subset of Card fields). */
class CardListMatch
{
    public ?string $artist = null;
    public ?array $attack = null;
    public ?array $cardmarket = null;
    public ?int $converted_retreat_cost = null;
    public ?array $data = null;
    public ?string $evolves_from = null;
    public ?array $evolves_to = null;
    public ?string $flavor_text = null;
    public ?string $hp = null;
    public ?string $id = null;
    public ?array $image = null;
    public ?array $legality = null;
    public ?string $name = null;
    public ?array $national_pokedex_number = null;
    public ?string $number = null;
    public ?string $rarity = null;
    public ?array $resistance = null;
    public ?array $retreat_cost = null;
    public ?array $rule = null;
    public ?array $set = null;
    public ?array $subtype = null;
    public ?string $supertype = null;
    public ?array $tcgplayer = null;
    public ?array $type = null;
    public ?array $weakness = null;
}

/** Rarity entity data model. */
class Rarity
{
    public ?array $data = null;
}

/** Match filter for Rarity#list (any subset of Rarity fields). */
class RarityListMatch
{
    public ?array $data = null;
}

/** Set entity data model. */
class Set
{
    public ?array $data = null;
    public ?string $id = null;
    public ?array $image = null;
    public ?array $legality = null;
    public ?string $name = null;
    public ?int $printed_total = null;
    public ?string $ptcgo_code = null;
    public ?string $release_date = null;
    public ?string $series = null;
    public ?int $total = null;
    public ?string $updated_at = null;
}

/** Request payload for Set#load. */
class SetLoadMatch
{
    public string $id;
}

/** Match filter for Set#list (any subset of Set fields). */
class SetListMatch
{
    public ?array $data = null;
    public ?string $id = null;
    public ?array $image = null;
    public ?array $legality = null;
    public ?string $name = null;
    public ?int $printed_total = null;
    public ?string $ptcgo_code = null;
    public ?string $release_date = null;
    public ?string $series = null;
    public ?int $total = null;
    public ?string $updated_at = null;
}

/** Subtype entity data model. */
class Subtype
{
    public ?array $data = null;
}

/** Match filter for Subtype#list (any subset of Subtype fields). */
class SubtypeListMatch
{
    public ?array $data = null;
}

/** Supertype entity data model. */
class Supertype
{
    public ?array $data = null;
}

/** Match filter for Supertype#list (any subset of Supertype fields). */
class SupertypeListMatch
{
    public ?array $data = null;
}

/** Type entity data model. */
class Type
{
    public ?array $data = null;
}

/** Match filter for Type#list (any subset of Type fields). */
class TypeListMatch
{
    public ?array $data = null;
}

