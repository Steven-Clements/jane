/**
 * Checks whether a value is an array.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `Array.isArray` check and only returns `true` for actual array instances.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 */
export default function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}
