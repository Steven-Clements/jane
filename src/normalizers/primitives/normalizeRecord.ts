import normalizePlainObject from './normalizePlainObject.js';

/**
 * Normalizes a record-like value using a value normalizer.
 *
 * Behavior:
 * - Accepts only plain objects (Object.prototype or null prototype)
 * - Applies the provided normalizer to each value
 * - Rejects the entire record if any value normalizes to null
 * - Returns a new object; never mutates input
 * - Never throws
 */
export default function normalizeRecord<T>(
    value: unknown,
    normalizeValue: (v: unknown) => T | null,
): Record<string, T> | null {
    const obj: Record<string, unknown> | null = normalizePlainObject(value);
    if (obj === null) {
        return null;
    }

    const result: Record<string, T> = {};

    for (const key of Object.keys(obj)) {
        const normalized = normalizeValue(obj[key]);
        if (normalized === null) {
            return null;
        }
        result[key] = normalized;
    }

    return result;
}
