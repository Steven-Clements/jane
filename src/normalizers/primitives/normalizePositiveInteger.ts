/**
 * Guarantees a positive integer (1 or greater) or returns null.
 *
 * This helper accepts:
 * - native numbers that are finite, integer, and >= 1
 * - string representations of positive integers ("1", "42", "0007")
 *
 * It never throws and never mutates input.
 * It does not coerce floats, booleans, or truthy/falsy values.
 */
export default function normalizePositiveInteger(value: unknown): number | null {
    // Fast path: already a number
    if (typeof value === 'number') {
        // Must be finite, integer, and >= 1
        return Number.isFinite(value) && Number.isInteger(value) && value >= 1 ? value : null;
    }

    // String path: trim and validate numeric form
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        // Reject non-digit characters (no signs, decimals, or whitespace)
        // This ensures predictable behavior and avoids JS coercion pitfalls.
        if (!/^[0-9]+$/.test(trimmed)) return null;

        // Convert to number
        const asNumber = Number(trimmed);

        // Must be >= 1 (leading zeros allowed)
        return asNumber >= 1 ? asNumber : null;
    }

    // All other types cannot be normalized
    return null;
}
