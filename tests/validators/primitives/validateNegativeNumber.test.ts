import { describe, it, expect } from 'vitest';
import validateNegativeNumber from '../../../src/validators/primitives/validateNegativeNumber.js';

describe('validateNegativeNumber', () => {
    it('returns ok:true for valid negative numbers', () => {
        expect(validateNegativeNumber(-0.1, 'rate')).toEqual({ ok: true, value: -0.1 });
        expect(validateNegativeNumber(-1, 'count')).toEqual({ ok: true, value: -1 });
        expect(validateNegativeNumber(-42, 'total')).toEqual({ ok: true, value: -42 });
    });

    it('returns ok:false for zero or positive numbers', () => {
        expect(validateNegativeNumber(0, 'zero')).toEqual({
            ok: false,
            field: 'zero',
            message: 'Value must be a negative number',
        });
        expect(validateNegativeNumber(1, 'positive')).toEqual({
            ok: false,
            field: 'positive',
            message: 'Value must be a negative number',
        });
        expect(validateNegativeNumber(3.14, 'fraction')).toEqual({
            ok: false,
            field: 'fraction',
            message: 'Value must be a negative number',
        });
    });

    it('returns ok:false for non-numeric types', () => {
        const invalid: unknown[] = ['-5', true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(validateNegativeNumber(val, 'field')).toEqual({
                ok: false,
                field: 'field',
                message: 'Value must be a negative number',
            });
        }
    });

    it('returns ok:false for NaN, Infinity, -Infinity', () => {
        expect(validateNegativeNumber(NaN, 'x')).toEqual({
            ok: false,
            field: 'x',
            message: 'Value must be a negative number',
        });
        expect(validateNegativeNumber(Infinity, 'y')).toEqual({
            ok: false,
            field: 'y',
            message: 'Value must be a negative number',
        });
        expect(validateNegativeNumber(-Infinity, 'z')).toEqual({
            ok: false,
            field: 'z',
            message: 'Value must be a negative number',
        });
    });
});
