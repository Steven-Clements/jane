/**
 * Checks whether a value is a positive integer.
 *
 * A positive integer is defined as a finite number with no fractional component
 * and greater than zero. This helper never throws and never mutates input.
 * It accepts any value and performs a strict numeric check without coercion.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a positive integer; `false` otherwise.
 */
export default function isPositiveInteger(value: unknown): value is number {
    // Fast path: must be a number primitive.
    // Rejects bigint, Number objects, and anything non-numeric.
    if (typeof value !== 'number') {
        return false;
    }

    // Must be finite. Rejects NaN, Infinity, -Infinity.
    if (!Number.isFinite(value)) {
        return false;
    }

    // Must be an integer. Rejects fractional values like 1.5.
    if (!Number.isInteger(value)) {
        return false;
    }

    // Must be strictly greater than zero.
    return value > 0;
}
