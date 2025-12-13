import { describe, it, expect } from 'vitest';
import validateError from '../../../src/validators/semantic/validateError';

describe('validateError', () => {
    it('returns ok:true for Error instances', () => {
        const error = new Error('Something went wrong');
        const result = validateError(error, 'err');

        expect(result).toEqual({ ok: true, value: error });
    });

    it('returns ok:true for Error subclasses', () => {
        const typeError = new TypeError('Type mismatch');
        const rangeError = new RangeError('Out of range');

        expect(validateError(typeError, 'err')).toEqual({
            ok: true,
            value: typeError,
        });
        expect(validateError(rangeError, 'err')).toEqual({
            ok: true,
            value: rangeError,
        });
    });

    it('returns error for non-Error values', () => {
        expect(validateError('error', 'err').ok).toBe(false);
        expect(validateError(123, 'err').ok).toBe(false);
        expect(validateError({}, 'err').ok).toBe(false);
        expect(validateError([], 'err').ok).toBe(false);
        expect(validateError(null, 'err').ok).toBe(false);
        expect(validateError(undefined, 'err').ok).toBe(false);
        expect(validateError(true, 'err').ok).toBe(false);
        expect(validateError(Symbol('s'), 'err').ok).toBe(false);
    });

    it('never throws for any input', () => {
        expect(() => validateError(Symbol('s'), 'err')).not.toThrow();
    });
});
