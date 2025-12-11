/**
 * Checks whether a value is a Map.
 *
 * This helper performs a strict `instanceof` check against `Map`. It never
 * throws and never mutates input. It accepts native Map instances and Map
 * subclasses, including wrapper objects created with `Object(...)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Map; `false` otherwise.
 */
export default function isMap<K = unknown, V = unknown>(value: unknown): value is Map<K, V> {
    return value instanceof Map;
}
