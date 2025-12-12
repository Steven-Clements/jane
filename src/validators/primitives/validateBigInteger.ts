import isBigInteger from '../../type-guards/primitives/isBigInteger';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a bigint.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateBigInteger(
    value: unknown,
    field: string,
): ValidationResult<bigint> {
    if (isBigInteger(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a bigint',
    };
}
