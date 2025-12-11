/**
 * Checks whether a value is a Set.
 *
 * This helper performs a strict `instanceof` check against `Set`. It never
 * throws and never mutates input. It accepts native Set instances and Set
 * subclasses, including wrapper objects created with `Object(...)`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Set; `false` otherwise.
 */
export default function isSet<T = unknown>(value: unknown): value is Set<T> {
    return value instanceof Set;
}
