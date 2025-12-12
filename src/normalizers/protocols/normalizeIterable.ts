/**
 * Normalizes an iterable‑like value into a real iterable or null.
 *
 * Behavior:
 * - Returns iterable values unchanged
 * - Accepts strings, arrays, sets, maps, typed arrays, generators, and custom iterables
 * - Rejects non‑iterable values
 * - Rejects objects whose iterator throws when accessed or invoked
 * - Never mutates input and never throws
 */
export default function normalizeIterable<T = unknown>(value: unknown): Iterable<T> | null {
    if (value === null || (typeof value !== 'object' && typeof value !== 'string')) {
        return null;
    }

    // Strings are iterable
    if (typeof value === 'string') {
        return value as unknown as Iterable<T>;
    }

    // Objects must have a callable Symbol.iterator
    let iteratorMethod: unknown;
    try {
        iteratorMethod = (value as { [Symbol.iterator]?: unknown })[Symbol.iterator];
    } catch {
        return null;
    }

    if (typeof iteratorMethod !== 'function') {
        return null;
    }

    // Verify that calling the iterator does not throw synchronously
    try {
        const iterator = (iteratorMethod as () => Iterator<T>).call(value);
        if (iterator === null || typeof iterator !== 'object') {
            return null;
        }
    } catch {
        return null;
    }

    return value as Iterable<T>;
}
