import { describe, it, expect } from 'vitest';
import isBigInteger from '../../../src/type-guards/primitives/isBigInteger.js';

describe('isBigInteger', () => {
    it('returns true for bigint primitives', () => {
        expect(isBigInteger(0n)).toBe(true);
        expect(isBigInteger(1n)).toBe(true);
        expect(isBigInteger(-1n)).toBe(true);
        expect(isBigInteger(999999999999999999999n)).toBe(true);
    });

    it('returns false for number primitives', () => {
        expect(isBigInteger(0)).toBe(false);
        expect(isBigInteger(42)).toBe(false);
        expect(isBigInteger(-10)).toBe(false);
        expect(isBigInteger(1.5)).toBe(false);
        expect(isBigInteger(NaN)).toBe(false);
        expect(isBigInteger(Infinity)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isBigInteger(new Number(5))).toBe(false);
        expect(isBigInteger(Object(1))).toBe(false);
    });

    it('returns false for non-numeric types', () => {
        expect(isBigInteger('123')).toBe(false);
        expect(isBigInteger(true)).toBe(false);
        expect(isBigInteger(null)).toBe(false);
        expect(isBigInteger(undefined)).toBe(false);
        expect(isBigInteger({})).toBe(false);
        expect(isBigInteger([])).toBe(false);
        expect(isBigInteger(() => {})).toBe(false);
    });
});
