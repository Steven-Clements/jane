/**
 * Checks whether a value is a primitive, non-empty string.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check and does not trim or normalize the value. Whitespace and
 * zero-width characters count as non-empty. Note that `String` objects
 * (e.g., `new String("hello")`) return `false`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a primitive string with length > 0,
 *          `false` otherwise.
 */
export default function isNonEmptyString(value: unknown): value is string {
    return typeof value === 'string' && value.length > 0;
}
