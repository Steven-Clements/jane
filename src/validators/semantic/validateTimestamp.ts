import isTimestamp from '../../type-guards/semantic/isTimestamp';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a Unix timestamp in milliseconds.
 *
 * A timestamp must be a finite integer representing milliseconds since the
 * Unix epoch. Negative values are allowed.
 *
 * It never throws and never mutates input.
 */
export default function validateTimestamp(value: unknown, field: string): ValidationResult<number> {
    if (isTimestamp(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a Unix timestamp in milliseconds',
    };
}
