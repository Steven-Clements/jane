import { describe, test, expect } from 'vitest';
import validateArray from '../../../src/validators/structural/validateArray';

describe('validateArray', () => {
    const field = 'testField';

    test('returns ok:true for arrays', () => {
        const arr = [1, 2, 3];
        expect(validateArray(arr, field)).toEqual({ ok: true, value: arr });

        const emptyArr: unknown[] = [];
        expect(validateArray(emptyArr, field)).toEqual({
            ok: true,
            value: emptyArr,
        });
    });

    test('fails for null', () => {
        expect(validateArray(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });
    });

    test('fails for objects', () => {
        expect(validateArray({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray({ length: 3 }, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });
    });

    test('fails for functions', () => {
        expect(validateArray(() => {}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });
    });

    test('fails for built-in objects like Map, Set, Date', () => {
        expect(validateArray(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray(new Set(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray(new Date(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });
    });

    test('fails for primitives', () => {
        expect(validateArray(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });

        expect(validateArray(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be an array',
        });
    });
});
