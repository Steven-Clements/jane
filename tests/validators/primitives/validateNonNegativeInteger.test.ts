import { describe, it, expect } from 'vitest';
import validateNonNegativeInteger from '../../../src/validators/primitives/validateNonNegativeInteger.js';

describe('validateNonNegativeInteger', () => {
    it('returns ok:true for valid non-negative integers', () => {
        expect(validateNonNegativeInteger(0, 'age')).toEqual({ ok: true, value: 0 });
        expect(validateNonNegativeInteger(1, 'count')).toEqual({ ok: true, value: 1 });
        expect(validateNonNegativeInteger(42, 'total')).toEqual({ ok: true, value: 42 });
    });

    it('returns ok:false for negative numbers', () => {
        expect(validateNonNegativeInteger(-1, 'index')).toEqual({
            ok: false,
            field: 'index',
            message: 'Value must be a non-negative integer',
        });
        expect(validateNonNegativeInteger(-100, 'score')).toEqual({
            ok: false,
            field: 'score',
            message: 'Value must be a non-negative integer',
        });
    });

    it('returns ok:false for fractional numbers', () => {
        expect(validateNonNegativeInteger(0.1, 'fraction')).toEqual({
            ok: false,
            field: 'fraction',
            message: 'Value must be a non-negative integer',
        });
        expect(validateNonNegativeInteger(3.14, 'pi')).toEqual({
            ok: false,
            field: 'pi',
            message: 'Value must be a non-negative integer',
        });
    });

    it('returns ok:false for non-numeric types', () => {
        const invalid: unknown[] = ['5', true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(validateNonNegativeInteger(val, 'field')).toEqual({
                ok: false,
                field: 'field',
                message: 'Value must be a non-negative integer',
            });
        }
    });

    it('returns ok:false for NaN, Infinity, -Infinity', () => {
        expect(validateNonNegativeInteger(NaN, 'x')).toEqual({
            ok: false,
            field: 'x',
            message: 'Value must be a non-negative integer',
        });
        expect(validateNonNegativeInteger(Infinity, 'y')).toEqual({
            ok: false,
            field: 'y',
            message: 'Value must be a non-negative integer',
        });
        expect(validateNonNegativeInteger(-Infinity, 'z')).toEqual({
            ok: false,
            field: 'z',
            message: 'Value must be a non-negative integer',
        });
    });
});
