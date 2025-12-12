import normalizeString from '../../normalizers/primitives/normalizeString';

export interface NormalizationError {
    kind: 'invalid_string';
    message: string;
    input: unknown;
}

export type ValidationResult<T> = { ok: true; value: T } | { ok: false; error: NormalizationError };

/**
 * Validates that a value is a string.
 *
 * Behavior:
 * - Delegates to normalizeString
 * - Returns { ok: true, value } when normalization succeeds
 * - Returns { ok: false, error } when normalization fails
 * - Never throws
 * - Never mutates input
 */
export default function validateString(value: unknown): ValidationResult<string> {
    const normalized = normalizeString(value);

    if (normalized === null) {
        return {
            ok: false,
            error: {
                kind: 'invalid_string',
                message: 'Value is not a valid string',
                input: value,
            },
        };
    }

    return {
        ok: true,
        value: normalized,
    };
}
