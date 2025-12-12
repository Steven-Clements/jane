import { describe, it, expect } from 'vitest';
import isNonNegativeInteger from '../../../src/type-guards/primitives/isNonNegativeInteger';

describe('isNonNegativeInteger', () => {
    it('returns true for valid non-negative integers', () => {
        expect(isNonNegativeInteger(0)).toBe(true);
        expect(isNonNegativeInteger(1)).toBe(true);
        expect(isNonNegativeInteger(42)).toBe(true);
        expect(isNonNegativeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    it('returns false for negative integers', () => {
        expect(isNonNegativeInteger(-1)).toBe(false);
        expect(isNonNegativeInteger(-100)).toBe(false);
    });

    it('returns false for floating-point numbers', () => {
        expect(isNonNegativeInteger(1.1)).toBe(false);
        expect(isNonNegativeInteger(-1.5)).toBe(false);
        expect(isNonNegativeInteger(Math.PI)).toBe(false);
    });

    it('returns false for NaN, Infinity, -Infinity', () => {
        expect(isNonNegativeInteger(NaN)).toBe(false);
        expect(isNonNegativeInteger(Infinity)).toBe(false);
        expect(isNonNegativeInteger(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        const invalidValues: unknown[] = [
            '5',
            true,
            false,
            null,
            undefined,
            {},
            [],
            () => {},
            Symbol('x'),
        ];

        for (const v of invalidValues) {
            expect(isNonNegativeInteger(v)).toBe(false);
        }
    });
});
