"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTcgError = void 0;
class PokemonTcgError extends Error {
    isPokemonTcgError = true;
    sdk = 'PokemonTcg';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.PokemonTcgError = PokemonTcgError;
//# sourceMappingURL=PokemonTcgError.js.map