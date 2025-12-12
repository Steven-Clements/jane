import isSafeInteger from '../../type-guards/primitives/isSafeInteger';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a safe integer.
 * A safe integer is a finite integer within the IEEE‑754 safe range.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateSafeInteger(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (isSafeInteger(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a safe integer',
    };
}
