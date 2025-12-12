import { isString } from '../../type-guards';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a primitive string.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check using the `isString` type guard. Only primitive strings
 * pass. All other values return a structured validation error.
 *
 * @param value - The value to validate.
 * @param field - The name of the field being validated, for error reporting.
 * @returns ValidationResult<string> - ok with the string value, or an error object.
 */
export default function validateString(value: unknown, field: string): ValidationResult<string> {
    if (!isString(value)) {
        return {
            ok: false,
            field,
            message: 'Value must be a string',
        };
    }

    return { ok: true, value };
}
