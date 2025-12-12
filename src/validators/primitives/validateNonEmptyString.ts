import isNonEmptyString from '../../type-guards/primitives/isNonEmptyString';
import type { ValidationResult } from '../../types';

/**
 * Checks whether a value is a **non‑empty string**.
 *
 * This helper performs a strict string check using `isNonEmptyString` and
 * ensures the string has length > 0. Whitespace and zero-width characters
 * count as non-empty. It never throws and never mutates input. Use it
 * when you need a string with meaningful content before further processing.
 *
 * @param value - The value to validate.
 * @param field - The name of the field being validated, for error reporting.
 * @returns ValidationResult<string> - ok with the string value, or an error object.
 */
export default function validateNonEmptyString(
    value: unknown,
    field: string,
): ValidationResult<string> {
    if (!isNonEmptyString(value)) {
        return { ok: false, field, message: 'String cannot be empty' };
    }

    return { ok: true, value };
}
