import { describe, it, expect } from 'vitest';
import normalizePort from '../../../src/normalizers/semantic/normalizePort.js';

describe('normalizePort (non‑strict mode)', () => {
    it('returns valid numeric ports unchanged', () => {
        expect(normalizePort(0)).toBe(0);
        expect(normalizePort(80)).toBe(80);
        expect(normalizePort(65535)).toBe(65535);
    });

    it('returns null for numbers outside the valid range', () => {
        expect(normalizePort(-1)).toBeNull();
        expect(normalizePort(65536)).toBeNull();
    });

    it('returns null for non‑integer numbers', () => {
        expect(normalizePort(3.14)).toBeNull();
    });

    it('parses valid numeric strings', () => {
        expect(normalizePort('0')).toBe(0);
        expect(normalizePort(' 80 ')).toBe(80);
        expect(normalizePort('65535')).toBe(65535);
    });

    it('returns null for numeric strings outside the valid range', () => {
        expect(normalizePort('-1')).toBeNull();
        expect(normalizePort('65536')).toBeNull();
    });

    it('returns null for non‑numeric strings', () => {
        expect(normalizePort('abc')).toBeNull();
        expect(normalizePort('80abc')).toBeNull();
        expect(normalizePort('eight')).toBeNull();
    });

    it('returns null for strings with internal whitespace', () => {
        expect(normalizePort('8 0')).toBeNull();
    });

    it('returns null for all other types', () => {
        expect(normalizePort(null)).toBeNull();
        expect(normalizePort(undefined)).toBeNull();
        expect(normalizePort({})).toBeNull();
        expect(normalizePort([])).toBeNull();
        expect(normalizePort(true)).toBeNull();
    });
});

describe('normalizePort (strict mode)', () => {
    const strict = { strict: true };

    it('accepts valid numeric ports from one through sixty five thousand five hundred thirty five', () => {
        expect(normalizePort(1, strict)).toBe(1);
        expect(normalizePort(80, strict)).toBe(80);
        expect(normalizePort(65535, strict)).toBe(65535);
    });

    it('rejects zero in strict mode', () => {
        expect(normalizePort(0, strict)).toBeNull();
        expect(normalizePort('0', strict)).toBeNull();
    });

    it('parses valid digit‑only strings without leading zeros', () => {
        expect(normalizePort('1', strict)).toBe(1);
        expect(normalizePort('80', strict)).toBe(80);
    });

    it('rejects strings with leading zeros', () => {
        expect(normalizePort('01', strict)).toBeNull();
        expect(normalizePort('00080', strict)).toBeNull();
    });

    it('rejects strings with whitespace in strict mode', () => {
        expect(normalizePort(' 80', strict)).toBeNull();
        expect(normalizePort('80 ', strict)).toBeNull();
        expect(normalizePort('8 0', strict)).toBeNull();
    });

    it('rejects strings with signs in strict mode', () => {
        expect(normalizePort('+80', strict)).toBeNull();
        expect(normalizePort('-80', strict)).toBeNull();
    });

    it('rejects non‑numeric strings in strict mode', () => {
        expect(normalizePort('abc', strict)).toBeNull();
        expect(normalizePort('80abc', strict)).toBeNull();
    });

    it('rejects numbers outside the valid range in strict mode', () => {
        expect(normalizePort(-1, strict)).toBeNull();
        expect(normalizePort(65536, strict)).toBeNull();
    });
});
