import { describe, it, expect } from 'vitest';
import isFiniteNumber from '../../../src/type-guards/primitives/isFiniteNumber.js';

describe('isFiniteNumber', () => {
    it('returns true for finite primitive numbers', () => {
        expect(isFiniteNumber(0)).toBe(true);
        expect(isFiniteNumber(42)).toBe(true);
        expect(isFiniteNumber(-3.14)).toBe(true);
        expect(isFiniteNumber(123.456)).toBe(true);
    });

    it('returns false for NaN', () => {
        expect(isFiniteNumber(NaN)).toBe(false);
    });

    it('returns false for Infinity and -Infinity', () => {
        expect(isFiniteNumber(Infinity)).toBe(false);
        expect(isFiniteNumber(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        expect(isFiniteNumber('123')).toBe(false);
        expect(isFiniteNumber('0')).toBe(false);
        expect(isFiniteNumber(true)).toBe(false);
        expect(isFiniteNumber(null)).toBe(false);
        expect(isFiniteNumber(undefined)).toBe(false);
        expect(isFiniteNumber({})).toBe(false);
        expect(isFiniteNumber([])).toBe(false);
        expect(isFiniteNumber(() => {})).toBe(false);
    });

    it('returns false for bigint values', () => {
        expect(isFiniteNumber(0n)).toBe(false);
        expect(isFiniteNumber(10n)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isFiniteNumber(new Number(5))).toBe(false);
        expect(isFiniteNumber(Object(1))).toBe(false);
    });
});
