import { describe, it, expect } from 'vitest';
import isNonEmptyArray from '../../../src/type-guards/structural/isNonEmptyArray.js';

describe('isNonEmptyArray', () => {
    it('returns true for arrays with at least one element', () => {
        expect(isNonEmptyArray([1])).toBe(true);
        expect(isNonEmptyArray(['a'])).toBe(true);
        expect(isNonEmptyArray([null])).toBe(true);
        expect(isNonEmptyArray([undefined])).toBe(true);
        expect(isNonEmptyArray([{}])).toBe(true);
    });

    it('returns false for empty arrays', () => {
        expect(isNonEmptyArray([])).toBe(false);
    });

    it('returns false for non-array types', () => {
        expect(isNonEmptyArray(123)).toBe(false);
        expect(isNonEmptyArray('abc')).toBe(false);
        expect(isNonEmptyArray(true)).toBe(false);
        expect(isNonEmptyArray(null)).toBe(false);
        expect(isNonEmptyArray(undefined)).toBe(false);
        expect(isNonEmptyArray({})).toBe(false);
        expect(isNonEmptyArray(() => {})).toBe(false);
        expect(isNonEmptyArray(Symbol())).toBe(false);
        expect(isNonEmptyArray(1n)).toBe(false);
    });
});
