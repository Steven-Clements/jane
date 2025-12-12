import { describe, test, expect } from 'vitest';
import validateFiniteNumber from '../../../src/validators/primitives/validateFiniteNumber';

describe('validateFiniteNumber', () => {
    const field = 'testField';

    test('returns ok:true for finite numbers', () => {
        expect(validateFiniteNumber(0, field)).toEqual({ ok: true, value: 0 });
        expect(validateFiniteNumber(1, field)).toEqual({ ok: true, value: 1 });
        expect(validateFiniteNumber(-1, field)).toEqual({ ok: true, value: -1 });
        expect(validateFiniteNumber(123.456, field)).toEqual({
            ok: true,
            value: 123.456,
        });
    });

    test('fails for NaN, Infinity, -Infinity', () => {
        expect(validateFiniteNumber(NaN, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber(Infinity, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber(-Infinity, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });
    });

    test('fails for non-numbers', () => {
        expect(validateFiniteNumber('123', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber(true, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });

        expect(validateFiniteNumber([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a finite number',
        });
    });
});
