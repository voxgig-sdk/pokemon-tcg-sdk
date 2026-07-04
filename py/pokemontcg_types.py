# Typed models for the PokemonTcg SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Card:
    artist: Optional[str] = None
    attack: Optional[list] = None
    cardmarket: Optional[dict] = None
    converted_retreat_cost: Optional[int] = None
    data: Optional[dict] = None
    evolves_from: Optional[str] = None
    evolves_to: Optional[list] = None
    flavor_text: Optional[str] = None
    hp: Optional[str] = None
    id: Optional[str] = None
    image: Optional[dict] = None
    legality: Optional[dict] = None
    name: Optional[str] = None
    national_pokedex_number: Optional[list] = None
    number: Optional[str] = None
    rarity: Optional[str] = None
    resistance: Optional[list] = None
    retreat_cost: Optional[list] = None
    rule: Optional[list] = None
    set: Optional[dict] = None
    subtype: Optional[list] = None
    supertype: Optional[str] = None
    tcgplayer: Optional[dict] = None
    type: Optional[list] = None
    weakness: Optional[list] = None


@dataclass
class CardLoadMatch:
    id: str


@dataclass
class CardListMatch:
    artist: Optional[str] = None
    attack: Optional[list] = None
    cardmarket: Optional[dict] = None
    converted_retreat_cost: Optional[int] = None
    data: Optional[dict] = None
    evolves_from: Optional[str] = None
    evolves_to: Optional[list] = None
    flavor_text: Optional[str] = None
    hp: Optional[str] = None
    id: Optional[str] = None
    image: Optional[dict] = None
    legality: Optional[dict] = None
    name: Optional[str] = None
    national_pokedex_number: Optional[list] = None
    number: Optional[str] = None
    rarity: Optional[str] = None
    resistance: Optional[list] = None
    retreat_cost: Optional[list] = None
    rule: Optional[list] = None
    set: Optional[dict] = None
    subtype: Optional[list] = None
    supertype: Optional[str] = None
    tcgplayer: Optional[dict] = None
    type: Optional[list] = None
    weakness: Optional[list] = None


@dataclass
class Rarity:
    data: Optional[list] = None


@dataclass
class RarityListMatch:
    data: Optional[list] = None


@dataclass
class Set:
    data: Optional[dict] = None
    id: Optional[str] = None
    image: Optional[dict] = None
    legality: Optional[dict] = None
    name: Optional[str] = None
    printed_total: Optional[int] = None
    ptcgo_code: Optional[str] = None
    release_date: Optional[str] = None
    series: Optional[str] = None
    total: Optional[int] = None
    updated_at: Optional[str] = None


@dataclass
class SetLoadMatch:
    id: str


@dataclass
class SetListMatch:
    data: Optional[dict] = None
    id: Optional[str] = None
    image: Optional[dict] = None
    legality: Optional[dict] = None
    name: Optional[str] = None
    printed_total: Optional[int] = None
    ptcgo_code: Optional[str] = None
    release_date: Optional[str] = None
    series: Optional[str] = None
    total: Optional[int] = None
    updated_at: Optional[str] = None


@dataclass
class Subtype:
    data: Optional[list] = None


@dataclass
class SubtypeListMatch:
    data: Optional[list] = None


@dataclass
class Supertype:
    data: Optional[list] = None


@dataclass
class SupertypeListMatch:
    data: Optional[list] = None


@dataclass
class Type:
    data: Optional[list] = None


@dataclass
class TypeListMatch:
    data: Optional[list] = None

