/**
 * Checks whether a value is a bigint.
 *
 * A bigint is a primitive numeric type that represents integers of arbitrary
 * precision. This helper never throws and never mutates input. It performs a
 * strict `typeof` check and does not coerce values.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a bigint; `false` otherwise.
 */
export default function isBigInteger(value: unknown): value is bigint {
    // Must be a bigint primitive. Rejects number values, Number objects,
    // and all non-numeric types.
    return typeof value === 'bigint';
}
