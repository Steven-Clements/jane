import isTuple from '../../type-guards/structural/isTuple';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a tuple matching the given guards.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateTuple<
    const Guards extends readonly ((value: unknown) => boolean)[],
>(
    value: unknown,
    guards: Guards,
    field: string,
): ValidationResult<{
    [I in keyof Guards]: Guards[I] extends (value: unknown) => value is infer T ? T : unknown;
}> {
    if (isTuple(value, guards)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a tuple matching the specified structure',
    };
}
