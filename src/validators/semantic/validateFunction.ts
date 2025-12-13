import isFunction from '../../type-guards/semantic/isFunction';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a function with a specified signature.
 *
 * Never throws or mutates input.
 *
 * @typeParam F - The function signature expected.
 */
export default function validateFunction<F extends (...args: unknown[]) => unknown>(
    value: unknown,
    field: string,
): ValidationResult<F> {
    if (isFunction(value)) {
        return { ok: true, value: value as F };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a function',
    };
}
