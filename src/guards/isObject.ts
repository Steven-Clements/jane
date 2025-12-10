/**
 * Checks whether a value is a non-null, non-array object.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check, excludes `null`, and excludes arrays. It accepts objects
 * with any prototype, including `Object.create(null)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an object, not `null`, and not an array;
 *          `false` otherwise.
 */
export default function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
