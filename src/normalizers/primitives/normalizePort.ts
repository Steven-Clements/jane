/**
 * Normalizes a port-like value into a valid TCP port number or null.
 *
 * Non-strict mode (default):
 * - Accepts integer ports from 0 through 65535
 * - Accepts strings representing those integers (whitespace allowed)
 *
 * Strict mode:
 * - Accepts integer ports from 1 through 65535
 * - Accepts only digit-only strings with no whitespace and no leading zeros
 *
 * Behavior:
 * - Never mutates input and never throws
 * - Rejects negative numbers, non-finite numbers, and numbers above the valid range
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
        if (strict) return value >= 1 && value <= 65535 ? value : null;
        return value >= 0 && value <= 65535 ? value : null;
    }

    // String path
    if (typeof value === 'string') {
        if (strict) {
            // Strict: no whitespace, no leading zeros, only digits
            if (!/^[1-9]\d*$/.test(value)) return null;
            const parsed = Number(value);
            return parsed >= 1 && parsed <= 65535 ? parsed : null;
        }

        // Non-strict: trim, parse integer, allow zero
        const trimmed = value.trim();
        if (trimmed === '') return null;
        const parsed = Number(trimmed);
        if (!Number.isInteger(parsed)) return null;
        return parsed >= 0 && parsed <= 65535 ? parsed : null;
    }

    // Unsupported types
    return null;
}
