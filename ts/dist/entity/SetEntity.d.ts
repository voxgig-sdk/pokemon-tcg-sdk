import { PokemonTcgEntityBase } from '../PokemonTcgEntityBase';
import type { PokemonTcgSDK } from '../PokemonTcgSDK';
import type { Control } from '../types';
import type { SetType, SetLoadMatch, SetListMatch } from '../PokemonTcgTypes';
declare class SetEntity extends PokemonTcgEntityBase<SetType> {
    constructor(client: PokemonTcgSDK, entopts: any);
    make(this: SetEntity): SetEntity;
    load(this: any, reqmatch?: SetLoadMatch, ctrl?: Control): Promise<SetEntity>;
    list(this: any, reqmatch?: SetListMatch, ctrl?: Control): Promise<SetEntity[]>;
}
export { SetEntity };
