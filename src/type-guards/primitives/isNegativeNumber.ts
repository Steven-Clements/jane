/**
 * Checks whether a value is a negative number.
 *
 * A negative number is defined as a finite numeric primitive strictly less
 * than zero. Fractional values are allowed. This helper never throws and
 * never mutates input.
 *
 * Use this helper when you need a value that must be negative, for example:
 * debts, offsets, or deltas below zero.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a number < 0; `false` otherwise.
 */
export default function isNegativeNumber(value: unknown): value is number {
    // Must be a number primitive
    if (typeof value !== 'number') return false;

    // Must be finite. Rejects NaN, Infinity, -Infinity
    if (!Number.isFinite(value)) return false;

    // Must be strictly less than 0
    return value < 0;
}
