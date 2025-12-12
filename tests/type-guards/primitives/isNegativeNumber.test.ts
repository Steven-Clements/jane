import { describe, it, expect } from 'vitest';
import isNegativeNumber from '../../../src/type-guards/primitives/isNegativeNumber.js';

describe('isNegativeNumber', () => {
    it('returns true for negative numbers', () => {
        expect(isNegativeNumber(-0.1)).toBe(true);
        expect(isNegativeNumber(-1)).toBe(true);
        expect(isNegativeNumber(-100)).toBe(true);
        expect(isNegativeNumber(-Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    it('returns false for zero', () => {
        expect(isNegativeNumber(0)).toBe(false);
    });

    it('returns false for positive numbers', () => {
        expect(isNegativeNumber(0.1)).toBe(false);
        expect(isNegativeNumber(1)).toBe(false);
        expect(isNegativeNumber(100)).toBe(false);
    });

    it('returns false for NaN, Infinity, -Infinity', () => {
        expect(isNegativeNumber(NaN)).toBe(false);
        expect(isNegativeNumber(Infinity)).toBe(false);
        expect(isNegativeNumber(-Infinity)).toBe(false);
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
            expect(isNegativeNumber(value)).toBe(false);
        }
    });
});
