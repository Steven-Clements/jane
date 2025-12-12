import isObject from '../../type-guards/structural/isObject';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a non-null object.
 * Arrays, functions, and other non-plain objects fail this check.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateObject(value: unknown, field: string): ValidationResult<object> {
    if (isObject(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be an object',
    };
}
