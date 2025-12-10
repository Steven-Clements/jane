import { describe, it, expect } from 'vitest';
import isNumber from '../../src/guards/isNumber.js';

describe('isNumber', () => {
    it('returns true for finite numbers', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber(3.14)).toBe(true);
        expect(isNumber(-100)).toBe(true);
    });

    it('returns false for NaN and infinities', () => {
        expect(isNumber(NaN)).toBe(false);
        expect(isNumber(Infinity)).toBe(false);
        expect(isNumber(-Infinity)).toBe(false);
    });

    it('returns false for non-numbers', () => {
        expect(isNumber('123')).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber([])).toBe(false);
    });
});
