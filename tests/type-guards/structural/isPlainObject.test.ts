import { describe, it, expect } from 'vitest';
import isPlainObject from '../../../src/type-guards/structural/isPlainObject.js';

describe('isPlainObject', () => {
    it('returns true for plain objects', () => {
        expect(isPlainObject({})).toBe(true);
        expect(isPlainObject({ a: 1 })).toBe(true);
        expect(isPlainObject(new Object())).toBe(true);
    });

    it('returns false for arrays, dates, and null', () => {
        expect(isPlainObject([])).toBe(false);
        expect(isPlainObject(new Date())).toBe(false);
        expect(isPlainObject(null)).toBe(false);
    });

    it('returns false for objects with custom prototypes', () => {
        expect(isPlainObject(Object.create(null))).toBe(false);
        expect(isPlainObject(Object.create({}))).toBe(false);
    });

    it('returns false for class constructors and instances', () => {
        class X {}
        expect(isPlainObject(X)).toBe(false);
        expect(isPlainObject(new X())).toBe(false);
    });

    it('returns false for non-objects', () => {
        expect(isPlainObject(123)).toBe(false);
        expect(isPlainObject('abc')).toBe(false);
        expect(isPlainObject(undefined)).toBe(false);
    });
});
