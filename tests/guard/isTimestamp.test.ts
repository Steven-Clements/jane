import { describe, it, expect } from 'vitest';
import isTimestamp from '../../src/guard/isTimestamp.js';

describe('isTimestamp', () => {
    it('returns true for valid numeric timestamps', () => {
        expect(isTimestamp(Date.now())).toBe(true);
        expect(isTimestamp(1700000000000)).toBe(true);
        expect(isTimestamp(0)).toBe(true);
    });

    it('returns false for non-numbers', () => {
        expect(isTimestamp('123')).toBe(false);
        expect(isTimestamp(null)).toBe(false);
        expect(isTimestamp(undefined)).toBe(false);
        expect(isTimestamp({})).toBe(false);
        expect(isTimestamp([])).toBe(false);
        expect(isTimestamp(() => {})).toBe(false);
    });

    it('returns false for invalid numbers', () => {
        expect(isTimestamp(NaN)).toBe(false);
        expect(isTimestamp(Infinity)).toBe(false);
        expect(isTimestamp(-Infinity)).toBe(false);
    });
});
