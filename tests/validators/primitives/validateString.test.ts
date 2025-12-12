import { describe, it, expect } from 'vitest';
import validateString from '../../../src/validators/primitives/validateString.js';

describe('validateString', () => {
    it('returns ok for primitive strings', () => {
        expect(validateString('hello', 'name')).toEqual({ ok: true, value: 'hello' });
        expect(validateString('', 'empty')).toEqual({ ok: true, value: '' });
        expect(validateString(' ', 'space')).toEqual({ ok: true, value: ' ' });
    });

    it('returns error for non-strings', () => {
        expect(validateString(123, 'age')).toEqual({
            ok: false,
            field: 'age',
            message: 'Value must be a string',
        });
        expect(validateString(true, 'flag')).toEqual({
            ok: false,
            field: 'flag',
            message: 'Value must be a string',
        });
        expect(validateString(null, 'missing')).toEqual({
            ok: false,
            field: 'missing',
            message: 'Value must be a string',
        });
        expect(validateString(undefined, 'undef')).toEqual({
            ok: false,
            field: 'undef',
            message: 'Value must be a string',
        });
        expect(validateString({}, 'obj')).toEqual({
            ok: false,
            field: 'obj',
            message: 'Value must be a string',
        });
        expect(validateString([], 'arr')).toEqual({
            ok: false,
            field: 'arr',
            message: 'Value must be a string',
        });
        expect(validateString(Symbol('s'), 'sym')).toEqual({
            ok: false,
            field: 'sym',
            message: 'Value must be a string',
        });
        expect(validateString(new String('hello'), 'boxed')).toEqual({
            ok: false,
            field: 'boxed',
            message: 'Value must be a string',
        });
    });
});
