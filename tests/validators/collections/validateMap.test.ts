import { describe, test, expect } from 'vitest';
import validateSet from '../../../src/validators/collections/validateSet';

describe('validateSet', () => {
    const field = 'testField';

    test('returns ok:true for Set instances', () => {
        const set = new Set<number>([1, 2, 3]);
        expect(validateSet(set, field)).toEqual({ ok: true, value: set });
    });

    test('accepts wrapper Set objects', () => {
        const wrapped = Object(new Set(['a']));
        expect(validateSet(wrapped, field)).toEqual({ ok: true, value: wrapped });
    });

    test('fails for plain objects', () => {
        expect(validateSet({ a: 1 }, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });
    });

    test('fails for arrays', () => {
        expect(validateSet([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });
    });

    test('fails for Map instances', () => {
        expect(validateSet(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });
    });

    test('fails for WeakSet instances', () => {
        expect(validateSet(new WeakSet(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });
    });

    test('fails for primitives', () => {
        expect(validateSet(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });

        expect(validateSet('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });

        expect(validateSet(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });

        expect(validateSet(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });

        expect(validateSet(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });

        expect(validateSet(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Set',
        });
    });
});
