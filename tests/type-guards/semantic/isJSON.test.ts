import { describe, it, expect } from 'vitest';
import isJSON, { type JSONValue } from '../../../src/type-guards/semantic/isJSON.js';

describe('isJSON', () => {
    it('returns true for primitive JSON values', () => {
        expect(isJSON(null)).toBe(true);
        expect(isJSON(true)).toBe(true);
        expect(isJSON(false)).toBe(true);
        expect(isJSON(123)).toBe(true);
        expect(isJSON('abc')).toBe(true);
    });

    it('returns false for non-finite numbers', () => {
        expect(isJSON(NaN)).toBe(false);
        expect(isJSON(Infinity)).toBe(false);
        expect(isJSON(-Infinity)).toBe(false);
    });

    it('returns true for arrays of JSON values', () => {
        const arr: JSONValue[] = [1, 'a', null];
        expect(isJSON(arr)).toBe(true);

        const empty: JSONValue[] = [];
        expect(isJSON(empty)).toBe(true);
    });

    it('returns false for arrays containing non-JSON values', () => {
        const arr: unknown[] = [1, undefined];
        expect(isJSON(arr)).toBe(false);

        const arr2: unknown[] = [() => {}];
        expect(isJSON(arr2)).toBe(false);
    });

    it('returns true for plain objects with JSON values', () => {
        const obj: Record<string, JSONValue> = { a: 1, b: 'x', c: null };
        expect(isJSON(obj)).toBe(true);
    });

    it('returns false for objects with non-JSON values', () => {
        const obj1: Record<string, unknown> = { a: undefined };
        const obj2: Record<string, unknown> = { a: () => {} };
        const obj3: Record<string, unknown> = { a: Symbol() };

        expect(isJSON(obj1)).toBe(false);
        expect(isJSON(obj2)).toBe(false);
        expect(isJSON(obj3)).toBe(false);
    });

    it('returns false for objects with non-plain prototypes', () => {
        expect(isJSON(new Date())).toBe(false);
        expect(isJSON(Object.create(null))).toBe(false);
        expect(isJSON(new (class X {})())).toBe(false);
    });

    it('returns false for non-object, non-primitive types', () => {
        expect(isJSON(undefined)).toBe(false);
        expect(isJSON(() => {})).toBe(false);
        expect(isJSON(Symbol())).toBe(false);
        expect(isJSON(1n)).toBe(false);
    });

    it('rejects circular references at runtime', () => {
        const arr: unknown[] = [];
        arr.push(arr); // circular array
        expect(isJSON(arr)).toBe(false);

        const obj: Record<string, unknown> = {};
        obj['self'] = obj; // circular object
        expect(isJSON(obj)).toBe(false);
    });
});
