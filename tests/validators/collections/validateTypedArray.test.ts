import { describe, test, expect } from 'vitest';
import validateTypedArray from '../../../src/validators/collections/validateTypedArray';

describe('validateTypedArray', () => {
    const field = 'testField';

    test('returns ok:true for Int8Array', () => {
        const arr = new Int8Array([1, 2, 3]);
        expect(validateTypedArray(arr, field)).toEqual({ ok: true, value: arr });
    });

    test('returns ok:true for Float64Array', () => {
        const arr = new Float64Array([1.1, 2.2]);
        expect(validateTypedArray(arr, field)).toEqual({ ok: true, value: arr });
    });

    test('returns ok:true for BigUint64Array', () => {
        const arr = new BigUint64Array([1n, 2n]);
        expect(validateTypedArray(arr, field)).toEqual({ ok: true, value: arr });
    });

    test('fails for plain arrays', () => {
        expect(validateTypedArray([1, 2, 3], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });
    });

    test('fails for Set instances', () => {
        expect(validateTypedArray(new Set([1, 2]), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });
    });

    test('fails for Map instances', () => {
        expect(validateTypedArray(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });
    });

    test('fails for primitives', () => {
        expect(validateTypedArray(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });

        expect(validateTypedArray('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });

        expect(validateTypedArray(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });

        expect(validateTypedArray(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });

        expect(validateTypedArray(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });

        expect(validateTypedArray(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a TypedArray',
        });
    });
});
