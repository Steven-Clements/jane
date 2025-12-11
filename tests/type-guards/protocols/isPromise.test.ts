import { describe, it, expect } from 'vitest';
import isPromise from '../../../src/type-guards/protocols/isPromise.js';

describe('isPromise', () => {
    it('returns true for native Promise instances', () => {
        expect(isPromise(Promise.resolve(123))).toBe(true);
        expect(isPromise(new Promise(() => {}))).toBe(true);
    });

    it('returns true for Promise subclasses', () => {
        class MyPromise extends Promise<unknown> {}
        const p = new MyPromise(() => {});
        expect(isPromise(p)).toBe(true);
    });

    it('returns false for thenables', () => {
        expect(isPromise({ then() {} })).toBe(false);
        expect(isPromise({ then: () => {} })).toBe(false);
    });

    it('returns false for non-Promise types', () => {
        expect(isPromise(null)).toBe(false);
        expect(isPromise(undefined)).toBe(false);
        expect(isPromise(123)).toBe(false);
        expect(isPromise('abc')).toBe(false);
        expect(isPromise({})).toBe(false);
        expect(isPromise([])).toBe(false);
        expect(isPromise(() => {})).toBe(false);
        expect(isPromise(Symbol())).toBe(false);
        expect(isPromise(1n)).toBe(false);
    });
});
