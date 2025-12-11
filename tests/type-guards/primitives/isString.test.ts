import { describe, it, expect } from 'vitest';
import isString from '../../../src/type-guards/primitives/isString.js';

describe('isString', () => {
    it('returns true for primitive strings', () => {
        expect(isString('hello')).toBe(true);
        expect(isString('')).toBe(true);
    });

    it('returns false for non-strings', () => {
        expect(isString(123)).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString(Symbol('x'))).toBe(false);
        expect(isString(() => {})).toBe(false);
        expect(isString(true)).toBe(false);
        expect(isString(BigInt(10))).toBe(false);
    });

    it('returns false for String objects', () => {
        expect(isString(new String('hello'))).toBe(false);
    });
});
