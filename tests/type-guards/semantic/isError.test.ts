import { describe, it, expect } from 'vitest';
import isError from '../../../src/type-guards/semantic/isError.js';

describe('isError', () => {
    it('returns true for Error instances', () => {
        expect(isError(new Error('x'))).toBe(true);
        expect(isError(new TypeError('x'))).toBe(true);
        expect(isError(new RangeError('x'))).toBe(true);
        expect(isError(new SyntaxError('x'))).toBe(true);
    });

    it('returns true for Error wrapper objects', () => {
        expect(isError(Object(new Error('x')))).toBe(true);
        expect(isError(new Object(new Error('x')))).toBe(true);
    });

    it('returns true for custom Error subclasses', () => {
        class MyError extends Error {}
        expect(isError(new MyError('x'))).toBe(true);
    });

    it('returns false for objects that only look like errors', () => {
        expect(isError({ name: 'Error', message: 'x' })).toBe(false);
        expect(isError({})).toBe(false);
    });

    it('returns false for non-error types', () => {
        expect(isError('error')).toBe(false);
        expect(isError(123)).toBe(false);
        expect(isError(null)).toBe(false);
        expect(isError(undefined)).toBe(false);
        expect(isError([])).toBe(false);
        expect(isError(() => {})).toBe(false);
        expect(isError(Symbol())).toBe(false);
        expect(isError(1n)).toBe(false);
    });
});
