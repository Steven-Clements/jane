export type ValidationResult<T> =
    | { ok: true; value: T }
    | { ok: false; field: string; message: string };
