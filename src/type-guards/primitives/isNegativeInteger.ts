/**
 * Checks whether a value is a negative integer.
 *
 * A negative integer is defined as a finite number primitive with no fractional
 * component and strictly less than zero. This helper never throws and never
 * mutates input.
 *
 * Use this helper when integer semantics matter (array offsets, counters,
 * iteration counts) and the value must be negative.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite negative integer; `false` otherwise.
 */
export default function isNegativeInteger(value: unknown): value is number {
    // Must be a number primitive
    if (typeof value !== 'number') return false;

    // Must be finite. Rejects NaN, Infinity, -Infinity
    if (!Number.isFinite(value)) return false;

    // Must be an integer. Rejects fractions like -1.5
    if (!Number.isInteger(value)) return false;

    // Must be strictly less than zero
    return value < 0;
}
