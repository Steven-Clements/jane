import { describe, it, expect } from 'vitest';
import isNegativeInteger from '../../../src/type-guards/primitives/isNegativeInteger.js';

describe('isNegativeInteger', () => {
    it('returns true for negative integers', () => {
        expect(isNegativeInteger(-1)).toBe(true);
        expect(isNegativeInteger(-42)).toBe(true);
        expect(isNegativeInteger(-1000)).toBe(true);
        expect(isNegativeInteger(-Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    it('returns false for zero', () => {
        expect(isNegativeInteger(0)).toBe(false);
    });

    it('returns false for positive integers', () => {
        expect(isNegativeInteger(1)).toBe(false);
        expect(isNegativeInteger(100)).toBe(false);
    });

    it('returns false for negative floats', () => {
        expect(isNegativeInteger(-1.5)).toBe(false);
        expect(isNegativeInteger(-0.1)).toBe(false);
    });

    it('returns false for NaN, Infinity, -Infinity', () => {
        expect(isNegativeInteger(NaN)).toBe(false);
        expect(isNegativeInteger(Infinity)).toBe(false);
        expect(isNegativeInteger(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        const invalid: unknown[] = [
            '5',
            true,
            false,
            null,
            undefined,
            {},
            [],
            () => {},
            new Number(-5),
        ];

        for (const value of invalid) {
            expect(isNegativeInteger(value)).toBe(false);
        }
    });
});
