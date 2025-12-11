import { describe, it, expect } from 'vitest';
import isWeakMap from '../../../src/type-guards/collections/isWeakMap.js';

describe('isWeakMap', () => {
    it('returns true for WeakMap instances', () => {
        expect(isWeakMap(new WeakMap())).toBe(true);
        const wm = new WeakMap([[{}, 1]]);
        expect(isWeakMap(wm)).toBe(true);
    });

    it('returns true for WeakMap wrapper objects', () => {
        expect(isWeakMap(Object(new WeakMap()))).toBe(true);
        expect(isWeakMap(new Object(new WeakMap()))).toBe(true);
    });

    it('returns true for WeakMap subclasses', () => {
        class MyWeakMap<K extends object, V> extends WeakMap<K, V> {}
        const m = new MyWeakMap();
        expect(isWeakMap(m)).toBe(true);
    });

    it('returns false for non-WeakMap objects', () => {
        expect(isWeakMap({})).toBe(false);
        expect(isWeakMap([])).toBe(false);
        expect(isWeakMap(new Map())).toBe(false);
        expect(isWeakMap(new Set())).toBe(false);
        expect(isWeakMap(new WeakSet())).toBe(false);
    });

    it('returns false for non-object types', () => {
        expect(isWeakMap(null)).toBe(false);
        expect(isWeakMap(undefined)).toBe(false);
        expect(isWeakMap(123)).toBe(false);
        expect(isWeakMap('abc')).toBe(false);
        expect(isWeakMap(true)).toBe(false);
        expect(isWeakMap(() => {})).toBe(false);
        expect(isWeakMap(Symbol())).toBe(false);
        expect(isWeakMap(1n)).toBe(false);
    });
});
