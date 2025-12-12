import isPlainObject from '../../type-guards/structural/isPlainObject';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a plain object.
 * A plain object is created via object literal or new Object(),
 * where the prototype is exactly Object.prototype.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validatePlainObject(
    value: unknown,
    field: string,
): ValidationResult<object> {
    if (isPlainObject(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a plain object',
    };
}
