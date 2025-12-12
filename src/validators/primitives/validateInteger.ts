import isInteger from '../../type-guards/primitives/isInteger.js';
import type { ValidationResult } from '../../types';

/**
 * Checks whether a value is a **finite integer**.
 *
 * This helper uses `isInteger` to perform a strict check. It rejects
 * `NaN`, `Infinity`, `-Infinity`, and non-number types.
 *
 * It never throws and never mutates input. Use it when you need a strict
 * integer value before normalization or further validation.
 *
 * @param value - The value to validate.
 * @param field - The name of the field being validated, for error reporting.
 * @returns ValidationResult<number> - ok with the integer value, or an error object.
 */
export default function validateInteger(value: unknown, field: string): ValidationResult<number> {
    if (!isInteger(value)) {
        return { ok: false, field, message: 'Value must be an integer' };
    }

    return { ok: true, value };
}
