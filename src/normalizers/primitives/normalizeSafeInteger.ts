/**
 * Guarantees a safe integer (within JavaScript's safe integer range)
 * or returns null.
 *
 * This helper accepts:
 * - native numbers that are finite, integer, and within the safe range
 * - string representations of integers ("0", "-1", "42", "0007")
 *
 * It never throws and never mutates input.
 * It does not coerce floats, booleans, or truthy/falsy values.
 */
export default function normalizeSafeInteger(value: unknown): number | null {
    // Fast path: already a number
    if (typeof value === 'number') {
        // Must be finite, integer, and within the safe integer range
        return Number.isSafeInteger(value) ? value : null;
    }

    // String path: trim and validate integer form
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        // Accept optional leading minus sign, but no plus sign or decimals
        // This avoids coercion surprises and ensures predictable behavior.
        if (!/^-?[0-9]+$/.test(trimmed)) return null;

        const asNumber = Number(trimmed);

        // Must be a safe integer
        return Number.isSafeInteger(asNumber) ? asNumber : null;
    }

    // All other types cannot be normalized
    return null;
}
