/**
 * Normalizes an async‑iterable‑like value into a real async iterable or null.
 *
 * Behavior:
 * - Returns async iterable values unchanged
 * - Accepts objects with a valid Symbol.asyncIterator method
 * - Rejects non‑async‑iterable values
 * - Rejects objects whose async iterator throws when accessed or invoked
 * - Never mutates input and never throws
 */
export default function normalizeAsyncIterable<T = unknown>(
    value: unknown,
): AsyncIterable<T> | null {
    if (value === null || (typeof value !== 'object' && typeof value !== 'function')) {
        return null;
    }

    // Extract Symbol.asyncIterator safely
    let iteratorMethod: unknown;
    try {
        iteratorMethod = (value as { [Symbol.asyncIterator]?: unknown })[Symbol.asyncIterator];
    } catch {
        return null;
    }

    if (typeof iteratorMethod !== 'function') {
        return null;
    }

    // Verify that calling the async iterator does not throw synchronously
    try {
        const iterator = (iteratorMethod as () => AsyncIterator<T>).call(value);
        if (iterator === null || typeof iterator !== 'object') {
            return null;
        }
    } catch {
        return null;
    }

    return value as AsyncIterable<T>;
}
