/**
 * Checks whether a value is null or undefined.
 *
 * This helper performs a strict equality check against both `null` and
 * `undefined`. It never throws and never mutates input. Use it when you need
 * to confirm that a value is explicitly missing before running normalization
 * or validation.
 *
 * @param value - The value to check.
 * @returns `true` if the value is null or undefined; `false` otherwise.
 */
export default function isNullOrUndefined(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}
