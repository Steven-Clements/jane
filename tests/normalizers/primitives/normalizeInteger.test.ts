import { describe, it, expect } from 'vitest';
import normalizeInteger from '../../../src/normalizers/primitives/normalizeInteger.js';

describe('normalizeInteger', () => {
    it('returns finite native integers unchanged', () => {
        expect(normalizeInteger(0)).toBe(0);
        expect(normalizeInteger(42)).toBe(42);
        expect(normalizeInteger(-10)).toBe(-10);
    });

    it('returns null for non-integer numbers', () => {
        expect(normalizeInteger(3.14)).toBeNull();
        expect(normalizeInteger(-2.5)).toBeNull();
    });

    it('returns null for NaN or infinite numbers', () => {
        expect(normalizeInteger(NaN)).toBeNull();
        expect(normalizeInteger(Infinity)).toBeNull();
        expect(normalizeInteger(-Infinity)).toBeNull();
    });

    it('parses integer strings into integers', () => {
        expect(normalizeInteger('42')).toBe(42);
        expect(normalizeInteger('  42  ')).toBe(42);
        expect(normalizeInteger('-10')).toBe(-10);
        expect(normalizeInteger('  -10  ')).toBe(-10);
    });

    it('returns null for empty or whitespace-only strings', () => {
        expect(normalizeInteger('')).toBeNull();
        expect(normalizeInteger('   ')).toBeNull();
        expect(normalizeInteger('\n\t ')).toBeNull();
    });

    it('returns null for non-integer or malformed numeric strings', () => {
        expect(normalizeInteger('3.14')).toBeNull();
        expect(normalizeInteger('42px')).toBeNull();
        expect(normalizeInteger('1e309')).toBeNull(); // Infinity
        expect(normalizeInteger('abc')).toBeNull();
    });

    it('returns null for non-string, non-number values', () => {
        expect(normalizeInteger(true)).toBeNull();
        expect(normalizeInteger(false)).toBeNull();
        expect(normalizeInteger(null)).toBeNull();
        expect(normalizeInteger(undefined)).toBeNull();
        expect(normalizeInteger({})).toBeNull();
        expect(normalizeInteger([])).toBeNull();
        expect(normalizeInteger(Symbol())).toBeNull();
    });
});
