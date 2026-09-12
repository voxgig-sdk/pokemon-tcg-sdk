import { PokemonTcgEntityBase } from '../PokemonTcgEntityBase';
import type { PokemonTcgSDK } from '../PokemonTcgSDK';
import type { Control } from '../types';
import type { Supertype, SupertypeListMatch } from '../PokemonTcgTypes';
declare class SupertypeEntity extends PokemonTcgEntityBase<Supertype> {
    constructor(client: PokemonTcgSDK, entopts: any);
    make(this: SupertypeEntity): SupertypeEntity;
    list(this: any, reqmatch?: SupertypeListMatch, ctrl?: Control): Promise<SupertypeEntity[]>;
}
export { SupertypeEntity };
