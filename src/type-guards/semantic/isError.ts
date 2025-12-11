/**
 * Checks whether a value is an Error object.
 *
 * This helper performs a strict `instanceof` check against `Error`. It accepts
 * all native error types (e.g., TypeError, RangeError) as well as custom error
 * subclasses. It never throws and never mutates input.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an Error object; `false` otherwise.
 */
export default function isError(value: unknown): value is Error {
    return value instanceof Error;
}
