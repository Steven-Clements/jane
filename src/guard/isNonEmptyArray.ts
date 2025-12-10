/**
 * Checks whether a value is a non-empty array.
 *
 * This helper performs a strict Array check and verifies that the array
 * contains at least one element. It never throws and never mutates input.
 * Use it when you need to confirm that a value is an array with meaningful
 * content before running normalization or validation.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a non-empty array; `false` otherwise.
 */
export default function isNonEmptyArray<T = unknown>(value: unknown): value is T[] {
    return Array.isArray(value) && value.length > 0;
}
