import { describe, it, expect } from 'vitest';
import normalizeNonEmptyString from '../../../src/normalizers/primitives/normalizeNonEmptyString.js';

describe('normalizeNonEmptyString', () => {
    it('returns trimmed non-empty strings', () => {
        expect(normalizeNonEmptyString('hello')).toBe('hello');
        expect(normalizeNonEmptyString('  hello  ')).toBe('hello');
        expect(normalizeNonEmptyString('\nhello\t')).toBe('hello');
    });

    it('returns null for empty or whitespace-only strings', () => {
        expect(normalizeNonEmptyString('')).toBeNull();
        expect(normalizeNonEmptyString('   ')).toBeNull();
        expect(normalizeNonEmptyString('\n\t ')).toBeNull();
    });

    it('returns null for non-string values', () => {
        expect(normalizeNonEmptyString(123)).toBeNull();
        expect(normalizeNonEmptyString(true)).toBeNull();
        expect(normalizeNonEmptyString(false)).toBeNull();
        expect(normalizeNonEmptyString(null)).toBeNull();
        expect(normalizeNonEmptyString(undefined)).toBeNull();
        expect(normalizeNonEmptyString({})).toBeNull();
        expect(normalizeNonEmptyString([])).toBeNull();
        expect(normalizeNonEmptyString(Symbol())).toBeNull();
    });
});
