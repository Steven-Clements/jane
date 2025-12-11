import { describe, it, expect } from 'vitest';
import isFunction from '../../../src/type-guards/semantic/isFunction.js';

describe('isFunction', () => {
    // Standard functions
    it('returns true for standard functions', () => {
        expect(isFunction(function () {})).toBe(true);
        expect(isFunction(() => {})).toBe(true);
    });

    // Class constructors
    it('returns true for class constructors', () => {
        class MyClass {}
        expect(isFunction(MyClass)).toBe(true);
    });

    // Async functions
    it('returns true for async functions', () => {
        expect(isFunction(async function () {})).toBe(true);
        expect(isFunction(async () => {})).toBe(true);
    });

    // Generator functions
    it('returns true for generator functions', () => {
        function* gen() {
            yield 1;
        }
        expect(isFunction(gen)).toBe(true);
    });

    // Bound functions
    it('returns true for bound functions', () => {
        const fn = () => {};
        const bound = fn.bind(null);
        expect(isFunction(bound)).toBe(true);
    });

    // Built-in functions
    it('returns true for built-in functions', () => {
        expect(isFunction(Math.max)).toBe(true);
        expect(isFunction(Promise.resolve)).toBe(true);
    });

    // Non-functions
    it('returns false for non-functions', () => {
        expect(isFunction(123)).toBe(false);
        expect(isFunction('abc')).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction(true)).toBe(false);
        expect(isFunction([])).toBe(false);
        expect(isFunction(Symbol())).toBe(false);
        expect(isFunction(1n)).toBe(false);
    });
});
