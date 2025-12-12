import isSet from '../../type-guards/collections/isSet';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a Set instance.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateSet(value: unknown, field: string): ValidationResult<Set<unknown>> {
    if (isSet(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a Set',
    };
}
