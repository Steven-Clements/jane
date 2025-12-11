import { describe, it, expect } from 'vitest';
import isArray from '../../../src/type-guards/structural/isArray.js';

describe('isArray', () => {
    it('returns true for arrays', () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray(Object.freeze([1, 2, 3]))).toBe(true);
    });

    it('returns false for non-arrays', () => {
        expect(isArray({})).toBe(false);
        expect(isArray('abc')).toBe(false);
        expect(isArray(null)).toBe(false);
        expect(isArray(undefined)).toBe(false);
        expect(isArray(123)).toBe(false);
    });
});
