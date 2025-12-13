import { describe, it, expect } from 'vitest';
import validateJSON from '../../../src/validators/semantic/validateJSON';
import type { JSONValue } from '../../../src/types';

describe('validateJSON', () => {
    it('returns ok:true for valid JSON primitives', () => {
        expect(validateJSON(null, 'field').ok).toBe(true);
        expect(validateJSON(true, 'field').ok).toBe(true);
        expect(validateJSON(false, 'field').ok).toBe(true);
        expect(validateJSON(42, 'field').ok).toBe(true);
        expect(validateJSON('string', 'field').ok).toBe(true);
    });

    it('returns ok:true for valid JSON arrays', () => {
        const arr1: JSONValue[] = [1, 2, 3];
        expect(validateJSON(arr1, 'field').ok).toBe(true);

        const arr2: JSONValue[] = [1, [2, 3], 'a'];
        expect(validateJSON(arr2, 'field').ok).toBe(true);
    });

    it('returns ok:true for valid JSON objects', () => {
        const obj1: Record<string, JSONValue> = { a: 1, b: 'x', c: null };
        expect(validateJSON(obj1, 'field').ok).toBe(true);

        const obj2: Record<string, JSONValue> = { nested: { a: 1 } };
        expect(validateJSON(obj2, 'field').ok).toBe(true);
    });

    it('rejects circular references', () => {
        const obj: { self?: Record<string, JSONValue> } = {};
        obj.self = obj as Record<string, JSONValue>;
        expect(validateJSON(obj, 'field').ok).toBe(false);

        const arr: JSONValue[] = [];
        arr.push(arr);
        expect(validateJSON(arr, 'field').ok).toBe(false);
    });

    it('rejects objects with non-plain prototypes', () => {
        const map = new Map<string, string>();
        expect(validateJSON(map, 'field').ok).toBe(false);

        const date = new Date();
        expect(validateJSON(date, 'field').ok).toBe(false);
    });

    it('rejects non-JSON types', () => {
        expect(validateJSON(undefined, 'field').ok).toBe(false);
        expect(validateJSON(() => 42, 'field').ok).toBe(false);
        expect(validateJSON(Symbol('s'), 'field').ok).toBe(false);
        expect(validateJSON(BigInt(123), 'field').ok).toBe(false);
        expect(validateJSON(NaN, 'field').ok).toBe(false);
        expect(validateJSON(Infinity, 'field').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateJSON(Symbol('s'), 'field')).not.toThrow();
        expect(() => validateJSON(undefined, 'field')).not.toThrow();
    });
});
