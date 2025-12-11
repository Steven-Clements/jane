import { describe, it, expect } from 'vitest';
import isEnumValue from '../../../src/type-guards/semantic/isEnumValue.js';

describe('isEnumValue', () => {
    const Letters = {
        A: 'a',
        B: 'b',
        C: 'c',
    } as const;

    enum Status {
        Active = 1,
        Disabled = 2,
    }

    it('accepts reverse-mapped enum keys (TS numeric enums)', () => {
        expect(isEnumValue(Status, 'Active')).toBe(true);
        expect(isEnumValue(Status, 'Disabled')).toBe(true);
    });

    it('returns true for allowed enum values', () => {
        expect(isEnumValue(Letters, 'a')).toBe(true);
        expect(isEnumValue(Letters, 'b')).toBe(true);
        expect(isEnumValue(Letters, 'c')).toBe(true);
    });

    it('returns false for disallowed values', () => {
        expect(isEnumValue(Letters, 'x')).toBe(false);
        expect(isEnumValue(Letters, 123)).toBe(false);
        expect(isEnumValue(Letters, null)).toBe(false);
        expect(isEnumValue(Letters, undefined)).toBe(false);
    });

    it('returns false when enumObject is empty', () => {
        expect(isEnumValue({}, 'a')).toBe(false);
    });

    it('handles numeric enums', () => {
        const Numbers = {
            ONE: 1,
            TWO: 2,
        } as const;

        expect(isEnumValue(Numbers, 1)).toBe(true);
        expect(isEnumValue(Numbers, 2)).toBe(true);
        expect(isEnumValue(Numbers, 3)).toBe(false);
    });
});
