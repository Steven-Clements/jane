import { describe, it, expect } from 'vitest';
import isWeakSet from '../../../src/type-guards/collections/isWeakSet.js';

describe('isWeakSet', () => {
    it('returns true for WeakSet instances', () => {
        expect(isWeakSet(new WeakSet())).toBe(true);
        const ws = new WeakSet([{}]);
        expect(isWeakSet(ws)).toBe(true);
    });

    it('returns true for WeakSet wrapper objects', () => {
        expect(isWeakSet(Object(new WeakSet()))).toBe(true);
        expect(isWeakSet(new Object(new WeakSet()))).toBe(true);
    });

    it('returns true for WeakSet subclasses', () => {
        class MyWeakSet<T extends object> extends WeakSet<T> {}
        const s = new MyWeakSet();
        expect(isWeakSet(s)).toBe(true);
    });

    it('returns false for non-WeakSet objects', () => {
        expect(isWeakSet({})).toBe(false);
        expect(isWeakSet([])).toBe(false);
        expect(isWeakSet(new Set())).toBe(false);
        expect(isWeakSet(new Map())).toBe(false);
        expect(isWeakSet(new WeakMap())).toBe(false);
    });

    it('returns false for non-object types', () => {
        expect(isWeakSet(null)).toBe(false);
        expect(isWeakSet(undefined)).toBe(false);
        expect(isWeakSet(123)).toBe(false);
        expect(isWeakSet('abc')).toBe(false);
        expect(isWeakSet(true)).toBe(false);
        expect(isWeakSet(() => {})).toBe(false);
        expect(isWeakSet(Symbol())).toBe(false);
        expect(isWeakSet(1n)).toBe(false);
    });
});
