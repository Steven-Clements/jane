import { describe, it, expect } from 'vitest';
import normalizePositiveInteger from '../../../src/normalizers/primitives/normalizePositiveInteger.js';

describe('normalizePositiveInteger', () => {
    it('returns positive integers unchanged', () => {
        expect(normalizePositiveInteger(1)).toBe(1);
        expect(normalizePositiveInteger(42)).toBe(42);
        expect(normalizePositiveInteger(999)).toBe(999);
    });

    it('returns null for zero, negatives, floats, or non-finite numbers', () => {
        expect(normalizePositiveInteger(0)).toBeNull();
        expect(normalizePositiveInteger(-1)).toBeNull();
        expect(normalizePositiveInteger(3.14)).toBeNull();
        expect(normalizePositiveInteger(Infinity)).toBeNull();
        expect(normalizePositiveInteger(-Infinity)).toBeNull();
        expect(normalizePositiveInteger(NaN)).toBeNull();
    });

    it('normalizes valid positive integer strings', () => {
        expect(normalizePositiveInteger('1')).toBe(1);
        expect(normalizePositiveInteger('42')).toBe(42);
        expect(normalizePositiveInteger('0007')).toBe(7);
        expect(normalizePositiveInteger('  12  ')).toBe(12);
    });

    it('returns null for invalid numeric strings', () => {
        expect(normalizePositiveInteger('')).toBeNull();
        expect(normalizePositiveInteger('   ')).toBeNull();
        expect(normalizePositiveInteger('0')).toBeNull();
        expect(normalizePositiveInteger('-1')).toBeNull();
        expect(normalizePositiveInteger('+5')).toBeNull();
        expect(normalizePositiveInteger('3.14')).toBeNull();
        expect(normalizePositiveInteger('1e3')).toBeNull();
        expect(normalizePositiveInteger('abc')).toBeNull();
        expect(normalizePositiveInteger('12abc')).toBeNull();
    });

    it('returns null for non-string, non-number values', () => {
        expect(normalizePositiveInteger(true)).toBeNull();
        expect(normalizePositiveInteger(false)).toBeNull();
        expect(normalizePositiveInteger(null)).toBeNull();
        expect(normalizePositiveInteger(undefined)).toBeNull();
        expect(normalizePositiveInteger({})).toBeNull();
        expect(normalizePositiveInteger([])).toBeNull();
        expect(normalizePositiveInteger(Symbol())).toBeNull();
        expect(normalizePositiveInteger(() => {})).toBeNull();
    });
});
