import isPort from '../../type-guards/semantic/isPort';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a valid TCP/UDP port number.
 *
 * A port is defined as a finite integer between 0 and 65535 (inclusive).
 *
 * It never throws and never mutates input.
 */
export default function validatePort(value: unknown, field: string): ValidationResult<number> {
    if (isPort(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a valid port number (0–65535)',
    };
}
