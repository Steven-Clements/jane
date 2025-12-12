import isNegativeInteger from '../../type-guards/primitives/isNegativeInteger.js';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a negative integer (< 0).
 *
 * This helper never throws and never mutates input. It returns a structured
 * ValidationResult indicating success or failure.
 *
 * @param value - The value to validate.
 * @param field - The field name associated with the value (used in errors).
 * @returns ValidationResult<number> indicating success or error.
 */
export default function validateNegativeInteger(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (!isNegativeInteger(value)) {
        return {
            ok: false,
            field,
            message: 'Value must be a negative integer',
        };
    }

    return { ok: true, value };
}
