import { describe, it, expect } from 'vitest';
import isPromise from '../../src/guard/isPromise.js';

describe('isPromise', () => {
    it('returns true for native Promises', () => {
        expect(isPromise(Promise.resolve(1))).toBe(true);
        expect(isPromise(new Promise(() => {}))).toBe(true);
    });

    it('returns true for Promise-like objects', () => {
        const thenable = { then: () => {} };
        expect(isPromise(thenable)).toBe(true);
    });

    it('returns false for objects without a callable then', () => {
        expect(isPromise({})).toBe(false);
        expect(isPromise({ then: 123 })).toBe(false);
        expect(isPromise({ then: null })).toBe(false);
    });

    it('returns false for non-objects', () => {
        expect(isPromise(null)).toBe(false);
        expect(isPromise(undefined)).toBe(false);
        expect(isPromise('abc')).toBe(false);
        expect(isPromise(123)).toBe(false);
        expect(isPromise(() => {})).toBe(false);
    });
});
