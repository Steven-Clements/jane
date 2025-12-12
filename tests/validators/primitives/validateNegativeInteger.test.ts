import { describe, it, expect } from 'vitest';
import validateNegativeInteger from '../../../src/validators/primitives/validateNegativeInteger.js';

describe('validateNegativeInteger', () => {
    it('returns ok:true for valid negative integers', () => {
        expect(validateNegativeInteger(-1, 'count')).toEqual({ ok: true, value: -1 });
        expect(validateNegativeInteger(-42, 'total')).toEqual({ ok: true, value: -42 });
    });

    it('returns ok:false for zero, positive numbers, or fractions', () => {
        expect(validateNegativeInteger(0, 'zero')).toEqual({
            ok: false,
            field: 'zero',
            message: 'Value must be a negative integer',
        });
        expect(validateNegativeInteger(1, 'positive')).toEqual({
            ok: false,
            field: 'positive',
            message: 'Value must be a negative integer',
        });
        expect(validateNegativeInteger(-1.5, 'fraction')).toEqual({
            ok: false,
            field: 'fraction',
            message: 'Value must be a negative integer',
        });
    });

    it('returns ok:false for non-numeric types', () => {
        const invalid: unknown[] = ['-5', true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(validateNegativeInteger(val, 'field')).toEqual({
                ok: false,
                field: 'field',
                message: 'Value must be a negative integer',
            });
        }
    });

    it('returns ok:false for NaN, Infinity, -Infinity', () => {
        expect(validateNegativeInteger(NaN, 'x')).toEqual({
            ok: false,
            field: 'x',
            message: 'Value must be a negative integer',
        });
        expect(validateNegativeInteger(Infinity, 'y')).toEqual({
            ok: false,
            field: 'y',
            message: 'Value must be a negative integer',
        });
        expect(validateNegativeInteger(-Infinity, 'z')).toEqual({
            ok: false,
            field: 'z',
            message: 'Value must be a negative integer',
        });
    });
});
