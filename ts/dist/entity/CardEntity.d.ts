import { PokemonTcgEntityBase } from '../PokemonTcgEntityBase';
import type { PokemonTcgSDK } from '../PokemonTcgSDK';
import type { Control } from '../types';
import type { Card, CardLoadMatch, CardListMatch } from '../PokemonTcgTypes';
declare class CardEntity extends PokemonTcgEntityBase<Card> {
    constructor(client: PokemonTcgSDK, entopts: any);
    make(this: CardEntity): CardEntity;
    load(this: any, reqmatch?: CardLoadMatch, ctrl?: Control): Promise<CardEntity>;
    list(this: any, reqmatch?: CardListMatch, ctrl?: Control): Promise<CardEntity[]>;
}
export { CardEntity };
