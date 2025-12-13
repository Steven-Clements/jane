import { describe, test, expect } from 'vitest';
import validateMap from '../../../src/validators/collections/validateMap';

describe('validateMap', () => {
    const field = 'testField';

    test('returns ok:true for Map instances', () => {
        const map = new Map([
            ['a', 1],
            ['b', 2],
        ]);
        expect(validateMap(map, field)).toEqual({ ok: true, value: map });
    });

    test('accepts Map created via Object(...) wrapper', () => {
        const wrapped = Object(new Map([['x', 42]]));
        expect(validateMap(wrapped, field)).toEqual({ ok: true, value: wrapped });
    });

    test('fails for plain objects', () => {
        expect(validateMap({ a: 1 }, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Map',
        });
    });

    test('fails for arrays', () => {
        expect(validateMap([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Map',
        });
    });

    test('fails for Set instances', () => {
        expect(validateMap(new Set(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Map',
        });
    });

    test('fails for WeakMap instances', () => {
        expect(validateMap(new WeakMap(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Map',
        });
    });

    test('fails for WeakSet instances', () => {
        expect(validateMap(new WeakSet(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a Map',
        });
    });

    test('fails for primitives', () => {
        const primitives = [123, 'abc', true, false, null, undefined, Symbol('s')];
        primitives.forEach((val) => {
            expect(validateMap(val, field)).toEqual({
                ok: false,
                field,
                message: 'Value must be a Map',
            });
        });
    });
});
