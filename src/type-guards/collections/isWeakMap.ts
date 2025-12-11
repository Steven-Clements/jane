/**
 * Checks whether a value is a WeakMap.
 *
 * This helper performs a strict `instanceof` check against `WeakMap`. It never
 * throws and never mutates input. It accepts native WeakMap instances and
 * WeakMap subclasses, including wrapper objects created with `Object(...)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a WeakMap; `false` otherwise.
 */
export default function isWeakMap<K extends object = object, V = unknown>(
    value: unknown,
): value is WeakMap<K, V> {
    return value instanceof WeakMap;
}
