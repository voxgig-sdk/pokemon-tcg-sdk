# Typed models for the PokemonTcg SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Card(TypedDict, total=False):
    artist: str
    attack: list
    cardmarket: dict
    converted_retreat_cost: int
    data: dict
    evolves_from: str
    evolves_to: list
    flavor_text: str
    hp: str
    id: str
    image: dict
    legality: dict
    name: str
    national_pokedex_number: list
    number: str
    rarity: str
    resistance: list
    retreat_cost: list
    rule: list
    set: dict
    subtype: list
    supertype: str
    tcgplayer: dict
    type: list
    weakness: list


class CardLoadMatch(TypedDict):
    id: str


class CardListMatch(TypedDict, total=False):
    artist: str
    attack: list
    cardmarket: dict
    converted_retreat_cost: int
    data: dict
    evolves_from: str
    evolves_to: list
    flavor_text: str
    hp: str
    id: str
    image: dict
    legality: dict
    name: str
    national_pokedex_number: list
    number: str
    rarity: str
    resistance: list
    retreat_cost: list
    rule: list
    set: dict
    subtype: list
    supertype: str
    tcgplayer: dict
    type: list
    weakness: list


class Rarity(TypedDict, total=False):
    data: list


class RarityListMatch(TypedDict, total=False):
    data: list


class Set(TypedDict, total=False):
    data: dict
    id: str
    image: dict
    legality: dict
    name: str
    printed_total: int
    ptcgo_code: str
    release_date: str
    series: str
    total: int
    updated_at: str


class SetLoadMatch(TypedDict):
    id: str


class SetListMatch(TypedDict, total=False):
    data: dict
    id: str
    image: dict
    legality: dict
    name: str
    printed_total: int
    ptcgo_code: str
    release_date: str
    series: str
    total: int
    updated_at: str


class Subtype(TypedDict, total=False):
    data: list


class SubtypeListMatch(TypedDict, total=False):
    data: list


class Supertype(TypedDict, total=False):
    data: list


class SupertypeListMatch(TypedDict, total=False):
    data: list


class Type(TypedDict, total=False):
    data: list


class TypeListMatch(TypedDict, total=False):
    data: list
