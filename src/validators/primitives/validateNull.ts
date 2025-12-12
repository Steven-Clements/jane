import isNull from '../../type-guards/primitives/isNull';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is null.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateNull(value: unknown, field: string): ValidationResult<null> {
    if (isNull(value)) {
        return { ok: true, value: null };
    }

    return {
        ok: false,
        field,
        message: 'Value must be null',
    };
}
