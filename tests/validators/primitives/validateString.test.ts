import { describe, it, expect } from 'vitest';
import validateString from '../../../src/validators/primitives/validateString.js';

describe('validateString', () => {
    it('accepts valid strings', () => {
        const result = validateString('hello');
        expect(result).toEqual({ ok: true, value: 'hello' });
    });

    it('rejects non-strings', () => {
        const result = validateString(123);
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error.kind).toBe('invalid_string');
            expect(result.error.input).toBe(123);
        }
    });

    it('rejects null and undefined', () => {
        expect(validateString(null).ok).toBe(false);
        expect(validateString(undefined).ok).toBe(false);
    });

    it('rejects objects and arrays', () => {
        expect(validateString({}).ok).toBe(false);
        expect(validateString([]).ok).toBe(false);
    });

    it('rejects booleans and symbols', () => {
        expect(validateString(true).ok).toBe(false);
        expect(validateString(Symbol('x')).ok).toBe(false);
    });
});
