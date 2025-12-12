/**
 * Checks whether a value is a positive number.
 *
 * A positive number is defined as a finite numeric primitive strictly greater
 * than zero. Fractional values are allowed. This helper never throws and
 * never mutates input.
 *
 * Use this helper when you need a value that is guaranteed to be a positive
 * number, for example: durations, counts, amounts, or offsets that must be > 0.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a number > 0; `false` otherwise.
 */
export default function isPositiveNumber(value: unknown): value is number {
    // Must be a number primitive
    if (typeof value !== 'number') return false;

    // Must be finite. Rejects NaN, Infinity, -Infinity
    if (!Number.isFinite(value)) return false;

    // Must be strictly greater than 0
    return value > 0;
}
