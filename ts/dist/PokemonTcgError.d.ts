import { Context } from './Context';
declare class PokemonTcgError extends Error {
    isPokemonTcgError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PokemonTcgError };
