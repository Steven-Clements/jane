/**
 * Checks whether a value is undefined.
 *
 * This helper performs a strict equality check against `undefined`. It never
 * throws and never mutates input. Use it when you need to confirm that a value
 * is explicitly undefined before running normalization or validation.
 *
 * @param value - The value to check.
 * @returns `true` if the value is undefined; `false` otherwise.
 */
export default function isUndefined(value: unknown): value is undefined {
    return value === undefined;
}
