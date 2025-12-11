import { describe, it, expect } from 'vitest';
import normalizeBoolean from '../../../src/normalizers/primitives/normalizeBoolean.js';

describe('normalizeBoolean', () => {
    it('returns boolean values unchanged', () => {
        expect(normalizeBoolean(true)).toBe(true);
        expect(normalizeBoolean(false)).toBe(false);
    });

    it("normalizes 'true' and 'false' strings (case-insensitive, trimmed)", () => {
        expect(normalizeBoolean('true')).toBe(true);
        expect(normalizeBoolean('TRUE')).toBe(true);
        expect(normalizeBoolean('  TrUe  ')).toBe(true);

        expect(normalizeBoolean('false')).toBe(false);
        expect(normalizeBoolean('FALSE')).toBe(false);
        expect(normalizeBoolean('  FaLsE  ')).toBe(false);
    });

    it('returns null for strings that are not exact boolean representations', () => {
        expect(normalizeBoolean('yes')).toBeNull();
        expect(normalizeBoolean('no')).toBeNull();
        expect(normalizeBoolean('')).toBeNull();
        expect(normalizeBoolean(' ')).toBeNull();
        expect(normalizeBoolean('true-ish')).toBeNull();
        expect(normalizeBoolean('false-ish')).toBeNull();
    });

    it('returns null for non-string, non-boolean values', () => {
        expect(normalizeBoolean(1)).toBeNull();
        expect(normalizeBoolean(0)).toBeNull();
        expect(normalizeBoolean(null)).toBeNull();
        expect(normalizeBoolean(undefined)).toBeNull();
        expect(normalizeBoolean({})).toBeNull();
        expect(normalizeBoolean([])).toBeNull();
        expect(normalizeBoolean(Symbol())).toBeNull();
    });
});
