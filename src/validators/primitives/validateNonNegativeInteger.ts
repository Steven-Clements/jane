import isNonNegativeInteger from '../../type-guards/primitives/isNonNegativeInteger';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a non-negative integer (0 or greater).
 *
 * This helper never throws and never mutates input. It returns a structured
 * ValidationResult indicating success or failure.
 *
 * @param value - The value to validate.
 * @param field - The field name associated with the value (used in errors).
 * @returns ValidationResult<number> indicating success or error.
 */
export default function validateNonNegativeInteger(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (!isNonNegativeInteger(value)) {
        return {
            ok: false,
            field,
            message: 'Value must be a non-negative integer',
        };
    }

    return { ok: true, value };
}
