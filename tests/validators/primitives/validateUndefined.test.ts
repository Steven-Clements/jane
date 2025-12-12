import { describe, test, expect } from 'vitest';
import validateUndefined from '../../../src/validators/primitives/validateUndefined';

describe('validateUndefined', () => {
    const field = 'testField';

    test('returns ok:true for undefined', () => {
        expect(validateUndefined(undefined, field)).toEqual({
            ok: true,
            value: undefined,
        });
    });

    test('fails for null', () => {
        expect(validateUndefined(null, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });
    });

    test('fails for non-undefined values', () => {
        expect(validateUndefined(0, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });

        expect(validateUndefined('', field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });

        expect(validateUndefined(false, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });

        expect(validateUndefined({}, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });

        expect(validateUndefined([], field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });

        expect(validateUndefined(Symbol('x'), field)).toEqual({
            ok: false,
            field,
            message: 'Value must be undefined',
        });
    });
});
