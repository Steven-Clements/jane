import { describe, it, expect } from 'vitest';
import normalizeNumber from '../../../src/normalizers/primitives/normalizeNumber.js';

describe('normalizeNumber', () => {
    it('returns finite native numbers unchanged', () => {
        expect(normalizeNumber(0)).toBe(0);
        expect(normalizeNumber(42)).toBe(42);
        expect(normalizeNumber(-10)).toBe(-10);
        expect(normalizeNumber(3.14)).toBe(3.14);
    });

    it('returns null for NaN or infinite numbers', () => {
        expect(normalizeNumber(NaN)).toBeNull();
        expect(normalizeNumber(Infinity)).toBeNull();
        expect(normalizeNumber(-Infinity)).toBeNull();
    });

    it('parses numeric strings into numbers', () => {
        expect(normalizeNumber('42')).toBe(42);
        expect(normalizeNumber('  42  ')).toBe(42);
        expect(normalizeNumber('3.14')).toBe(3.14);
        expect(normalizeNumber('-10')).toBe(-10);
        expect(normalizeNumber('  -10.5 ')).toBe(-10.5);
    });

    it('returns null for empty or whitespace-only strings', () => {
        expect(normalizeNumber('')).toBeNull();
        expect(normalizeNumber('   ')).toBeNull();
        expect(normalizeNumber('\n\t ')).toBeNull();
    });

    it('returns null for non-numeric strings', () => {
        expect(normalizeNumber('abc')).toBeNull();
        expect(normalizeNumber('42px')).toBeNull();
        expect(normalizeNumber('1e309')).toBeNull(); // Infinity
    });

    it('returns null for non-string, non-number values', () => {
        expect(normalizeNumber(true)).toBeNull();
        expect(normalizeNumber(false)).toBeNull();
        expect(normalizeNumber(null)).toBeNull();
        expect(normalizeNumber(undefined)).toBeNull();
        expect(normalizeNumber({})).toBeNull();
        expect(normalizeNumber([])).toBeNull();
        expect(normalizeNumber(Symbol())).toBeNull();
    });
});
