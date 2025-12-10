/**
 * Checks whether a value is a finite integer.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check and relies on `Number.isInteger`, which rejects `NaN`,
 * `Infinity`, and `-Infinity`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite integer,
 *          `false` otherwise.
 */
export default function isInteger(value: unknown): value is number {
    return typeof value === 'number' && Number.isInteger(value);
}
