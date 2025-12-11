import { describe, it, expect } from 'vitest';
import isInteger from '../../../src/type-guards/primitives/isInteger.js';

describe('isInteger', () => {
    it('returns true for integers', () => {
        expect(isInteger(0)).toBe(true);
        expect(isInteger(42)).toBe(true);
        expect(isInteger(-10)).toBe(true);
    });

    it('returns false for floats', () => {
        expect(isInteger(3.14)).toBe(false);
    });

    it('returns false for non-finite numbers', () => {
        expect(isInteger(NaN)).toBe(false);
        expect(isInteger(Infinity)).toBe(false);
        expect(isInteger(-Infinity)).toBe(false);
    });

    it('returns false for non-numbers', () => {
        expect(isInteger('10')).toBe(false);
        expect(isInteger(null)).toBe(false);
        expect(isInteger(undefined)).toBe(false);
        expect(isInteger({})).toBe(false);
    });

    it('returns false for Number objects and BigInt', () => {
        expect(isInteger(new Number(42))).toBe(false);
        expect(isInteger(42n)).toBe(false);
    });
});
