import { describe, it, expect } from 'vitest';
import validateTimestamp from '../../../src/validators/semantic/validateTimestamp';

describe('validateTimestamp', () => {
    it('returns ok:true for a positive integer timestamp', () => {
        const value = 1_700_000_000_000;

        const result = validateTimestamp(value, 'ts');

        expect(result).toEqual({
            ok: true,
            value,
        });
    });

    it('returns ok:true for zero (Unix epoch)', () => {
        const result = validateTimestamp(0, 'epoch');

        expect(result.ok).toBe(true);
    });

    it('returns ok:true for a negative timestamp', () => {
        const value = -1_000;

        const result = validateTimestamp(value, 'beforeEpoch');

        expect(result.ok).toBe(true);
    });

    it('returns error for fractional numbers', () => {
        const result = validateTimestamp(123.45, 'fraction');

        expect(result).toEqual({
            ok: false,
            field: 'fraction',
            message: 'Value must be a Unix timestamp in milliseconds',
        });
    });

    it('returns error for NaN and Infinity', () => {
        expect(validateTimestamp(NaN, 'nan').ok).toBe(false);
        expect(validateTimestamp(Infinity, 'inf').ok).toBe(false);
        expect(validateTimestamp(-Infinity, 'ninf').ok).toBe(false);
    });

    it('returns error for non-number values', () => {
        expect(validateTimestamp('1700000000000', 'string').ok).toBe(false);
        expect(validateTimestamp(new Number(5), 'boxed').ok).toBe(false);
        expect(validateTimestamp(true, 'bool').ok).toBe(false);
        expect(validateTimestamp(null, 'null').ok).toBe(false);
        expect(validateTimestamp(undefined, 'undef').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateTimestamp(Symbol('s'), 'sym')).not.toThrow();
        expect(() => validateTimestamp({}, 'obj')).not.toThrow();
        expect(() => validateTimestamp([], 'arr')).not.toThrow();
    });
});
