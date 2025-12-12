import { describe, it, expect } from 'vitest';
import normalizePositiveNumber from '../../../src/normalizers/primitives/normalizePositiveNumber.js';

describe('normalizePositiveNumber', () => {
    it('returns number primitives unchanged if valid', () => {
        expect(normalizePositiveNumber(0.1)).toBe(0.1);
        expect(normalizePositiveNumber(5)).toBe(5);
        expect(normalizePositiveNumber(3.14)).toBe(3.14);
    });

    it('returns null for zero or negative numbers', () => {
        expect(normalizePositiveNumber(0)).toBeNull();
        expect(normalizePositiveNumber(-1)).toBeNull();
        expect(normalizePositiveNumber(-3.14)).toBeNull();
    });

    it('parses valid numeric strings', () => {
        expect(normalizePositiveNumber('0.1')).toBe(0.1);
        expect(normalizePositiveNumber('42')).toBe(42);
        expect(normalizePositiveNumber(' 3.14 ')).toBe(3.14);
    });

    it('returns null for invalid strings', () => {
        expect(normalizePositiveNumber('0')).toBeNull();
        expect(normalizePositiveNumber('-1')).toBeNull();
        expect(normalizePositiveNumber('abc')).toBeNull();
        expect(normalizePositiveNumber('')).toBeNull();
        expect(normalizePositiveNumber(' ')).toBeNull();
    });

    it('returns null for NaN, Infinity, -Infinity', () => {
        expect(normalizePositiveNumber(NaN)).toBeNull();
        expect(normalizePositiveNumber(Infinity)).toBeNull();
        expect(normalizePositiveNumber(-Infinity)).toBeNull();
    });

    it('returns null for non-number/string types', () => {
        const invalid: unknown[] = [true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(normalizePositiveNumber(val)).toBeNull();
        }
    });
});
