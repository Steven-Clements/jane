import isAsyncIterable from '../../type-guards/protocols/isAsyncIterable';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is async iterable.
 *
 * This validator is strict: the value must implement a callable
 * `[Symbol.asyncIterator]` method. No coercion is performed.
 *
 * It never throws and never mutates input.
 */
export default function validateAsyncIterable<T>(
    value: unknown,
    field: string,
): ValidationResult<AsyncIterable<T>> {
    if (isAsyncIterable<T>(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be an async iterable',
    };
}
