import isFiniteNumber from '../../type-guards/primitives/isFiniteNumber';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a finite number.
 * A finite number is a number that is not NaN, Infinity, or -Infinity.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateFiniteNumber(
    value: unknown,
    field: string,
): ValidationResult<number> {
    if (isFiniteNumber(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a finite number',
    };
}
