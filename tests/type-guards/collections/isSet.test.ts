import { describe, it, expect } from 'vitest';
import isSet from '../../../src/type-guards/collections/isSet.js';

describe('isSet', () => {
    it('returns true for Set instances', () => {
        expect(isSet(new Set())).toBe(true);
        expect(isSet(new Set([1, 2, 3]))).toBe(true);
    });

    it('returns true for Set wrapper objects', () => {
        expect(isSet(Object(new Set()))).toBe(true);
        expect(isSet(new Object(new Set()))).toBe(true);
    });

    it('returns true for Set subclasses', () => {
        class MySet<T> extends Set<T> {}
        const s = new MySet();
        expect(isSet(s)).toBe(true);
    });

    it('returns false for non-Set objects', () => {
        expect(isSet({})).toBe(false);
        expect(isSet([])).toBe(false);
        expect(isSet(new Map())).toBe(false);
        expect(isSet(new WeakSet())).toBe(false);
    });

    it('returns false for non-object types', () => {
        expect(isSet(null)).toBe(false);
        expect(isSet(undefined)).toBe(false);
        expect(isSet(123)).toBe(false);
        expect(isSet('abc')).toBe(false);
        expect(isSet(true)).toBe(false);
        expect(isSet(() => {})).toBe(false);
        expect(isSet(Symbol())).toBe(false);
        expect(isSet(1n)).toBe(false);
    });
});
