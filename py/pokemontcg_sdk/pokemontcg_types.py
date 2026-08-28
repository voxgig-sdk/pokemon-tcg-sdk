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
    attacks: list
    cardmarket: dict
    convertedRetreatCost: int
    evolvesFrom: str
    evolvesTo: list
    flavorText: str
    hp: str
    id: str
    images: dict
    legalities: dict
    name: str
    nationalPokedexNumbers: list
    number: str
    rarity: str
    resistances: list
    retreatCost: list
    rules: list
    set: dict
    subtypes: list
    supertype: str
    tcgplayer: dict
    types: list
    weaknesses: list


class CardLoadMatch(TypedDict):
    id: str


class CardListMatch(TypedDict, total=False):
    order_by: str
    page: int
    page_size: int
    q: str
    select: str


class Rarity(TypedDict, total=False):
    data: list


class RarityListMatch(TypedDict, total=False):
    data: list


class Set(TypedDict, total=False):
    id: str
    images: dict
    legalities: dict
    name: str
    printedTotal: int
    ptcgoCode: str
    releaseDate: str
    series: str
    total: int
    updatedAt: str


class SetLoadMatch(TypedDict):
    id: str


class SetListMatch(TypedDict, total=False):
    order_by: str
    page: int
    page_size: int
    q: str


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
