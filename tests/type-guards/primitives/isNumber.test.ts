import { describe, it, expect } from 'vitest';
import isNumber from '../../../src/type-guards/primitives/isNumber.js';

describe('isNumber', () => {
    it('returns true for primitive numbers', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber(42)).toBe(true);
        expect(isNumber(-3.14)).toBe(true);
        expect(isNumber(NaN)).toBe(true);
        expect(isNumber(Infinity)).toBe(true);
        expect(isNumber(-Infinity)).toBe(true);
    });

    it('returns false for bigint values', () => {
        expect(isNumber(0n)).toBe(false);
        expect(isNumber(10n)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isNumber(new Number(5))).toBe(false);
        expect(isNumber(Object(1))).toBe(false);
    });

    it('returns false for non-number types', () => {
        expect(isNumber('123')).toBe(false);
        expect(isNumber(true)).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber(() => {})).toBe(false);
    });
});
