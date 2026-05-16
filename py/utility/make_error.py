# PokemonTcg SDK utility: make_error

from __future__ import annotations
from core.operation import PokemonTcgOperation
from core.result import PokemonTcgResult
from core.control import PokemonTcgControl
from core.error import PokemonTcgError


def make_error_util(ctx, err):
    if ctx is None:
        from core.context import PokemonTcgContext
        ctx = PokemonTcgContext({}, None)

    op = ctx.op
    if op is None:
        op = PokemonTcgOperation({})
    opname = op.name
    if opname == "" or opname == "_":
        opname = "unknown operation"

    result = ctx.result
    if result is None:
        result = PokemonTcgResult({})
    result.ok = False

    if err is None:
        err = result.err
    if err is None:
        err = ctx.make_error("unknown", "unknown error")

    errmsg = ""
    if isinstance(err, PokemonTcgError):
        errmsg = err.msg
    elif hasattr(err, "msg") and err.msg is not None:
        errmsg = err.msg
    elif isinstance(err, str):
        errmsg = err
    else:
        errmsg = str(err)

    msg = "PokemonTcgSDK: " + opname + ": " + errmsg
    msg = ctx.utility.clean(ctx, msg)

    result.err = None

    spec = ctx.spec

    if ctx.ctrl.explain is not None:
        ctx.ctrl.explain["err"] = {"message": msg}

    sdk_err = PokemonTcgError("", msg, ctx)
    sdk_err.result = ctx.utility.clean(ctx, result)
    sdk_err.spec = ctx.utility.clean(ctx, spec)

    if isinstance(err, PokemonTcgError):
        sdk_err.code = err.code

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err is False:
        return result.resdata, None

    return None, sdk_err
