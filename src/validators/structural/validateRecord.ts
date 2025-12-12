import isRecord from '../../type-guards/structural/isRecord';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a record: a plain object with string keys.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateRecord(
    value: unknown,
    field: string,
): ValidationResult<Record<string, unknown>> {
    if (isRecord(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a record',
    };
}
