import { describe, it, expect } from 'vitest';
import normalizeString from '../../../src/normalizers/primitives/normalizeString.js';

describe('normalizeString', () => {
    it('returns native strings unchanged except for trimming', () => {
        expect(normalizeString('hello')).toBe('hello');
        expect(normalizeString('  hello  ')).toBe('hello');
        expect(normalizeString('\nhello\t')).toBe('hello');
    });

    it('returns an empty string when the trimmed result is empty', () => {
        expect(normalizeString('')).toBe('');
        expect(normalizeString('   ')).toBe('');
        expect(normalizeString('\n\t ')).toBe('');
    });

    it('returns null for non-string values', () => {
        expect(normalizeString(123)).toBeNull();
        expect(normalizeString(true)).toBeNull();
        expect(normalizeString(false)).toBeNull();
        expect(normalizeString(null)).toBeNull();
        expect(normalizeString(undefined)).toBeNull();
        expect(normalizeString({})).toBeNull();
        expect(normalizeString([])).toBeNull();
        expect(normalizeString(Symbol())).toBeNull();
    });
});
