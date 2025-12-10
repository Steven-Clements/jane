/**
 * Checks whether a value is a safe integer.
 *
 * A safe integer is defined as a finite number with no fractional component
 * whose absolute value does not exceed `Number.MAX_SAFE_INTEGER`. This helper
 * never throws and never mutates input. It accepts any value and performs a
 * strict numeric check without coercion.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a safe integer; `false` otherwise.
 */
export default function isSafeInteger(value: unknown): value is number {
    // Must be a number primitive. Rejects bigint, Number objects, and all
    // non-numeric types.
    if (typeof value !== 'number') {
        return false;
    }

    // Must be finite. Rejects NaN, Infinity, -Infinity.
    if (!Number.isFinite(value)) {
        return false;
    }

    // Must be an integer and within the safe integer range.
    return Number.isSafeInteger(value);
}
