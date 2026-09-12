import { PokemonTcgEntityBase } from '../PokemonTcgEntityBase';
import type { PokemonTcgSDK } from '../PokemonTcgSDK';
import type { Control } from '../types';
import type { Rarity, RarityListMatch } from '../PokemonTcgTypes';
declare class RarityEntity extends PokemonTcgEntityBase<Rarity> {
    constructor(client: PokemonTcgSDK, entopts: any);
    make(this: RarityEntity): RarityEntity;
    list(this: any, reqmatch?: RarityListMatch, ctrl?: Control): Promise<RarityEntity[]>;
}
export { RarityEntity };
