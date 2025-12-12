import isNonEmptyArray from '../../type-guards/structural/isNonEmptyArray';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a non-empty array.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateNonEmptyArray(
    value: unknown,
    field: string,
): ValidationResult<unknown[]> {
    if (isNonEmptyArray(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a non-empty array',
    };
}
