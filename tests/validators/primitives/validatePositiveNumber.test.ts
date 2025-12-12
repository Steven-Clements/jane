import { describe, it, expect } from 'vitest';
import validatePositiveNumber from '../../../src/validators/primitives/validatePositiveNumber.js';

describe('validatePositiveNumber', () => {
    it('returns ok:true for valid positive numbers', () => {
        expect(validatePositiveNumber(0.1, 'rate')).toEqual({ ok: true, value: 0.1 });
        expect(validatePositiveNumber(1, 'count')).toEqual({ ok: true, value: 1 });
        expect(validatePositiveNumber(42, 'total')).toEqual({ ok: true, value: 42 });
    });

    it('returns ok:false for zero or negative numbers', () => {
        expect(validatePositiveNumber(0, 'zero')).toEqual({
            ok: false,
            field: 'zero',
            message: 'Value must be a positive number',
        });
        expect(validatePositiveNumber(-1, 'negative')).toEqual({
            ok: false,
            field: 'negative',
            message: 'Value must be a positive number',
        });
        expect(validatePositiveNumber(-3.14, 'fraction')).toEqual({
            ok: false,
            field: 'fraction',
            message: 'Value must be a positive number',
        });
    });

    it('returns ok:false for non-numeric types', () => {
        const invalid: unknown[] = ['5', true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(validatePositiveNumber(val, 'field')).toEqual({
                ok: false,
                field: 'field',
                message: 'Value must be a positive number',
            });
        }
    });

    it('returns ok:false for NaN, Infinity, -Infinity', () => {
        expect(validatePositiveNumber(NaN, 'x')).toEqual({
            ok: false,
            field: 'x',
            message: 'Value must be a positive number',
        });
        expect(validatePositiveNumber(Infinity, 'y')).toEqual({
            ok: false,
            field: 'y',
            message: 'Value must be a positive number',
        });
        expect(validatePositiveNumber(-Infinity, 'z')).toEqual({
            ok: false,
            field: 'z',
            message: 'Value must be a positive number',
        });
    });
});
