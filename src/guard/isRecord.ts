/**
 * Checks whether a value is a record-like object with string keys.
 *
 * A record is defined as any non-null, non-array object whose own enumerable
 * keys are all strings. This helper never throws and never mutates input.
 * It accepts objects with any prototype, including class instances and
 * objects created via `Object.create(null)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a non-null, non-array object with string keys; `false` otherwise.
 */
export default function isRecord(value: unknown): value is Record<string, unknown> {
    if (value === null || typeof value !== 'object') return false;
    if (Array.isArray(value)) return false; // optional, if you want arrays excluded

    // Reject objects with any symbol keys
    if (Object.getOwnPropertySymbols(value).length > 0) return false;

    return true;
}
