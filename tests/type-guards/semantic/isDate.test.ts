import { describe, it, expect } from 'vitest';
import isDate from '../../../src/type-guards/semantic/isDate.js';

describe('isDate', () => {
    it('returns true for valid Date instances', () => {
        expect(isDate(new Date())).toBe(true);
    });

    it('returns false for invalid dates', () => {
        expect(isDate(new Date('invalid'))).toBe(false);
    });

    it('returns false for non-dates', () => {
        expect(isDate('2020-01-01')).toBe(false);
        expect(isDate(null)).toBe(false);
    });
});
