import isWeakSet from '../../type-guards/collections/isWeakSet';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a WeakSet instance.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateWeakSet(
    value: unknown,
    field: string,
): ValidationResult<WeakSet<object>> {
    if (isWeakSet(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a WeakSet',
    };
}
