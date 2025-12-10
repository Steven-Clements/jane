import { describe, it, expect } from 'vitest';
import isJSON from '../../src/guard/isJSON.js';

describe('isJSON', () => {
    it('returns true for primitive JSON values', () => {
        expect(isJSON(null)).toBe(true);
        expect(isJSON(true)).toBe(true);
        expect(isJSON(false)).toBe(true);
        expect(isJSON(123)).toBe(true);
        expect(isJSON('abc')).toBe(true);
    });

    it('returns false for non-finite numbers', () => {
        expect(isJSON(NaN)).toBe(false);
        expect(isJSON(Infinity)).toBe(false);
        expect(isJSON(-Infinity)).toBe(false);
    });

    it('returns true for arrays of JSON values', () => {
        expect(isJSON([1, 'a', null])).toBe(true);
        expect(isJSON([])).toBe(true);
    });

    it('returns false for arrays containing non-JSON values', () => {
        expect(isJSON([1, undefined])).toBe(false);
        expect(isJSON([() => {}])).toBe(false);
    });

    it('returns true for plain objects with JSON values', () => {
        expect(isJSON({ a: 1, b: 'x', c: null })).toBe(true);
    });

    it('returns false for objects with non-JSON values', () => {
        expect(isJSON({ a: undefined })).toBe(false);
        expect(isJSON({ a: () => {} })).toBe(false);
        expect(isJSON({ a: Symbol() })).toBe(false);
    });

    it('returns false for objects with non-plain prototypes', () => {
        expect(isJSON(new Date())).toBe(false);
        expect(isJSON(Object.create(null))).toBe(false);
        expect(isJSON(new (class X {})())).toBe(false);
    });

    it('returns false for non-object, non-primitive types', () => {
        expect(isJSON(undefined)).toBe(false);
        expect(isJSON(() => {})).toBe(false);
        expect(isJSON(Symbol())).toBe(false);
        expect(isJSON(1n)).toBe(false);
    });
});
