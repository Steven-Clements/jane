import { describe, it, expect } from 'vitest';
import normalizeFiniteNumber from '../../../src/normalizers/primitives/normalizeFiniteNumber.js';

describe('normalizeFiniteNumber', () => {
    it('returns finite numbers unchanged', () => {
        expect(normalizeFiniteNumber(0)).toBe(0);
        expect(normalizeFiniteNumber(3)).toBe(3);
        expect(normalizeFiniteNumber(3.14)).toBe(3.14);
        expect(normalizeFiniteNumber(-7)).toBe(-7);
    });

    it('returns null for non-finite numbers', () => {
        expect(normalizeFiniteNumber(Infinity)).toBeNull();
        expect(normalizeFiniteNumber(-Infinity)).toBeNull();
        expect(normalizeFiniteNumber(NaN)).toBeNull();
    });

    it('normalizes valid numeric strings', () => {
        expect(normalizeFiniteNumber('0')).toBe(0);
        expect(normalizeFiniteNumber('3')).toBe(3);
        expect(normalizeFiniteNumber('3.14')).toBe(3.14);
        expect(normalizeFiniteNumber('-7')).toBe(-7);
        expect(normalizeFiniteNumber('0007')).toBe(7);
        expect(normalizeFiniteNumber('  12.5  ')).toBe(12.5);
    });

    it('returns null for invalid numeric strings', () => {
        expect(normalizeFiniteNumber('')).toBeNull();
        expect(normalizeFiniteNumber('   ')).toBeNull();
        expect(normalizeFiniteNumber('+5')).toBeNull();
        expect(normalizeFiniteNumber('1e3')).toBeNull();
        expect(normalizeFiniteNumber('3.14.15')).toBeNull();
        expect(normalizeFiniteNumber('--1')).toBeNull();
        expect(normalizeFiniteNumber('12abc')).toBeNull();
    });

    it('returns null for non-string, non-number values', () => {
        expect(normalizeFiniteNumber(true)).toBeNull();
        expect(normalizeFiniteNumber(false)).toBeNull();
        expect(normalizeFiniteNumber(null)).toBeNull();
        expect(normalizeFiniteNumber(undefined)).toBeNull();
        expect(normalizeFiniteNumber({})).toBeNull();
        expect(normalizeFiniteNumber([])).toBeNull();
        expect(normalizeFiniteNumber(Symbol())).toBeNull();
        expect(normalizeFiniteNumber(() => {})).toBeNull();
    });
});
