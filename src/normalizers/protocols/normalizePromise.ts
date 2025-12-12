/**
 * Normalizes a promise‑like value into a real Promise or null.
 *
 * Behavior:
 * - Returns a Promise unchanged
 * - Wraps thenable objects in a real Promise
 * - Returns null for all other values
 * - Never mutates input and never throws
 */
export default function normalizePromise<T = unknown>(value: unknown): Promise<T> | null {
    // Already a real Promise
    if (value instanceof Promise) {
        return value;
    }

    // Thenable detection
    if (
        value !== null &&
        typeof value === 'object' &&
        'then' in value &&
        typeof (value as { then?: unknown }).then === 'function'
    ) {
        const thenMethod = (value as { then: unknown }).then;

        // Call the thenable synchronously to detect immediate throws
        try {
            let resolved = false;
            let rejected = false;
            let storedValue: T | undefined;
            // @eslint-ignore-no-unused-vars
            let _storedError: unknown;
            (thenMethod as (resolve: (v: T) => void, reject: (e: unknown) => void) => void)(
                (v: T) => {
                    resolved = true;
                    storedValue = v;
                },
                (e: unknown) => {
                    rejected = true;
                    _storedError = e;
                },
            );

            // If the thenable rejected synchronously → treat as invalid
            if (rejected) {
                return null;
            }

            // If it resolved synchronously → return a resolved Promise
            if (resolved) {
                return Promise.resolve(storedValue as T);
            }

            // Otherwise, wrap it for asynchronous resolution
            return new Promise<T>((resolve, reject) => {
                (thenMethod as (resolve: (v: T) => void, reject: (e: unknown) => void) => void)(
                    resolve,
                    reject,
                );
            });
        } catch {
            // If calling then threw synchronously → invalid thenable
            return null;
        }
    }

    // Everything else is unsupported
    return null;
}
