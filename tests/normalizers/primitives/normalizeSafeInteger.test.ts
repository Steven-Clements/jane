import { describe, it, expect } from 'vitest';
import normalizeSafeInteger from '../../../src/normalizers/primitives/normalizeSafeInteger.js';

describe('normalizeSafeInteger', () => {
    it('returns safe integers unchanged', () => {
        expect(normalizeSafeInteger(0)).toBe(0);
        expect(normalizeSafeInteger(42)).toBe(42);
        expect(normalizeSafeInteger(-7)).toBe(-7);
        expect(normalizeSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
        expect(normalizeSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
    });

    it('returns null for unsafe or invalid numbers', () => {
        expect(normalizeSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBeNull();
        expect(normalizeSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBeNull();
        expect(normalizeSafeInteger(3.14)).toBeNull();
        expect(normalizeSafeInteger(Infinity)).toBeNull();
        expect(normalizeSafeInteger(-Infinity)).toBeNull();
        expect(normalizeSafeInteger(NaN)).toBeNull();
    });

    it('normalizes valid integer strings', () => {
        expect(normalizeSafeInteger('0')).toBe(0);
        expect(normalizeSafeInteger('42')).toBe(42);
        expect(normalizeSafeInteger('-7')).toBe(-7);
        expect(normalizeSafeInteger('0007')).toBe(7);
        expect(normalizeSafeInteger('  -12  ')).toBe(-12);
    });

    it('returns null for invalid integer strings', () => {
        expect(normalizeSafeInteger('')).toBeNull();
        expect(normalizeSafeInteger('   ')).toBeNull();
        expect(normalizeSafeInteger('+5')).toBeNull();
        expect(normalizeSafeInteger('3.14')).toBeNull();
        expect(normalizeSafeInteger('1e3')).toBeNull();
        expect(normalizeSafeInteger('--1')).toBeNull();
        expect(normalizeSafeInteger('12abc')).toBeNull();
    });

    it('returns null for non-string, non-number values', () => {
        expect(normalizeSafeInteger(true)).toBeNull();
        expect(normalizeSafeInteger(false)).toBeNull();
        expect(normalizeSafeInteger(null)).toBeNull();
        expect(normalizeSafeInteger(undefined)).toBeNull();
        expect(normalizeSafeInteger({})).toBeNull();
        expect(normalizeSafeInteger([])).toBeNull();
        expect(normalizeSafeInteger(Symbol())).toBeNull();
        expect(normalizeSafeInteger(() => {})).toBeNull();
    });
});
