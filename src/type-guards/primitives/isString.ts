/**
 * Checks whether a value is a primitive string.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check and does not coerce values. Note that `String` objects
 * (e.g., `new String("hello")`) return `false`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a primitive string, `false` otherwise.
 */
export default function isString(value: unknown): value is string {
    return typeof value === 'string';
}
