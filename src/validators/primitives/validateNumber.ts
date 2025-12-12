import isNumber from '../../type-guards/primitives/isNumber';
import type { ValidationResult } from '../../types';

/**
 * Checks whether a value is a **primitive number**.
 *
 * This helper performs a strict `typeof` check using `isNumber`. It accepts
 * all number primitives, including `NaN`, `Infinity`, and `-Infinity`.
 *
 * It never throws and never mutates input. Use it when you need to confirm
 * a value is a number before running normalization or further validation.
 *
 * @param value - The value to validate.
 * @param field - The name of the field being validated, for error reporting.
 * @returns ValidationResult<number> - ok with the number value, or an error object.
 */
export default function validateNumber(value: unknown, field: string): ValidationResult<number> {
    if (!isNumber(value)) {
        return { ok: false, field, message: 'Value must be a number' };
    }

    return { ok: true, value };
}
