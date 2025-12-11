import { describe, it, expect } from 'vitest';
import isUndefined from '../../../src/type-guards/primitives/isUndefined.js';

describe('isUndefined', () => {
    it('returns true for undefined', () => {
        expect(isUndefined(undefined)).toBe(true);
    });

    it('returns false for null', () => {
        expect(isUndefined(null)).toBe(false);
    });

    it('returns false for all other types', () => {
        expect(isUndefined(0)).toBe(false);
        expect(isUndefined('')).toBe(false);
        expect(isUndefined(false)).toBe(false);
        expect(isUndefined({})).toBe(false);
        expect(isUndefined([])).toBe(false);
        expect(isUndefined(() => {})).toBe(false);
        expect(isUndefined(Symbol())).toBe(false);
        expect(isUndefined(1n)).toBe(false);
    });
});
