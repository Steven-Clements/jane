/**
 * Normalizes a plain-object-like value into a real plain object or null.
 *
 * Behavior:
 * - Accepts objects whose prototype is Object.prototype or null
 * - Rejects arrays, functions, class instances, and exotic objects
 * - Rejects objects whose prototype is not Object.prototype or null
 * - Rejects values that are not objects
 * - Never mutates input and never throws
 */
export default function normalizePlainObject(value: unknown): Record<string, unknown> | null {
    if (value === null || typeof value !== 'object') {
        return null;
    }

    // Get the prototype safely using Reflect.getPrototypeOf
    let proto: unknown;
    try {
        proto = Reflect.getPrototypeOf(value);
    } catch {
        return null;
    }

    // Accept only Object.prototype or null
    if (proto !== Object.prototype && proto !== null) {
        return null;
    }

    return value as Record<string, unknown>;
}
