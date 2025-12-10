/**
 * Checks whether a value is a non-negative number.
 *
 * A non-negative number is defined as a finite number greater than or equal to
 * zero, with any fractional component allowed. This helper never throws and
 * never mutates input. It accepts any value and performs a strict numeric check
 * without coercion.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite number >= 0; `false` otherwise.
 */
export default function isNonNegativeNumber(value: unknown): value is number {
    // Must be a number primitive. Rejects bigint, Number objects, and all
    // non-numeric types.
    if (typeof value !== 'number') {
        return false;
    }

    // Must be finite. Rejects NaN, Infinity, -Infinity.
    if (!Number.isFinite(value)) {
        return false;
    }

    // Must be >= 0. Fractional values are allowed.
    return value >= 0;
}
