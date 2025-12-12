import { describe, it, expect } from 'vitest';
import validateNonEmptyString from '../../../src/validators/primitives/validateNonEmptyString.js';

describe('validateNonEmptyString', () => {
    it('returns ok for non-empty strings', () => {
        expect(validateNonEmptyString('hello', 'name')).toEqual({ ok: true, value: 'hello' });
        expect(validateNonEmptyString(' ', 'space')).toEqual({ ok: true, value: ' ' });
        expect(validateNonEmptyString('\u200B', 'zeroWidth')).toEqual({
            ok: true,
            value: '\u200B',
        });
    });

    it('returns error for empty strings', () => {
        expect(validateNonEmptyString('', 'empty')).toEqual({
            ok: false,
            field: 'empty',
            message: 'String cannot be empty',
        });
    });

    it('returns error for non-string values', () => {
        expect(validateNonEmptyString(123, 'age')).toEqual({
            ok: false,
            field: 'age',
            message: 'String cannot be empty',
        });
        expect(validateNonEmptyString(true, 'flag')).toEqual({
            ok: false,
            field: 'flag',
            message: 'String cannot be empty',
        });
        expect(validateNonEmptyString(null, 'missing')).toEqual({
            ok: false,
            field: 'missing',
            message: 'String cannot be empty',
        });
        expect(validateNonEmptyString(undefined, 'undef')).toEqual({
            ok: false,
            field: 'undef',
            message: 'String cannot be empty',
        });
        expect(validateNonEmptyString({}, 'obj')).toEqual({
            ok: false,
            field: 'obj',
            message: 'String cannot be empty',
        });
    });
});
