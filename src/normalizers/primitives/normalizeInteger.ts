/**
 * Normalizes a value into an integer or returns null.
 *
 * This helper accepts:
 * - native numbers (returned unchanged if they are finite integers)
 * - string representations of integers (trimmed before parsing)
 *
 * All other values return null. NaN, Infinity, and non-integer numbers
 * are rejected. This function never throws and never mutates input.
 */
export default function normalizeInteger(value: unknown): number | null {
    // Fast path: accept only finite integers
    if (typeof value === 'number') {
        return Number.isInteger(value) ? value : null;
    }

    // Only strings may be parsed into integers
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        // Parse and ensure the result is a finite integer
        const parsed = Number(trimmed);
        return Number.isInteger(parsed) ? parsed : null;
    }

    // Everything else is not interpretable as an integer
    return null;
}
