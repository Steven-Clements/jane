/**
 * Attempts to normalize a value to a negative integer.
 *
 * This helper never throws and never mutates input. It returns a number
 * only if the input is a negative integer, either as a number primitive
 * or a string representing a negative integer. Otherwise, it returns null.
 *
 * Accepted input:
 * - number primitives < 0 (integers only)
 * - string representations of negative integers (e.g., "-42")
 *
 * Rejected input:
 * - zero or positive numbers
 * - non-integer numbers
 * - non-numeric strings
 * - NaN, Infinity, -Infinity
 *
 * @param value - The value to normalize.
 * @returns A negative integer, or null if normalization fails.
 */
export default function normalizeNegativeInteger(value: unknown): number | null {
    // Handle strings that may represent numbers
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        const parsed = Number(trimmed);
        if (!Number.isInteger(parsed) || parsed >= 0) return null;

        return parsed;
    }

    // Must be a number primitive
    if (typeof value !== 'number') return null;

    // Must be a finite, negative integer
    if (!Number.isFinite(value) || !Number.isInteger(value) || value >= 0) return null;

    return value;
}
