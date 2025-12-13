import isRegExp from '../../type-guards/semantic/isRegExp';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a genuine RegExp instance.
 *
 * Uses `isRegExp` internally. Never throws and never mutates input.
 */
export default function validateRegExp(value: unknown, field: string): ValidationResult<RegExp> {
    if (isRegExp(value)) {
        // TS strict mode requires explicit cast
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a RegExp',
    };
}
