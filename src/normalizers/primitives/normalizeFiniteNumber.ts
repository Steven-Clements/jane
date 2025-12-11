/**
 * Guarantees a finite number or returns null.
 *
 * This helper accepts:
 * - native numbers that are finite
 * - string representations of finite numbers ("3", "3.14", "0007", "2.0")
 *
 * It never throws and never mutates input.
 * It does not coerce booleans, objects, or truthy/falsy values.
 */
export default function normalizeFiniteNumber(value: unknown): number | null {
    // Fast path: already a number
    if (typeof value === 'number') {
        // Must be finite
        return Number.isFinite(value) ? value : null;
    }

    // String path: trim and validate numeric form
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        // Accept unsigned or signed numbers with optional decimal part.
        // Reject scientific notation, malformed decimals, and whitespace.
        if (!/^-?[0-9]+(\.[0-9]+)?$/.test(trimmed)) return null;

        const asNumber = Number(trimmed);

        // Must be finite
        return Number.isFinite(asNumber) ? asNumber : null;
    }

    // All other types cannot be normalized
    return null;
}
