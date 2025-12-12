/**
 * Normalizes a timestamp-like value into a millisecond epoch number or null.
 *
 * Options:
 * - strict = false (default): accepts any string Date.parse(...) can interpret.
 * - strict = true: only accepts ISO‑8601 strings (YYYY-MM-DD or full timestamp).
 *
 * Behavior:
 * - Never mutates input and never throws.
 * - Rejects invalid dates, NaN, Infinity, and unparseable strings.
 * - Returns null for all unsupported or invalid values.
 */
export default function normalizeTimestamp(
    value: unknown,
    options?: { strict?: boolean },
): number | null {
    const strict = options?.strict === true;

    // Fast path: valid Date instance
    if (value instanceof Date) {
        const time = value.getTime();
        return Number.isFinite(time) ? time : null;
    }

    // Fast path: finite number (epoch ms)
    if (typeof value === 'number') {
        return Number.isFinite(value) ? value : null;
    }

    // String path
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        if (strict) {
            // ISO‑8601 date or datetime (no timezone guessing)
            const isoPattern =
                /^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})?)?$/;

            if (!isoPattern.test(trimmed)) return null;
        }

        const parsed = Date.parse(trimmed);
        return Number.isFinite(parsed) ? parsed : null;
    }

    // Everything else is unsupported
    return null;
}
