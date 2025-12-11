import { describe, it, expect } from 'vitest';
import isNull from '../../../src/type-guards/primitives/isNull.js';

describe('isNull', () => {
    it('returns true for null', () => {
        expect(isNull(null)).toBe(true);
    });

    it('returns false for undefined', () => {
        expect(isNull(undefined)).toBe(false);
    });

    it('returns false for all other types', () => {
        expect(isNull(0)).toBe(false);
        expect(isNull('')).toBe(false);
        expect(isNull(false)).toBe(false);
        expect(isNull({})).toBe(false);
        expect(isNull([])).toBe(false);
        expect(isNull(() => {})).toBe(false);
        expect(isNull(Symbol())).toBe(false);
        expect(isNull(1n)).toBe(false);
    });
});
