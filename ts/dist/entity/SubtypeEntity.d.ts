import { PokemonTcgEntityBase } from '../PokemonTcgEntityBase';
import type { PokemonTcgSDK } from '../PokemonTcgSDK';
import type { Control } from '../types';
import type { Subtype, SubtypeListMatch } from '../PokemonTcgTypes';
declare class SubtypeEntity extends PokemonTcgEntityBase<Subtype> {
    constructor(client: PokemonTcgSDK, entopts: any);
    make(this: SubtypeEntity): SubtypeEntity;
    list(this: any, reqmatch?: SubtypeListMatch, ctrl?: Control): Promise<SubtypeEntity[]>;
}
export { SubtypeEntity };
