import { describe, it, expect } from 'vitest';
import isIterable from '../../../src/type-guards/protocols/isIterable.js';

describe('isIterable', () => {
    it('returns true for built-in iterables', () => {
        expect(isIterable([])).toBe(true);
        expect(isIterable([1, 2, 3])).toBe(true);
        expect(isIterable('abc')).toBe(true);
        expect(isIterable(new Map())).toBe(true);
        expect(isIterable(new Set())).toBe(true);
    });

    it('returns true for custom iterables', () => {
        const custom = {
            *[Symbol.iterator]() {
                yield 1;
            },
        };
        expect(isIterable(custom)).toBe(true);
    });

    it('returns false for non-iterables', () => {
        expect(isIterable({})).toBe(false);
        expect(isIterable({ a: 1 })).toBe(false);
        expect(isIterable(123)).toBe(false);
        expect(isIterable(true)).toBe(false);
        expect(isIterable(() => {})).toBe(false);
        expect(isIterable(Symbol())).toBe(false);
        expect(isIterable(1n)).toBe(false);
    });

    it('returns false for null and undefined', () => {
        expect(isIterable(null)).toBe(false);
        expect(isIterable(undefined)).toBe(false);
    });
});
