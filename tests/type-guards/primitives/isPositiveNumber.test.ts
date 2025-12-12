import { describe, it, expect } from 'vitest';
import isPositiveNumber from '../../../src/type-guards/primitives/isPositiveNumber.js';

describe('isPositiveNumber', () => {
    it('returns true for positive numbers', () => {
        expect(isPositiveNumber(0.1)).toBe(true);
        expect(isPositiveNumber(1)).toBe(true);
        expect(isPositiveNumber(3.14)).toBe(true);
        expect(isPositiveNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    it('returns false for zero', () => {
        expect(isPositiveNumber(0)).toBe(false);
    });

    it('returns false for negative numbers', () => {
        expect(isPositiveNumber(-0.1)).toBe(false);
        expect(isPositiveNumber(-1)).toBe(false);
        expect(isPositiveNumber(-100)).toBe(false);
    });

    it('returns false for NaN, Infinity, -Infinity', () => {
        expect(isPositiveNumber(NaN)).toBe(false);
        expect(isPositiveNumber(Infinity)).toBe(false);
        expect(isPositiveNumber(-Infinity)).toBe(false);
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
            new Number(5),
        ];

        for (const value of invalid) {
            expect(isPositiveNumber(value)).toBe(false);
        }
    });
});
