import { describe, it, expect } from 'vitest';
import validateRegExp from '../../../src/validators/semantic/validateRegExp';

describe('validateRegExp', () => {
    it('returns ok:true for a valid RegExp instance', () => {
        const regex = /abc/;
        const result = validateRegExp(regex, 'pattern');

        expect(result).toEqual({ ok: true, value: regex });
    });

    it('returns error for non-RegExp values', () => {
        expect(validateRegExp('abc', 'pattern').ok).toBe(false);
        expect(validateRegExp(123, 'pattern').ok).toBe(false);
        expect(validateRegExp({}, 'pattern').ok).toBe(false);
        expect(validateRegExp([], 'pattern').ok).toBe(false);
        expect(validateRegExp(null, 'pattern').ok).toBe(false);
        expect(validateRegExp(undefined, 'pattern').ok).toBe(false);
        expect(validateRegExp(true, 'pattern').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateRegExp(Symbol('s'), 'pattern')).not.toThrow();
    });

    it('accepts RegExp created via constructor', () => {
        const regex = new RegExp('abc', 'i');
        const result = validateRegExp(regex, 'pattern');

        expect(result).toEqual({ ok: true, value: regex });
    });
});
