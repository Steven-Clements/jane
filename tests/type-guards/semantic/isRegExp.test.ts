import { describe, it, expect } from 'vitest';
import isRegExp from '../../../src/type-guards/semantic/isRegExp.js';

describe('isRegExp', () => {
    it('returns true for RegExp instances', () => {
        expect(isRegExp(/abc/)).toBe(true);
        expect(isRegExp(new RegExp('abc'))).toBe(true);
    });

    it('returns true for RegExp wrapper objects', () => {
        expect(isRegExp(Object(/abc/))).toBe(true);
        expect(isRegExp(new Object(/abc/))).toBe(true);
    });

    it('returns false for strings, even if they look like regexes', () => {
        expect(isRegExp('/abc/')).toBe(false);
        expect(isRegExp('abc')).toBe(false);
    });

    it('returns false for non-RegExp types', () => {
        expect(isRegExp(123)).toBe(false);
        expect(isRegExp(true)).toBe(false);
        expect(isRegExp(null)).toBe(false);
        expect(isRegExp(undefined)).toBe(false);
        expect(isRegExp({})).toBe(false);
        expect(isRegExp([])).toBe(false);
        expect(isRegExp(() => {})).toBe(false);
        expect(isRegExp(Symbol())).toBe(false);
        expect(isRegExp(1n)).toBe(false);
    });
});
