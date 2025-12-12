import { describe, it, expect } from 'vitest';
import normalizeIterable from '../../../src/normalizers/protocols/normalizeIterable.js';

describe('normalizeIterable', () => {
    it('returns arrays unchanged', () => {
        const arr = [1, 2, 3];
        expect(normalizeIterable(arr)).toBe(arr);
    });

    it('returns strings unchanged', () => {
        const s = 'abc';
        expect(normalizeIterable(s)).toBe(s);
    });

    it('accepts sets', () => {
        const set = new Set([1, 2]);
        expect(normalizeIterable(set)).toBe(set);
    });

    it('accepts maps', () => {
        const map = new Map([[1, 'a']]);
        expect(normalizeIterable(map)).toBe(map);
    });

    it('accepts typed arrays', () => {
        const ta = new Uint8Array([1, 2]);
        expect(normalizeIterable(ta)).toBe(ta);
    });

    it('accepts generator objects', () => {
        function* gen() {
            yield 1;
        }
        const g = gen();
        expect(normalizeIterable(g)).toBe(g);
    });

    it('accepts custom iterable objects', () => {
        const custom = {
            *[Symbol.iterator]() {
                yield 1;
                yield 2;
            },
        };
        expect(normalizeIterable(custom)).toBe(custom);
    });

    it('returns null for non‑iterable values', () => {
        expect(normalizeIterable(null)).toBeNull();
        expect(normalizeIterable(undefined)).toBeNull();
        expect(normalizeIterable(123)).toBeNull();
        expect(normalizeIterable(true)).toBeNull();
        expect(normalizeIterable({})).toBeNull();
        expect(normalizeIterable(() => {})).toBeNull();
    });

    it('returns null for objects with non‑callable Symbol.iterator', () => {
        const bad = { [Symbol.iterator]: 123 };
        expect(normalizeIterable(bad)).toBeNull();
    });

    it('returns null when accessing Symbol.iterator throws', () => {
        const hostile = {
            get [Symbol.iterator]() {
                throw new Error('nope');
            },
        };
        expect(normalizeIterable(hostile)).toBeNull();
    });

    it('returns null when calling the iterator throws', () => {
        const hostile = {
            [Symbol.iterator]() {
                throw new Error('boom');
            },
        };
        expect(normalizeIterable(hostile)).toBeNull();
    });

    it('returns null when iterator does not return an object', () => {
        const bad = {
            [Symbol.iterator]() {
                return null as unknown as Iterator<unknown>;
            },
        };
        expect(normalizeIterable(bad)).toBeNull();
    });
});
