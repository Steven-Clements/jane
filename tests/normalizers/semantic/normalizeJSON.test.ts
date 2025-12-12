import { describe, it, expect } from 'vitest';
import normalizeJSON from '../../../src/normalizers/semantic/normalizeJSON';

describe('normalizeJSON (non‑strict mode)', () => {
    it('returns objects and arrays unchanged', () => {
        const obj = { a: 1 };
        const arr = [1, 2, 3];
        expect(normalizeJSON(obj)).toBe(obj);
        expect(normalizeJSON(arr)).toBe(arr);
    });

    it('parses valid JSON strings', () => {
        expect(normalizeJSON('{"a":1}')).toEqual({ a: 1 });
        expect(normalizeJSON(' [1,2,3] ')).toEqual([1, 2, 3]);
    });

    it('returns null for invalid JSON strings', () => {
        expect(normalizeJSON('{a:1}')).toBeNull();
        expect(normalizeJSON('not json')).toBeNull();
    });

    it('returns null for empty or whitespace‑only strings', () => {
        expect(normalizeJSON('')).toBeNull();
        expect(normalizeJSON('   ')).toBeNull();
    });

    it('returns null for unsupported types', () => {
        expect(normalizeJSON(123)).toBeNull();
        expect(normalizeJSON(true)).toBeNull();
        expect(normalizeJSON(undefined)).toBeNull();
        expect(normalizeJSON(null)).toBeNull();
    });
});

describe('normalizeJSON (strict mode)', () => {
    const strict = { strict: true };

    it('parses valid JSON strings without whitespace', () => {
        expect(normalizeJSON('{"a":1}', strict)).toEqual({ a: 1 });
        expect(normalizeJSON('[1,2,3]', strict)).toEqual([1, 2, 3]);
    });

    it('rejects strings with leading or trailing whitespace', () => {
        expect(normalizeJSON(' {"a":1}', strict)).toBeNull();
        expect(normalizeJSON('{"a":1} ', strict)).toBeNull();
    });

    it('rejects invalid JSON strings', () => {
        expect(normalizeJSON('{a:1}', strict)).toBeNull();
        expect(normalizeJSON('not json', strict)).toBeNull();
    });

    it('rejects non‑string inputs', () => {
        expect(normalizeJSON({ a: 1 }, strict)).toBeNull();
        expect(normalizeJSON([1, 2, 3], strict)).toBeNull();
        expect(normalizeJSON(123, strict)).toBeNull();
        expect(normalizeJSON(null, strict)).toBeNull();
    });
});
