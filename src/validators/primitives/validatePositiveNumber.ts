import isPositiveNumber from '../../type-guards/primitives/isPositiveNumber';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a positive number (> 0).
 *
 * This helper never throws and never mutates input. It returns a structured
 * ValidationResult indicating success or failure.
 *
 * @param value - The value to validate.
 * @param field - The field name associated with the value (used in errors).
 * @returns ValidationResult<number> indicating success or error.
 */
export default function validatePositiveNumber(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (!isPositiveNumber(value)) {
        return {
            ok: false,
            field,
            message: 'Value must be a positive number',
        };
    }

    return { ok: true, value };
}
