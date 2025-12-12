import isArray from '../../type-guards/structural/isArray';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is an array.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateArray(value: unknown, field: string): ValidationResult<unknown[]> {
    if (isArray(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be an array',
    };
}
