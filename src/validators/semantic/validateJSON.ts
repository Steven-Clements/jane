import type { ValidationResult, JSONValue } from '../../types';
import isJSON from '../../type-guards/semantic/isJSON';

/**
 * Validates that a value is a valid JSON value.
 *
 * Never throws or mutates input. Accepts objects, arrays, strings, numbers,
 * booleans, and null. Rejects non-JSON values, circular references, and
 * objects with non-plain prototypes.
 */
export default function validateJSON(value: unknown, field: string): ValidationResult<JSONValue> {
    if (isJSON(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be valid JSON',
    };
}
