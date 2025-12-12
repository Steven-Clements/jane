import { describe, test, expect } from 'vitest';
import validateWeakMap from '../../../src/validators/collections/validateWeakMap';

describe('validateWeakMap', () => {
    const field = 'testField';

    test('returns ok:true for WeakMap instances', () => {
        const key = {};
        const wm = new WeakMap([[key, 123]]);
        expect(validateWeakMap(wm, field)).toEqual({ ok: true, value: wm });
    });

    test('accepts wrapper WeakMap objects', () => {
        const wrapped = Object(new WeakMap());
        expect(validateWeakMap(wrapped, field)).toEqual({
            ok: true,
            value: wrapped,
        });
    });

    test('fails for Map instances', () => {
        expect(validateWeakMap(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });
    });

    test('fails for Set instances', () => {
        expect(validateWeakMap(new Set(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });
    });

    test('fails for WeakSet instances', () => {
        expect(validateWeakMap(new WeakSet(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });
    });

    test('fails for plain objects', () => {
        expect(validateWeakMap({ a: 1 }, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });
    });

    test('fails for arrays', () => {
        expect(validateWeakMap([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });
    });

    test('fails for primitives', () => {
        expect(validateWeakMap(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });

        expect(validateWeakMap('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });

        expect(validateWeakMap(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });

        expect(validateWeakMap(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });

        expect(validateWeakMap(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });

        expect(validateWeakMap(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a WeakMap',
        });
    });
});
