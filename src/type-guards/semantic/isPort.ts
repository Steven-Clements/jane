/**
 * Determine whether a value is a valid TCP/UDP port number.
 *
 * A port is defined as a finite integer between 0 and 65535 inclusive.
 * This helper performs a strict runtime check with no coercion and
 * requires an `unknown` input to enforce explicit validation at call sites.
 *
 * Rationale:
 * - Avoids coercion from strings or other primitives.
 * - Ensures predictable behavior across all call sites.
 * - Keeps the guard minimal, explicit, and aligned with Jane’s clarity-first philosophy.
 */
export default function isPort(value: unknown): value is number {
    return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 65535;
}
