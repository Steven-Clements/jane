/**
 * Checks whether a value is a WeakSet.
 *
 * This helper performs a strict `instanceof` check against `WeakSet`. It never
 * throws and never mutates input. It accepts native WeakSet instances and
 * WeakSet subclasses, including wrapper objects created with `Object(...)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a WeakSet; `false` otherwise.
 */
export default function isWeakSet<T extends object = object>(value: unknown): value is WeakSet<T> {
    return value instanceof WeakSet;
}
