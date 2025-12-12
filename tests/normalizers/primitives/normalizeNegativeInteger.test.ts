import { describe, it, expect } from 'vitest';
import normalizeNegativeInteger from '../../../src/normalizers/primitives/normalizeNegativeInteger.js';

describe('normalizeNegativeInteger', () => {
    it('returns number primitives unchanged if valid negative integer', () => {
        expect(normalizeNegativeInteger(-1)).toBe(-1);
        expect(normalizeNegativeInteger(-42)).toBe(-42);
    });

    it('returns null for zero or positive numbers', () => {
        expect(normalizeNegativeInteger(0)).toBeNull();
        expect(normalizeNegativeInteger(5)).toBeNull();
        expect(normalizeNegativeInteger(3.14)).toBeNull();
    });

    it('returns null for non-integer numbers', () => {
        expect(normalizeNegativeInteger(-3.14)).toBeNull();
        expect(normalizeNegativeInteger(2.5)).toBeNull();
    });

    it('parses valid numeric strings', () => {
        expect(normalizeNegativeInteger('-1')).toBe(-1);
        expect(normalizeNegativeInteger(' -42 ')).toBe(-42);
    });

    it('returns null for invalid strings', () => {
        expect(normalizeNegativeInteger('0')).toBeNull();
        expect(normalizeNegativeInteger('42')).toBeNull();
        expect(normalizeNegativeInteger('3.14')).toBeNull();
        expect(normalizeNegativeInteger('-3.14')).toBeNull();
        expect(normalizeNegativeInteger('abc')).toBeNull();
        expect(normalizeNegativeInteger('')).toBeNull();
        expect(normalizeNegativeInteger(' ')).toBeNull();
    });

    it('returns null for NaN, Infinity, -Infinity', () => {
        expect(normalizeNegativeInteger(NaN)).toBeNull();
        expect(normalizeNegativeInteger(Infinity)).toBeNull();
        expect(normalizeNegativeInteger(-Infinity)).toBeNull();
    });

    it('returns null for non-number/string types', () => {
        const invalid: unknown[] = [true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(normalizeNegativeInteger(val)).toBeNull();
        }
    });
});
