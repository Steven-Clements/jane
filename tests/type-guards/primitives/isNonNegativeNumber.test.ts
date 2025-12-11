import { describe, it, expect } from 'vitest';
import isNonNegativeNumber from '../../../src/type-guards/primitives/isNonNegativeNumber.js';

describe('isNonNegativeNumber', () => {
    it('returns true for zero', () => {
        expect(isNonNegativeNumber(0)).toBe(true);
    });

    it('returns true for positive integers', () => {
        expect(isNonNegativeNumber(1)).toBe(true);
        expect(isNonNegativeNumber(42)).toBe(true);
    });

    it('returns true for positive fractional numbers', () => {
        expect(isNonNegativeNumber(0.5)).toBe(true);
        expect(isNonNegativeNumber(123.456)).toBe(true);
    });

    it('returns false for negative numbers', () => {
        expect(isNonNegativeNumber(-0.0001)).toBe(false);
        expect(isNonNegativeNumber(-1)).toBe(false);
        expect(isNonNegativeNumber(-100.5)).toBe(false);
    });

    it('returns false for non-finite numbers', () => {
        expect(isNonNegativeNumber(NaN)).toBe(false);
        expect(isNonNegativeNumber(Infinity)).toBe(false);
        expect(isNonNegativeNumber(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        expect(isNonNegativeNumber('0')).toBe(false);
        expect(isNonNegativeNumber('123')).toBe(false);
        expect(isNonNegativeNumber(true)).toBe(false);
        expect(isNonNegativeNumber(null)).toBe(false);
        expect(isNonNegativeNumber(undefined)).toBe(false);
        expect(isNonNegativeNumber({})).toBe(false);
        expect(isNonNegativeNumber([])).toBe(false);
        expect(isNonNegativeNumber(() => {})).toBe(false);
    });

    it('returns false for bigint values', () => {
        expect(isNonNegativeNumber(0n)).toBe(false);
        expect(isNonNegativeNumber(10n)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isNonNegativeNumber(new Number(0))).toBe(false);
        expect(isNonNegativeNumber(new Number(5))).toBe(false);
    });
});
