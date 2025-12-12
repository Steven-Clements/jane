import { describe, test, expect } from 'vitest';
import validateWeakSet from '../../../src/validators/collections/validateWeakSet';

describe('validateWeakSet', () => {
    const field = 'testField';

    test('returns ok:true for WeakSet instances', () => {
        const key = {};
        const ws = new WeakSet([key]);
        expect(validateWeakSet(ws, field)).toEqual({ ok: true, value: ws });
    });

    test('accepts wrapper WeakSet objects', () => {
        const wrapped = Object(new WeakSet());
        expect(validateWeakSet(wrapped, field)).toEqual({
            ok: true,
            value: wrapped,
        });
    });

    test('fails for Set instances', () => {
        expect(validateWeakSet(new Set(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });
    });

    test('fails for WeakMap instances', () => {
        expect(validateWeakSet(new WeakMap(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });
    });

    test('fails for Map instances', () => {
        expect(validateWeakSet(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });
    });

    test('fails for plain objects', () => {
        expect(validateWeakSet({ a: 1 }, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });
    });

    test('fails for arrays', () => {
        expect(validateWeakSet([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });
    });

    test('fails for primitives', () => {
        expect(validateWeakSet(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });

        expect(validateWeakSet('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });

        expect(validateWeakSet(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });

        expect(validateWeakSet(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });

        expect(validateWeakSet(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });

        expect(validateWeakSet(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakSet',
        });
    });
});
