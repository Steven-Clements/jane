import { describe, test, expect } from 'vitest';
import validateSymbol from '../../../src/validators/primitives/validateSymbol';

describe('validateSymbol', () => {
    const field = 'testField';

    test('returns ok:true for symbol values', () => {
        const s1 = Symbol();
        const s2 = Symbol('x');

        expect(validateSymbol(s1, field)).toEqual({ ok: true, value: s1 });
        expect(validateSymbol(s2, field)).toEqual({ ok: true, value: s2 });
    });

    test('fails for non-symbol primitives', () => {
        expect(validateSymbol(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });

        expect(validateSymbol('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });

        expect(validateSymbol(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });

        expect(validateSymbol(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });

        expect(validateSymbol(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });
    });

    test('fails for objects and arrays', () => {
        expect(validateSymbol({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });

        expect(validateSymbol([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });

        expect(validateSymbol(Object(Symbol('wrapped')), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a symbol',
        });
    });
});
