import isMap from '../../type-guards/collections/isMap';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a Map instance.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateMap(
    value: unknown,
    field: string,
): ValidationResult<Map<unknown, unknown>> {
    if (isMap(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a Map',
    };
}
