import { describe, it, expect } from 'vitest';
import isAsyncIterable from '../../../src/type-guards/protocols/isAsyncIterable.js';

describe('isAsyncIterable', () => {
    it('returns true for async generator instances', () => {
        async function* gen() {
            yield 1;
        }
        expect(isAsyncIterable(gen())).toBe(true);
    });

    it('returns true for custom async iterables', () => {
        const custom = {
            async *[Symbol.asyncIterator]() {
                yield 1;
            },
        };
        expect(isAsyncIterable(custom)).toBe(true);
    });

    it('returns false for sync iterables', () => {
        expect(isAsyncIterable([])).toBe(false);
        expect(isAsyncIterable('abc')).toBe(false);
        expect(isAsyncIterable(new Set())).toBe(false);
        expect(isAsyncIterable(new Map())).toBe(false);
    });

    it('returns false for non-iterables', () => {
        expect(isAsyncIterable({})).toBe(false);
        expect(isAsyncIterable(123)).toBe(false);
        expect(isAsyncIterable(true)).toBe(false);
        expect(isAsyncIterable(() => {})).toBe(false);
        expect(isAsyncIterable(Symbol())).toBe(false);
        expect(isAsyncIterable(1n)).toBe(false);
    });

    it('returns false for null and undefined', () => {
        expect(isAsyncIterable(null)).toBe(false);
        expect(isAsyncIterable(undefined)).toBe(false);
    });

    it('returns false when Symbol.asyncIterator exists but is not callable', () => {
        expect(isAsyncIterable({ [Symbol.asyncIterator]: 123 })).toBe(false);
        expect(isAsyncIterable({ [Symbol.asyncIterator]: null })).toBe(false);
    });
});
