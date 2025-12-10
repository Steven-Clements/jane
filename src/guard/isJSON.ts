/**
 * Checks whether a value is a valid JSON value.
 *
 * A JSON value is one of:
 * - null
 * - boolean
 * - finite number
 * - string
 * - an array of JSON values
 * - a plain object whose values are JSON values
 *
 * This helper never throws and never mutates input. It performs a strict,
 * recursive structural check aligned with the ECMAScript JSON specification.
 * Circular references are rejected.
 *
 * @param value - The value to check.
 * @param visited - Internal WeakSet to track visited objects (for circular references).
 * @returns `true` if the value is a valid JSON value; `false` otherwise.
 */
export default function isJSON(value: unknown, visited = new WeakSet()): value is JSONValue {
    if (value === null || typeof value === 'string' || typeof value === 'boolean') {
        return true;
    }

    if (typeof value === 'number') {
        return Number.isFinite(value);
    }

    if (Array.isArray(value)) {
        if (visited.has(value)) return false;
        visited.add(value);
        return value.every((item) => isJSON(item, visited));
    }

    if (typeof value === 'object') {
        if (value === null) return true;
        if (visited.has(value)) return false;
        visited.add(value);

        // Reject objects with null prototype or custom prototypes
        if (Object.getPrototypeOf(value) !== Object.prototype) {
            return false;
        }

        for (const key in value as Record<string, unknown>) {
            if (!isJSON((value as Record<string, unknown>)[key], visited)) {
                return false;
            }
        }

        return true;
    }

    return false;
}

// Helper type for consumers
export type JSONValue =
    | null
    | boolean
    | number
    | string
    | JSONValue[]
    | { [key: string]: JSONValue };
