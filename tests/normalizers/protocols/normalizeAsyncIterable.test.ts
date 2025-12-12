import { describe, it, expect } from 'vitest';
import normalizeAsyncIterable from '../../../src/normalizers/protocols/normalizeAsyncIterable.js';

describe('normalizeAsyncIterable', () => {
    it('accepts async generator objects', () => {
        async function* gen() {
            yield 1;
        }
        const g = gen();
        expect(normalizeAsyncIterable(g)).toBe(g);
    });

    it('accepts custom async iterable objects', () => {
        const custom = {
            async *[Symbol.asyncIterator]() {
                yield 1;
                yield 2;
            },
        };
        expect(normalizeAsyncIterable(custom)).toBe(custom);
    });

    it('returns null for non‑async‑iterable values', () => {
        expect(normalizeAsyncIterable(null)).toBeNull();
        expect(normalizeAsyncIterable(undefined)).toBeNull();
        expect(normalizeAsyncIterable(123)).toBeNull();
        expect(normalizeAsyncIterable('abc')).toBeNull();
        expect(normalizeAsyncIterable({})).toBeNull();
        expect(normalizeAsyncIterable([])).toBeNull();
        expect(normalizeAsyncIterable(() => {})).toBeNull();
    });

    it('returns null for objects with non‑callable Symbol.asyncIterator', () => {
        const bad = { [Symbol.asyncIterator]: 123 };
        expect(normalizeAsyncIterable(bad)).toBeNull();
    });

    it('returns null when accessing Symbol.asyncIterator throws', () => {
        const hostile = {
            get [Symbol.asyncIterator]() {
                throw new Error('nope');
            },
        };
        expect(normalizeAsyncIterable(hostile)).toBeNull();
    });

    it('returns null when calling the async iterator throws', () => {
        const hostile = {
            [Symbol.asyncIterator]() {
                throw new Error('boom');
            },
        };
        expect(normalizeAsyncIterable(hostile)).toBeNull();
    });

    it('returns null when async iterator does not return an object', () => {
        const bad = {
            [Symbol.asyncIterator]() {
                return null as unknown as AsyncIterator<unknown>;
            },
        };
        expect(normalizeAsyncIterable(bad)).toBeNull();
    });
});
