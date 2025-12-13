import isError from '../../type-guards/semantic/isError';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is an Error instance.
 *
 * Uses `isError` internally. Accepts all native Error types
 * (Error, TypeError, RangeError, etc.) and custom subclasses.
 * Never throws or mutates input.
 */
export default function validateError(value: unknown, field: string): ValidationResult<Error> {
    if (isError(value)) {
        // TS strict mode requires explicit cast
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be an Error',
    };
}
