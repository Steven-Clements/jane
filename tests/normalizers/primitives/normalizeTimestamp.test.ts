import { describe, it, expect } from 'vitest';
import normalizeTimestamp from '../../../src/normalizers/primitives/normalizeTimestamp';

describe('normalizeTimestamp (non-strict mode)', () => {
    it('returns epoch ms for valid Date instances', () => {
        const d = new Date('2020-01-01T00:00:00Z');
        expect(normalizeTimestamp(d)).toBe(d.getTime());
    });

    it('returns null for invalid Date instances', () => {
        expect(normalizeTimestamp(new Date('invalid'))).toBeNull();
    });

    it('returns finite numbers unchanged', () => {
        expect(normalizeTimestamp(0)).toBe(0);
        expect(normalizeTimestamp(1700000000000)).toBe(1700000000000);
    });

    it('returns null for non-finite numbers', () => {
        expect(normalizeTimestamp(NaN)).toBeNull();
        expect(normalizeTimestamp(Infinity)).toBeNull();
        expect(normalizeTimestamp(-Infinity)).toBeNull();
    });

    it('parses valid timestamp strings using Date.parse', () => {
        expect(normalizeTimestamp('2020-01-01T00:00:00Z')).toBe(Date.parse('2020-01-01T00:00:00Z'));
        expect(normalizeTimestamp('  2020-01-01  ')).toBe(Date.parse('2020-01-01'));
    });

    it('returns null for empty or whitespace-only strings', () => {
        expect(normalizeTimestamp('')).toBeNull();
        expect(normalizeTimestamp('   ')).toBeNull();
    });

    it('returns null for unparseable strings', () => {
        expect(normalizeTimestamp('not a date')).toBeNull();
        expect(normalizeTimestamp('2020-13-99')).toBeNull();
    });

    it('returns null for all other types', () => {
        expect(normalizeTimestamp(null)).toBeNull();
        expect(normalizeTimestamp(undefined)).toBeNull();
        expect(normalizeTimestamp({})).toBeNull();
        expect(normalizeTimestamp([])).toBeNull();
        expect(normalizeTimestamp(true)).toBeNull();
    });
});

describe('normalizeTimestamp (strict mode)', () => {
    const strict = { strict: true };

    it('accepts valid ISO‑8601 strings', () => {
        expect(normalizeTimestamp('2020-01-01', strict)).toBe(Date.parse('2020-01-01'));
        expect(normalizeTimestamp('2020-01-01T12:30:00Z', strict)).toBe(
            Date.parse('2020-01-01T12:30:00Z'),
        );
        expect(normalizeTimestamp('2020-01-01T12:30:00+02:00', strict)).toBe(
            Date.parse('2020-01-01T12:30:00+02:00'),
        );
    });

    it('rejects non‑ISO strings even if Date.parse would accept them', () => {
        expect(normalizeTimestamp('January 1, 2020', strict)).toBeNull();
        expect(normalizeTimestamp('01/01/2020', strict)).toBeNull();
        expect(normalizeTimestamp('2020/01/01', strict)).toBeNull();
        expect(normalizeTimestamp('2020-1-1', strict)).toBeNull(); // not ISO
    });

    it('still accepts valid Date instances and numbers', () => {
        const d = new Date('2020-01-01T00:00:00Z');
        expect(normalizeTimestamp(d, strict)).toBe(d.getTime());
        expect(normalizeTimestamp(1700000000000, strict)).toBe(1700000000000);
    });

    it('rejects invalid Date instances and non-finite numbers', () => {
        expect(normalizeTimestamp(new Date('invalid'), strict)).toBeNull();
        expect(normalizeTimestamp(NaN, strict)).toBeNull();
    });
});
