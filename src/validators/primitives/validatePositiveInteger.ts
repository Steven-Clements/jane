import isPositiveInteger from '../../type-guards/primitives/isPositiveInteger.js';
import type { ValidationResult } from '../../types';

/**
 * Checks whether a value is a **positive integer**.
 *
 * This helper uses `isPositiveInteger` internally. A positive integer is
 * defined as a finite number with no fractional component and greater than zero.
 *
 * It never throws and never mutates input. Use it when you need a strict
 * positive integer before normalization or further validation.
 *
 * @param value - The value to validate.
 * @param field - The name of the field being validated, for error reporting.
 * @returns ValidationResult<number> - ok with the positive integer value, or an error object.
 */
export default function validatePositiveInteger(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (!isPositiveInteger(value)) {
        return { ok: false, field, message: 'Value must be a positive integer' };
    }

    return { ok: true, value };
}
