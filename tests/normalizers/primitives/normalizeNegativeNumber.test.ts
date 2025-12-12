import { describe, it, expect } from 'vitest';
import normalizeNegativeNumber from '../../../src/normalizers/primitives/normalizeNegativeNumber.js';

describe('normalizeNegativeNumber', () => {
    it('returns number primitives unchanged if valid', () => {
        expect(normalizeNegativeNumber(-0.1)).toBe(-0.1);
        expect(normalizeNegativeNumber(-5)).toBe(-5);
        expect(normalizeNegativeNumber(-3.14)).toBe(-3.14);
    });

    it('returns null for zero or positive numbers', () => {
        expect(normalizeNegativeNumber(0)).toBeNull();
        expect(normalizeNegativeNumber(5)).toBeNull();
        expect(normalizeNegativeNumber(3.14)).toBeNull();
    });

    it('parses valid numeric strings', () => {
        expect(normalizeNegativeNumber('-0.1')).toBe(-0.1);
        expect(normalizeNegativeNumber('-42')).toBe(-42);
        expect(normalizeNegativeNumber(' -3.14 ')).toBe(-3.14);
    });

    it('returns null for invalid strings', () => {
        expect(normalizeNegativeNumber('0')).toBeNull();
        expect(normalizeNegativeNumber('42')).toBeNull();
        expect(normalizeNegativeNumber('abc')).toBeNull();
        expect(normalizeNegativeNumber('')).toBeNull();
        expect(normalizeNegativeNumber(' ')).toBeNull();
    });

    it('returns null for NaN, Infinity, -Infinity', () => {
        expect(normalizeNegativeNumber(NaN)).toBeNull();
        expect(normalizeNegativeNumber(Infinity)).toBeNull();
        expect(normalizeNegativeNumber(-Infinity)).toBeNull();
    });

    it('returns null for non-number/string types', () => {
        const invalid: unknown[] = [true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(normalizeNegativeNumber(val)).toBeNull();
        }
    });
});
