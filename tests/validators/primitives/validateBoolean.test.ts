import { describe, test, expect } from 'vitest';
import validateBoolean from '../../../src/validators/primitives/validateBoolean';

describe('validateBoolean', () => {
    const field = 'testField';

    test('returns ok:true for boolean values', () => {
        expect(validateBoolean(true, field)).toEqual({ ok: true, value: true });
        expect(validateBoolean(false, field)).toEqual({ ok: true, value: false });
    });

    test('fails for truthy and falsy non-boolean values', () => {
        expect(validateBoolean(1, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean(0, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean('', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean('true', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });
    });

    test('fails for non-boolean types', () => {
        expect(validateBoolean(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });

        expect(validateBoolean(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a boolean',
        });
    });
});
