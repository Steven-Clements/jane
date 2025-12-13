import isDate from '../../type-guards/semantic/isDate';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a valid Date instance.
 *
 * Uses `isDate` internally. Invalid Date objects (e.g., `new Date("invalid")`)
 * are rejected. Never throws or mutates input.
 */
export default function validateDate(value: unknown, field: string): ValidationResult<Date> {
    if (isDate(value)) {
        // TypeScript strict mode requires explicit cast
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a valid Date',
    };
}
