/**
 * Checks whether a value is a Promise-like object.
 *
 * This helper never throws and never mutates input. It performs a structural
 * check: the value must be a non-null object with a callable `then` method.
 * This includes native Promises and user-defined thenables.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Promise-like object, `false` otherwise.
 */
export default function isPromise(value: unknown): value is Promise<unknown> {
    return (
        value !== null &&
        typeof value === 'object' &&
        typeof (value as { then?: unknown }).then === 'function'
    );
}
