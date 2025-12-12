import { describe, test, expect } from 'vitest';
import validateTuple from '../../../src/validators/structural/validateTuple';
import isNumber from '../../../src/type-guards/primitives/isNumber';
import isString from '../../../src/type-guards/primitives/isString';

describe('validateTuple', () => {
    const field = 'testField';

    test('returns ok:true for valid tuples', () => {
        const guards = [isNumber, isString] as const;
        const value = [1, 'x'] as const;

        expect(validateTuple(value, guards, field)).toEqual({
            ok: true,
            value,
        });
    });

    test('fails when value is not an array', () => {
        const guards = [isNumber, isString] as const;

        expect(validateTuple(null, guards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });

        expect(validateTuple(123, guards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });
    });

    test('fails when array length does not match guards length', () => {
        const guards = [isNumber, isString] as const;

        expect(validateTuple([1], guards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });

        expect(validateTuple([1, 'x', true], guards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });
    });

    test('fails when any element does not satisfy its guard', () => {
        const guards = [isNumber, isString] as const;

        expect(validateTuple([1, 2], guards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });

        expect(validateTuple(['x', 'y'], guards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });
    });

    test('fails when any guard is not a function', () => {
        // We need a non-function value without using `any`.
        // The cleanest way is to explicitly type the tuple as `readonly unknown[]`.
        const guards: readonly unknown[] = [isNumber, null];

        // Cast to the expected guard tuple type *safely*:
        const invalidGuards = guards as readonly ((value: unknown) => boolean)[];

        expect(validateTuple([1, 'x'], invalidGuards, field)).toEqual({
            ok: false,
            field,
            message: 'Value must be a tuple matching the specified structure',
        });
    });
});
