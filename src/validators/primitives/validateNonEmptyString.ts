import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a **non-empty, non-whitespace-only string**.
 *
 * This helper never throws and never mutates input. It returns a structured
 * ValidationResult indicating success or failure.
 *
 * @param value - The value to validate.
 * @param field - The field name associated with the value (used in errors).
 * @returns ValidationResult<string> indicating success or error.
 */
export default function validateNonEmptyString(
    value: unknown,
    field: string,
): ValidationResult<string> {
    if (typeof value !== 'string' || value.trim().length === 0) {
        return { ok: false, field, message: 'String cannot be empty or whitespace' };
    }

    return { ok: true, value };
}
