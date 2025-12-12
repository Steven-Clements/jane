import isNegativeNumber from '../../type-guards/primitives/isNegativeNumber';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a negative number (< 0).
 *
 * This helper never throws and never mutates input. It returns a structured
 * ValidationResult indicating success or failure.
 *
 * @param value - The value to validate.
 * @param field - The field name associated with the value (used in errors).
 * @returns ValidationResult<number> indicating success or error.
 */
export default function validateNegativeNumber(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (!isNegativeNumber(value)) {
        return {
            ok: false,
            field,
            message: 'Value must be a negative number',
        };
    }

    return { ok: true, value };
}
