import { describe, it, expect } from 'vitest';
import isPositiveInteger from '../../../src/type-guards/primitives/isPositiveInteger.js';

describe('isPositiveInteger', () => {
    it('returns true for standard positive integers', () => {
        expect(isPositiveInteger(1)).toBe(true);
        expect(isPositiveInteger(42)).toBe(true);
        expect(isPositiveInteger(999999)).toBe(true);
    });

    it('returns false for zero and negative integers', () => {
        expect(isPositiveInteger(0)).toBe(false);
        expect(isPositiveInteger(-1)).toBe(false);
        expect(isPositiveInteger(-100)).toBe(false);
    });

    it('returns false for fractional numbers', () => {
        expect(isPositiveInteger(1.5)).toBe(false);
        expect(isPositiveInteger(-2.3)).toBe(false);
        expect(isPositiveInteger(0.0001)).toBe(false);
    });

    it('returns false for non-finite numbers', () => {
        expect(isPositiveInteger(NaN)).toBe(false);
        expect(isPositiveInteger(Infinity)).toBe(false);
        expect(isPositiveInteger(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        expect(isPositiveInteger('1')).toBe(false);
        expect(isPositiveInteger('abc')).toBe(false);
        expect(isPositiveInteger(true)).toBe(false);
        expect(isPositiveInteger(null)).toBe(false);
        expect(isPositiveInteger(undefined)).toBe(false);
        expect(isPositiveInteger({})).toBe(false);
        expect(isPositiveInteger([])).toBe(false);
        expect(isPositiveInteger(() => {})).toBe(false);
    });

    it('returns false for bigint values', () => {
        expect(isPositiveInteger(1n)).toBe(false);
        expect(isPositiveInteger(999n)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isPositiveInteger(new Number(5))).toBe(false);
    });
});
