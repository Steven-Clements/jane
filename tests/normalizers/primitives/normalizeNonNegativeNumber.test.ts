import { describe, it, expect } from 'vitest';
import normalizeNonNegativeNumber from '../../../src/normalizers/primitives/normalizeNonNegativeNumber.js';

describe('normalizeNonNegativeNumber', () => {
    it('returns non-negative numbers unchanged', () => {
        expect(normalizeNonNegativeNumber(0)).toBe(0);
        expect(normalizeNonNegativeNumber(3)).toBe(3);
        expect(normalizeNonNegativeNumber(3.14)).toBe(3.14);
        expect(normalizeNonNegativeNumber(1000)).toBe(1000);
    });

    it('returns null for negative or non-finite numbers', () => {
        expect(normalizeNonNegativeNumber(-1)).toBeNull();
        expect(normalizeNonNegativeNumber(-0.1)).toBeNull();
        expect(normalizeNonNegativeNumber(Infinity)).toBeNull();
        expect(normalizeNonNegativeNumber(-Infinity)).toBeNull();
        expect(normalizeNonNegativeNumber(NaN)).toBeNull();
    });

    it('normalizes valid non-negative numeric strings', () => {
        expect(normalizeNonNegativeNumber('0')).toBe(0);
        expect(normalizeNonNegativeNumber('3')).toBe(3);
        expect(normalizeNonNegativeNumber('3.14')).toBe(3.14);
        expect(normalizeNonNegativeNumber('0007')).toBe(7);
        expect(normalizeNonNegativeNumber('  12.5  ')).toBe(12.5);
    });

    it('returns null for invalid numeric strings', () => {
        expect(normalizeNonNegativeNumber('')).toBeNull();
        expect(normalizeNonNegativeNumber('   ')).toBeNull();
        expect(normalizeNonNegativeNumber('-1')).toBeNull();
        expect(normalizeNonNegativeNumber('+5')).toBeNull();
        expect(normalizeNonNegativeNumber('1e3')).toBeNull();
        expect(normalizeNonNegativeNumber('3.14.15')).toBeNull();
        expect(normalizeNonNegativeNumber('abc')).toBeNull();
        expect(normalizeNonNegativeNumber('12abc')).toBeNull();
    });

    it('returns null for non-string, non-number values', () => {
        expect(normalizeNonNegativeNumber(true)).toBeNull();
        expect(normalizeNonNegativeNumber(false)).toBeNull();
        expect(normalizeNonNegativeNumber(null)).toBeNull();
        expect(normalizeNonNegativeNumber(undefined)).toBeNull();
        expect(normalizeNonNegativeNumber({})).toBeNull();
        expect(normalizeNonNegativeNumber([])).toBeNull();
        expect(normalizeNonNegativeNumber(Symbol())).toBeNull();
        expect(normalizeNonNegativeNumber(() => {})).toBeNull();
    });
});
