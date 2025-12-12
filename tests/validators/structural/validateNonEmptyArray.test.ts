import { describe, test, expect } from 'vitest';
import validateNonEmptyArray from '../../../src/validators/structural/validateNonEmptyArray';

describe('validateNonEmptyArray', () => {
    const field = 'testField';

    test('returns ok:true for non-empty arrays', () => {
        const arr = [1, 2, 3];
        expect(validateNonEmptyArray(arr, field)).toEqual({ ok: true, value: arr });

        const single = [42];
        expect(validateNonEmptyArray(single, field)).toEqual({
            ok: true,
            value: single,
        });
    });

    test('fails for empty arrays', () => {
        expect(validateNonEmptyArray([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });
    });

    test('fails for null', () => {
        expect(validateNonEmptyArray(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });
    });

    test('fails for objects', () => {
        expect(validateNonEmptyArray({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray({ length: 1 }, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });
    });

    test('fails for functions', () => {
        expect(validateNonEmptyArray(() => {}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });
    });

    test('fails for built-in objects like Map, Set, Date', () => {
        expect(validateNonEmptyArray(new Map(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray(new Set(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray(new Date(), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });
    });

    test('fails for primitives', () => {
        expect(validateNonEmptyArray(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray('abc', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });

        expect(validateNonEmptyArray(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a non-empty array',
        });
    });
});
