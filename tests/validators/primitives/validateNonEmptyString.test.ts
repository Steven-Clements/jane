import { describe, it, expect } from 'vitest';
import validateNonEmptyString from '../../../src/validators/primitives/validateNonEmptyString.js';

describe('validateNonEmptyString', () => {
    it('returns ok:true for valid non-empty strings', () => {
        expect(validateNonEmptyString('hello', 'name')).toEqual({ ok: true, value: 'hello' });
        expect(validateNonEmptyString(' a ', 'padded')).toEqual({ ok: true, value: ' a ' });
    });

    it('returns ok:false for empty or whitespace-only strings', () => {
        expect(validateNonEmptyString('', 'empty')).toEqual({
            ok: false,
            field: 'empty',
            message: 'String cannot be empty or whitespace',
        });
        expect(validateNonEmptyString('   ', 'spaces')).toEqual({
            ok: false,
            field: 'spaces',
            message: 'String cannot be empty or whitespace',
        });
        expect(validateNonEmptyString('\n\t', 'whitespaceChars')).toEqual({
            ok: false,
            field: 'whitespaceChars',
            message: 'String cannot be empty or whitespace',
        });
    });

    it('returns ok:false for non-string values', () => {
        const invalid: unknown[] = [123, true, false, null, undefined, {}, []];
        for (const val of invalid) {
            expect(validateNonEmptyString(val, 'field')).toEqual({
                ok: false,
                field: 'field',
                message: 'String cannot be empty or whitespace',
            });
        }
    });
});
