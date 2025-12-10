import { describe, it, expect } from 'vitest';
import isFunction from '../../src/guards/isFunction.js';

describe('isFunction', () => {
    it('returns true for functions', () => {
        expect(isFunction(() => {})).toBe(true);
        expect(isFunction(function () {})).toBe(true);
        expect(isFunction(class X {})).toBe(true);
    });

    it('returns false for non-functions', () => {
        expect(isFunction(123)).toBe(false);
        expect(isFunction('abc')).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(null)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
    });
});
