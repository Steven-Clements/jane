import isWeakMap from '../../type-guards/collections/isWeakMap';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a WeakMap instance.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateWeakMap(
    value: unknown,
    field: string,
): ValidationResult<WeakMap<object, unknown>> {
    if (isWeakMap(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a WeakMap',
    };
}
