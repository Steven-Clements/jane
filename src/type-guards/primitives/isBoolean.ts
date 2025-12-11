/**
 * Checks whether a value is a boolean.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check and only returns `true` for primitive boolean values.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a boolean, `false` otherwise.
 */
export default function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}
