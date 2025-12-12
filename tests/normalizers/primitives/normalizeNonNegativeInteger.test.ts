import { describe, it, expect } from 'vitest';
import normalizeNonNegativeInteger from '../../../src/normalizers/primitives/normalizeNonNegativeInteger.js';

describe('normalizeNonNegativeInteger', () => {
    it('returns number primitives unchanged if valid', () => {
        expect(normalizeNonNegativeInteger(0)).toBe(0);
        expect(normalizeNonNegativeInteger(5)).toBe(5);
    });

    it('returns null for negative numbers', () => {
        expect(normalizeNonNegativeInteger(-1)).toBeNull();
        expect(normalizeNonNegativeInteger(-100)).toBeNull();
    });

    it('returns null for non-integer numbers', () => {
        expect(normalizeNonNegativeInteger(3.14)).toBeNull();
        expect(normalizeNonNegativeInteger(-0.1)).toBeNull();
    });

    it('parses valid numeric strings', () => {
        expect(normalizeNonNegativeInteger('0')).toBe(0);
        expect(normalizeNonNegativeInteger('42')).toBe(42);
        expect(normalizeNonNegativeInteger(' 7 ')).toBe(7);
    });

    it('returns null for invalid strings', () => {
        expect(normalizeNonNegativeInteger('3.14')).toBeNull();
        expect(normalizeNonNegativeInteger('-1')).toBeNull();
        expect(normalizeNonNegativeInteger('abc')).toBeNull();
        expect(normalizeNonNegativeInteger('')).toBeNull();
        expect(normalizeNonNegativeInteger(' ')).toBeNull();
    });

    it('returns null for NaN, Infinity, -Infinity', () => {
        expect(normalizeNonNegativeInteger(NaN)).toBeNull();
        expect(normalizeNonNegativeInteger(Infinity)).toBeNull();
        expect(normalizeNonNegativeInteger(-Infinity)).toBeNull();
    });

    it('returns null for non-number/string types', () => {
        const invalid: unknown[] = [true, false, null, undefined, {}, []];

        for (const val of invalid) {
            expect(normalizeNonNegativeInteger(val)).toBeNull();
        }
    });
});
