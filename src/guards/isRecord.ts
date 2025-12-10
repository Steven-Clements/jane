/**
 * Checks whether a value is a record-like object.
 *
 * A record is defined as any non-null, non-array object whose keys are strings.
 * This helper never throws and never mutates input. It accepts objects with any
 * prototype, including class instances and objects created via `Object.create(null)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a non-null, non-array object; `false` otherwise.
 */
export default function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
