import { CardEntity } from './entity/CardEntity';
import { RarityEntity } from './entity/RarityEntity';
import { SetEntity } from './entity/SetEntity';
import { SubtypeEntity } from './entity/SubtypeEntity';
import { SupertypeEntity } from './entity/SupertypeEntity';
import { TypeEntity } from './entity/TypeEntity';
export type * from './PokemonTcgTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { PokemonTcgEntityBase } from './PokemonTcgEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class PokemonTcgSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Card(entopts?: Record<string, any>): CardEntity;
    Rarity(entopts?: Record<string, any>): RarityEntity;
    Set(entopts?: Record<string, any>): SetEntity;
    Subtype(entopts?: Record<string, any>): SubtypeEntity;
    Supertype(entopts?: Record<string, any>): SupertypeEntity;
    Type(entopts?: Record<string, any>): TypeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): PokemonTcgSDK;
    tester(testopts?: any, sdkopts?: any): PokemonTcgSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof PokemonTcgSDK;
export { stdutil, config, BaseFeature, PokemonTcgEntityBase, PokemonTcgSDK, SDK, };
