import { PokemonTcgEntityBase } from '../PokemonTcgEntityBase';
import type { PokemonTcgSDK } from '../PokemonTcgSDK';
import type { Control } from '../types';
import type { Type, TypeListMatch } from '../PokemonTcgTypes';
declare class TypeEntity extends PokemonTcgEntityBase<Type> {
    constructor(client: PokemonTcgSDK, entopts: any);
    make(this: TypeEntity): TypeEntity;
    list(this: any, reqmatch?: TypeListMatch, ctrl?: Control): Promise<TypeEntity[]>;
}
export { TypeEntity };
