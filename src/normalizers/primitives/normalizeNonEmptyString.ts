/**
 * Normalizes a value into a trimmed, non‑empty string or returns null.
 *
 * This helper accepts only native strings. The returned string is trimmed
 * to remove leading and trailing whitespace. If the trimmed result is an
 * empty string, null is returned. All non-string values return null.
 *
 * This function never throws and never mutates input.
 */
export default function normalizeNonEmptyString(value: unknown): string | null {
    // Only native strings are accepted
    if (typeof value !== 'string') {
        return null;
    }

    // Trim whitespace; empty results are not considered valid
    const normalized = value.trim();

    return normalized === '' ? null : normalized;
}
