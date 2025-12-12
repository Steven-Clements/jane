import isBoolean from '../../type-guards/primitives/isBoolean';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a boolean.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateBoolean(value: unknown, field: string): ValidationResult<boolean> {
    if (isBoolean(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a boolean',
    };
}
