import { describe, it, expect } from 'vitest';
import isMap from '../../../src/type-guards/collections/isMap.js';

describe('isMap', () => {
    it('returns true for Map instances', () => {
        expect(isMap(new Map())).toBe(true);
        expect(isMap(new Map([['a', 1]]))).toBe(true);
    });

    it('returns true for Map wrapper objects', () => {
        expect(isMap(Object(new Map()))).toBe(true);
        expect(isMap(new Object(new Map()))).toBe(true);
    });

    it('returns true for Map subclasses', () => {
        class MyMap<K, V> extends Map<K, V> {}
        const m = new MyMap();
        expect(isMap(m)).toBe(true);
    });

    it('returns false for non-Map objects', () => {
        expect(isMap({})).toBe(false);
        expect(isMap([])).toBe(false);
        expect(isMap(new Set())).toBe(false);
        expect(isMap(new WeakMap())).toBe(false);
    });

    it('returns false for non-object types', () => {
        expect(isMap(null)).toBe(false);
        expect(isMap(undefined)).toBe(false);
        expect(isMap(123)).toBe(false);
        expect(isMap('abc')).toBe(false);
        expect(isMap(true)).toBe(false);
        expect(isMap(() => {})).toBe(false);
        expect(isMap(Symbol())).toBe(false);
        expect(isMap(1n)).toBe(false);
    });
});
