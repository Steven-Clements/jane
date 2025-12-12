/**
 * Attempts to normalize a value to a positive number.
 *
 * This helper never throws and never mutates input. It returns a number
 * only if the input is strictly greater than zero, either as a number
 * primitive or a string representing a positive number. Otherwise, it returns null.
 *
 * Accepted input:
 * - number primitives > 0
 * - string representations of numbers > 0 (e.g., "3.14", "42")
 *
 * Rejected input:
 * - zero or negative numbers
 * - non-numeric strings
 * - NaN, Infinity, -Infinity
 *
 * @param value - The value to normalize.
 * @returns A positive number, or null if normalization fails.
 */
export default function normalizePositiveNumber(value: unknown): number | null {
    // Handle strings that may represent numbers
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        const parsed = Number(trimmed);
        if (!Number.isFinite(parsed) || parsed <= 0) return null;

        return parsed;
    }

    // Must be a number primitive
    if (typeof value !== 'number') return null;

    // Must be finite and strictly positive
    if (!Number.isFinite(value) || value <= 0) return null;

    return value;
}
