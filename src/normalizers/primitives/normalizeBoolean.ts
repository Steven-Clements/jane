/**
 * Normalizes a value into a boolean or returns null.
 *
 * This helper accepts:
 * - native booleans (returned unchanged)
 * - string representations of booleans ("true" / "false", case‑insensitive, trimmed)
 *
 * All other values return null. This function never throws and never mutates input.
 */
export default function normalizeBoolean(value: unknown): boolean | null {
    // Fast path: already a boolean
    if (typeof value === 'boolean') {
        return value;
    }

    // Normalize string input: trim whitespace and lowercase for comparison
    if (typeof value === 'string') {
        const normalized = value.trim().toLowerCase();

        if (normalized === 'true') return true;
        if (normalized === 'false') return false;
    }

    // Everything else is not interpretable as a boolean
    return null;
}
