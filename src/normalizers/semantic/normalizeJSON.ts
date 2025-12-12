/**
 * Normalizes a JSON‑like value into a parsed JavaScript value or null.
 *
 * Non‑strict mode (default):
 * - Accepts any value that JSON.parse can interpret when provided as a string
 * - Accepts objects and arrays by returning them unchanged
 *
 * Strict mode:
 * - Accepts only strings that contain valid JSON according to the specification
 * - Rejects non‑string inputs
 * - Rejects strings with leading or trailing whitespace
 * - Rejects strings that are not valid JSON
 *
 * Behavior:
 * - Never mutates input and never throws
 * - Returns null for all unsupported or invalid values
 */
export default function normalizeJSON(
    value: unknown,
    options?: { strict?: boolean },
): unknown | null {
    const strict = options?.strict === true;

    // Strict mode: only strings allowed
    if (strict) {
        if (typeof value !== 'string') return null;

        // No leading or trailing whitespace
        if (value.trim() !== value) return null;

        try {
            return JSON.parse(value);
        } catch {
            return null;
        }
    }

    // Non‑strict mode: accept objects and arrays as already‑parsed JSON
    if (value !== null && typeof value === 'object') {
        return value;
    }

    // Non‑strict mode: accept strings that JSON.parse can handle
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        try {
            return JSON.parse(trimmed);
        } catch {
            return null;
        }
    }

    // Everything else is unsupported
    return null;
}
