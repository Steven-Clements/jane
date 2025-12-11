/**
 * Normalizes a value into a trimmed string or returns null.
 *
 * This helper accepts only native strings. The returned string is trimmed
 * to remove leading and trailing whitespace. All other values return null.
 * This function never throws and never mutates input.
 */
export default function normalizeString(value: unknown): string | null {
    // Fast path: only native strings are accepted
    if (typeof value !== 'string') {
        return null;
    }

    // Trim whitespace; empty results are still valid strings
    const normalized = value.trim();

    return normalized;
}
