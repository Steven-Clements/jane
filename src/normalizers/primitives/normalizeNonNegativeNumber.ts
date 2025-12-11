/**
 * Guarantees a non-negative finite number (0 or greater) or returns null.
 *
 * This helper accepts:
 * - native numbers that are finite and >= 0
 * - string representations of non-negative numbers ("0", "3", "3.14", "0007", "2.0")
 *
 * It never throws and never mutates input.
 * It does not coerce booleans, objects, or truthy/falsy values.
 */
export default function normalizeNonNegativeNumber(value: unknown): number | null {
    // Fast path: already a number
    if (typeof value === 'number') {
        // Must be finite and >= 0
        return Number.isFinite(value) && value >= 0 ? value : null;
    }

    // String path: trim and validate numeric form
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        // Reject anything that is not a valid JS number literal
        // This avoids coercion surprises (e.g., "1e3", "+5", "-0", " 3.14 " is allowed after trim)
        if (!/^[0-9]+(\.[0-9]+)?$/.test(trimmed)) return null;

        const asNumber = Number(trimmed);

        // Must be finite and >= 0
        return Number.isFinite(asNumber) && asNumber >= 0 ? asNumber : null;
    }

    // All other types cannot be normalized
    return null;
}
