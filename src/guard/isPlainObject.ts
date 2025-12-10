/**
 * Checks whether a value is a plain object.
 *
 * A plain object is one whose prototype is exactly `Object.prototype`.
 * This helper never throws and never mutates input. It excludes `null`,
 * arrays, class instances, and objects with custom prototypes.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a non-null object with
 *          `Object.prototype` as its prototype; `false` otherwise.
 */
export default function isPlainObject(value: unknown): value is object {
    return (
        typeof value === 'object' &&
        value !== null &&
        Object.getPrototypeOf(value) === Object.prototype
    );
}
