/**
 * Checks whether a value is null.
 *
 * This helper performs a strict equality check against `null`. It never throws
 * and never mutates input. Use it when you need to confirm that a value is
 * explicitly null before running normalization or validation.
 *
 * @param value - The value to check.
 * @returns `true` if the value is null; `false` otherwise.
 */
export default function isNull(value: unknown): value is null {
    return value === null;
}
