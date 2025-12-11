import { describe, it, expect } from 'vitest';
import isObject from '../../../src/type-guards/structural/isObject.js';

describe('isObject', () => {
    it('returns true for objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ a: 1 })).toBe(true);
        expect(isObject(Object.create(null))).toBe(true);
    });

    it('returns false for null', () => {
        expect(isObject(null)).toBe(false);
    });

    it('returns false for arrays', () => {
        expect(isObject([])).toBe(false);
        expect(isObject([1, 2, 3])).toBe(false);
    });

    it('returns false for non-objects', () => {
        expect(isObject(123)).toBe(false);
        expect(isObject('abc')).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(() => {})).toBe(false);
    });
});
