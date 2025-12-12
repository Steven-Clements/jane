import isUndefined from '../../type-guards/primitives/isUndefined';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is undefined.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateUndefined(
    value: unknown,
    field: string,
): ValidationResult<undefined> {
    if (isUndefined(value)) {
        return { ok: true, value: undefined };
    }

    return {
        ok: false,
        field,
        message: 'Value must be undefined',
    };
}
