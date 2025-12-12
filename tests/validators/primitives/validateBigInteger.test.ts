import { describe, test, expect } from 'vitest';
import validateBigInteger from '../../../src/validators/primitives/validateBigInteger';

describe('validateBigInteger', () => {
    const field = 'testField';

    test('returns ok:true for bigint values', () => {
        expect(validateBigInteger(0n, field)).toEqual({ ok: true, value: 0n });
        expect(validateBigInteger(1n, field)).toEqual({ ok: true, value: 1n });
        expect(validateBigInteger(-1n, field)).toEqual({ ok: true, value: -1n });
        expect(validateBigInteger(12345678901234567890n, field)).toEqual({
            ok: true,
            value: 12345678901234567890n,
        });
    });

    test('fails for numbers, even if integer-like', () => {
        expect(validateBigInteger(0, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });

        expect(validateBigInteger(123, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });
    });

    test('fails for non-bigint types', () => {
        expect(validateBigInteger('123', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });

        expect(validateBigInteger(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });

        expect(validateBigInteger(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });

        expect(validateBigInteger(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });

        expect(validateBigInteger({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });

        expect(validateBigInteger([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a bigint',
        });
    });
});
