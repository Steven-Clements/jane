import { describe, it, expect } from 'vitest';
import isNullOrUndefined from '../../../src/type-guards/primitives/isNullOrUndefined.js';

describe('isNullOrUndefined', () => {
    it('returns true for null', () => {
        expect(isNullOrUndefined(null)).toBe(true);
    });

    it('returns true for undefined', () => {
        expect(isNullOrUndefined(undefined)).toBe(true);
    });

    it('returns false for all other types', () => {
        expect(isNullOrUndefined(0)).toBe(false);
        expect(isNullOrUndefined('')).toBe(false);
        expect(isNullOrUndefined(false)).toBe(false);
        expect(isNullOrUndefined({})).toBe(false);
        expect(isNullOrUndefined([])).toBe(false);
        expect(isNullOrUndefined(() => {})).toBe(false);
        expect(isNullOrUndefined(Symbol())).toBe(false);
        expect(isNullOrUndefined(1n)).toBe(false);
    });
});
