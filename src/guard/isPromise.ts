/**
 * Checks whether a value is a Promise.
 *
 * This helper performs a strict `instanceof` check against `Promise`. It never
 * throws and never mutates input. It accepts native Promise instances and
 * Promise subclasses, but does not treat arbitrary thenables as Promises.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Promise; `false` otherwise.
 */
export default function isPromise(value: unknown): value is Promise<unknown> {
    return value instanceof Promise;
}
