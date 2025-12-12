/**
 * Checks whether a value is a non-negative integer.
 *
 * A non-negative integer is defined as a finite number with no fractional
 * component and greater than or equal to zero. This helper never throws and
 * never mutates input. It performs a strict `typeof` check and rejects string
 * numerals (e.g., `"1"`), boxed numbers (`new Number(1)`), `NaN`, `Infinity`,
 * and `-Infinity`.
 *
 * Use this helper when you need to confirm that a value is a safe integer
 * boundary such as counts, retries, offsets, and limits.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite integer >= 0; `false` otherwise.
 */
export default function isNonNegativeInteger(value: unknown): value is number {
    // Fast path: must be a number primitive.
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

    // Must be >= 0.
    return value >= 0;
}
