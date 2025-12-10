/**
 * Checks whether a value is a primitive number.
 *
 * This helper performs a strict `typeof` check and does not enforce finiteness.
 * It accepts `NaN`, `Infinity`, and `-Infinity` because they are still valid
 * number primitives in JavaScript. This helper never throws and never mutates
 * input.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a primitive number; `false` otherwise.
 */
export default function isNumber(value: unknown): value is number {
    // Must be a number primitive. Rejects bigint, Number objects, and all
    // non-numeric types.
    return typeof value === 'number';
}
