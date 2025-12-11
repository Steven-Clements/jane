import { describe, it, expect } from 'vitest';
import isTimestamp from '../../../src/type-guards/semantic/isTimestamp.js';

describe('isTimestamp', () => {
    it('returns true for finite integer millisecond timestamps', () => {
        expect(isTimestamp(0)).toBe(true); // epoch
        expect(isTimestamp(1700000000000)).toBe(true); // future date
        expect(isTimestamp(-1000)).toBe(true); // pre-epoch
    });

    it('returns false for fractional numbers', () => {
        expect(isTimestamp(123.45)).toBe(false);
        expect(isTimestamp(-10.1)).toBe(false);
    });

    it('returns false for NaN, Infinity, and -Infinity', () => {
        expect(isTimestamp(NaN)).toBe(false);
        expect(isTimestamp(Infinity)).toBe(false);
        expect(isTimestamp(-Infinity)).toBe(false);
    });

    it('returns false for non-number types', () => {
        expect(isTimestamp('1700000000000')).toBe(false);
        expect(isTimestamp(true)).toBe(false);
        expect(isTimestamp(null)).toBe(false);
        expect(isTimestamp(undefined)).toBe(false);
        expect(isTimestamp({})).toBe(false);
        expect(isTimestamp([])).toBe(false);
        expect(isTimestamp(() => {})).toBe(false);
        expect(isTimestamp(Symbol())).toBe(false);
        expect(isTimestamp(1n)).toBe(false);
    });

    it('returns false for Number objects', () => {
        expect(isTimestamp(new Number(1700000000000))).toBe(false);
        expect(isTimestamp(Object(1))).toBe(false);
    });
});
