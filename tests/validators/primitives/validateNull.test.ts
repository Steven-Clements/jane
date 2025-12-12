import { describe, test, expect } from 'vitest';
import validateNull from '../../../src/validators/primitives/validateNull';

describe('validateNull', () => {
    const field = 'testField';

    test('returns ok:true for null', () => {
        expect(validateNull(null, field)).toEqual({ ok: true, value: null });
    });

    test('fails for undefined', () => {
        expect(validateNull(undefined, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });
    });

    test('fails for non-null values', () => {
        expect(validateNull(0, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });

        expect(validateNull('', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });

        expect(validateNull(false, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });

        expect(validateNull({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });

        expect(validateNull([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });

        expect(validateNull(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be null',
        });
    });
});
