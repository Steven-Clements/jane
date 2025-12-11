/**
 * Normalizes a value into a finite number or returns null.
 *
 * This helper accepts:
 * - native numbers (returned unchanged if finite)
 * - string representations of numbers (trimmed before parsing)
 *
 * All other values return null. NaN, Infinity, and -Infinity are rejected.
 * This function never throws and never mutates input.
 */
export default function normalizeNumber(value: unknown): number | null {
    // Fast path: accept only finite native numbers
    if (typeof value === 'number') {
        return Number.isFinite(value) ? value : null;
    }

    // Only strings may be parsed into numbers
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        const parsed = Number(trimmed);
        return Number.isFinite(parsed) ? parsed : null;
    }

    // Everything else is not interpretable as a number
    return null;
}
