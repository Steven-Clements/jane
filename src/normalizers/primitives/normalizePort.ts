/**
 * Normalizes a port-like value into a valid TCP port number or null.
 *
 * Non‑strict mode (default):
 * - Accepts integer ports from zero through sixty five thousand five hundred thirty five
 * - Accepts strings that represent those integers
 *
 * Strict mode:
 * - Accepts integer ports from one through sixty five thousand five hundred thirty five
 * - Accepts only digit‑only strings with no whitespace and no leading zeros
 *
 * Behavior:
 * - Never mutates input and never throws
 * - Rejects negative numbers, non‑finite numbers, and numbers above the valid range
 * - Rejects strings that do not represent a valid integer port
 * - Returns null for all unsupported or invalid values
 */
export default function normalizePort(
    value: unknown,
    options?: { strict?: boolean },
): number | null {
    const strict = options?.strict === true;

    // Number path
    if (typeof value === 'number') {
        if (!Number.isInteger(value)) return null;

        if (strict) {
            if (value >= 1 && value <= 65535) return value;
            return null;
        }

        if (value >= 0 && value <= 65535) return value;
        return null;
    }

    // String path
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed === '') return null;

        // Strict mode: no whitespace, no leading zeros unless the value is exactly zero
        if (strict) {
            // Strict mode: no whitespace, no leading zeros, digits only
            if (!/^[1-9]\d*$/.test(value)) {
                return null;
            }

            const parsed = Number(value);
            if (parsed >= 1 && parsed <= 65535) {
                return parsed;
            }

            return null;
        }

        const parsed = Number(trimmed);
        if (!Number.isInteger(parsed)) return null;

        if (strict) {
            if (parsed >= 1 && parsed <= 65535) return parsed;
            return null;
        }

        if (parsed >= 0 && parsed <= 65535) return parsed;
        return null;
    }

    // Everything else is unsupported
    return null;
}
