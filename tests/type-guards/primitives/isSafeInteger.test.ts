import { describe, it, expect } from 'vitest';
import isSafeInteger from '../../../src/type-guards/primitives/isSafeInteger.js';

describe('isSafeInteger', () => {
    it('returns true for standard safe integers', () => {
        expect(isSafeInteger(0)).toBe(true);
        expect(isSafeInteger(1)).toBe(true);
        expect(isSafeInteger(-1)).toBe(true);
        expect(isSafeInteger(123456)).toBe(true);
    });

    it('returns true for boundary safe integers', () => {
        expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
        expect(isSafeInteger(-Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    it('returns false for integers outside the safe range', () => {
        expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
        expect(isSafeInteger(-Number.MAX_SAFE_INTEGER - 1)).toBe(false);
    });

    it('returns false for fractional numbers', () => {
        expect(isSafeInteger(1.5)).toBe(false);
        expect(isSafeInteger(-2.3)).toBe(false);
        expect(isSafeInteger(0.0001)).toBe(false);
    });

    it('returns false for non-finite numbers', () => {
        expect(isSafeInteger(NaN)).toBe(false);
        expect(isSafeInteger(Infinity)).toBe(false);
        expect(isSafeInteger(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        expect(isSafeInteger('1')).toBe(false);
        expect(isSafeInteger('abc')).toBe(false);
        expect(isSafeInteger(true)).toBe(false);
        expect(isSafeInteger(null)).toBe(false);
        expect(isSafeInteger(undefined)).toBe(false);
        expect(isSafeInteger({})).toBe(false);
        expect(isSafeInteger([])).toBe(false);
        expect(isSafeInteger(() => {})).toBe(false);
    });

    it('returns false for bigint values', () => {
        expect(isSafeInteger(1n)).toBe(false);
        expect(isSafeInteger(9007199254740991n)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isSafeInteger(new Number(5))).toBe(false);
    });
});
