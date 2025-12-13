import isPromise from '../../type-guards/protocols/isPromise';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a Promise.
 *
 * This validator is strict: the value must be an actual Promise instance
 * (or subclass). Arbitrary thenables are rejected.
 *
 * It never throws and never mutates input.
 */
export default function validatePromise<T>(
    value: unknown,
    field: string,
): ValidationResult<Promise<T>> {
    if (isPromise(value)) {
        return { ok: true, value: value as Promise<T> };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a Promise',
    };
}
