import { describe, test, expect } from 'vitest';
import validateSafeInteger from '../../../src/validators/primitives/validateSafeInteger';

describe('validateSafeInteger', () => {
    const field = 'testField';

    test('returns ok:true for safe integers', () => {
        expect(validateSafeInteger(0, field)).toEqual({ ok: true, value: 0 });
        expect(validateSafeInteger(1, field)).toEqual({ ok: true, value: 1 });
        expect(validateSafeInteger(-1, field)).toEqual({ ok: true, value: -1 });
        expect(validateSafeInteger(Number.MAX_SAFE_INTEGER, field)).toEqual({
            ok: true,
            value: Number.MAX_SAFE_INTEGER,
        });
        expect(validateSafeInteger(Number.MIN_SAFE_INTEGER, field)).toEqual({
            ok: true,
            value: Number.MIN_SAFE_INTEGER,
        });
    });

    test('fails for integers outside the safe range', () => {
        expect(validateSafeInteger(Number.MAX_SAFE_INTEGER + 1, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger(Number.MIN_SAFE_INTEGER - 1, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });
    });

    test('fails for fractional numbers', () => {
        expect(validateSafeInteger(1.5, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });
    });

    test('fails for NaN, Infinity, -Infinity', () => {
        expect(validateSafeInteger(NaN, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger(Infinity, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger(-Infinity, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });
    });

    test('fails for non-numbers', () => {
        expect(validateSafeInteger('123', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });

        expect(validateSafeInteger([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a safe integer',
        });
    });
});
