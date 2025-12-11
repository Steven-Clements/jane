import { describe, it, expect } from 'vitest';
import isNonEmptyString from '../../../src/type-guards/primitives/isNonEmptyString.js';

describe('isNonEmptyString', () => {
    it('returns true for non-empty primitive strings', () => {
        expect(isNonEmptyString('hello')).toBe(true);
        expect(isNonEmptyString(' ')).toBe(true);
        expect(isNonEmptyString(' a ')).toBe(true);
        expect(isNonEmptyString('\u200B')).toBe(true); // zero-width space
    });

    it('returns false for empty strings', () => {
        expect(isNonEmptyString('')).toBe(false);
    });

    it('returns false for non-strings', () => {
        expect(isNonEmptyString(123)).toBe(false);
        expect(isNonEmptyString(null)).toBe(false);
        expect(isNonEmptyString(undefined)).toBe(false);
        expect(isNonEmptyString({})).toBe(false);
        expect(isNonEmptyString([])).toBe(false);
        expect(isNonEmptyString(Symbol('x'))).toBe(false);
        expect(isNonEmptyString(() => {})).toBe(false);
        expect(isNonEmptyString(true)).toBe(false);
        expect(isNonEmptyString(BigInt(10))).toBe(false);
    });

    it('returns false for String objects', () => {
        expect(isNonEmptyString(new String('hello'))).toBe(false);
    });
});
