/**
 * Checks whether a value is a finite primitive number.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check and rejects `NaN`, `Infinity`, and `-Infinity` because
 * they are not meaningful numeric values for normalization or validation.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite primitive number,
 *          `false` otherwise.
 */
export default function isNumber(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value);
}
