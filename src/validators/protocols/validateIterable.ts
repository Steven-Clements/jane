import isIterable from '../../type-guards/protocols/isIterable';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is iterable.
 *
 * This validator is strict: the value must implement a callable
 * `[Symbol.iterator]` method. No coercion is performed.
 *
 * It never throws and never mutates input.
 */
export default function validateIterable<T>(
    value: unknown,
    field: string,
): ValidationResult<Iterable<T>> {
    if (isIterable<T>(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be iterable',
    };
}
