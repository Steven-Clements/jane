/**
 * Attempts to normalize a value to a negative number.
 *
 * This helper never throws and never mutates input. It returns a number
 * only if the input is strictly less than zero, either as a number
 * primitive or a string representing a negative number. Otherwise, it returns null.
 *
 * Accepted input:
 * - number primitives < 0
 * - string representations of numbers < 0 (e.g., "-3.14", "-42")
 *
 * Rejected input:
 * - zero or positive numbers
 * - non-numeric strings
 * - NaN, Infinity, -Infinity
 *
 * @param value - The value to normalize.
 * @returns A negative number, or null if normalization fails.
 */
export default function normalizeNegativeNumber(value: unknown): number | null {
    // Handle strings that may represent numbers
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        const parsed = Number(trimmed);
        if (!Number.isFinite(parsed) || parsed >= 0) return null;

        return parsed;
    }

    // Must be a number primitive
    if (typeof value !== 'number') return null;

    // Must be finite and strictly negative
    if (!Number.isFinite(value) || value >= 0) return null;

    return value;
}
