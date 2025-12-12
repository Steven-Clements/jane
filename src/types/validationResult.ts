import type NormalizationError from './normalizationError';

export type ValidationResult<T> = { ok: true; value: T } | { ok: false; error: NormalizationError };
