import isNonNegativeNumber from '../../type-guards/primitives/isNonNegativeNumber';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a non-negative number.
 *
 * A non-negative number is defined as a finite numeric primitive that is
 * greater than or equal to zero. Fractional values are allowed. This helper
 * never throws and never mutates input. It relies on `isNonNegativeNumber` to
 * perform a strict numeric check without coercion.
 *
 * Use this validator when you need guarantees that a value is safe for domains
 * requiring a zero-inclusive lower bound (e.g., counters, durations, balances,
 * pagination offsets).
 *
 * @param value - The value to validate.
 * @param field - The field name to associate with validation errors.
 * @returns A ValidationResult containing either the validated number or
 *          structured error information.
 */
export default function validateNonNegativeNumber(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (!isNonNegativeNumber(value)) {
        return {
            ok: false,
            field,
            message: 'Expected a non-negative number.',
        };
    }

    return { ok: true, value };
}
