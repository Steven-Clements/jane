/**
 * Checks whether a value is a TypedArray.
 *
 * A TypedArray is any of the built-in typed array types such as Uint8Array,
 * Float32Array, BigInt64Array, etc. This helper never throws and never mutates
 * input. It accepts TypedArray subclasses and wrapper objects created with
 * `Object(...)`.
 *
 * If an expected constructor is provided, the value must be an instance of
 * that specific TypedArray type.
 *
 * @param value - The value to check.
 * @param expected - Optional TypedArray constructor to enforce a specific type.
 * @returns `true` if the value is a TypedArray (and matches the expected type if provided).
 */
export default function isTypedArray<T extends TypedArray = TypedArray>(
    value: unknown,
    expected?: { new (...args: unknown[]): T },
): value is T {
    if (value === null || value === undefined || typeof value !== 'object') {
        return false;
    }

    // Must be a view on an ArrayBuffer, but not a DataView
    const isTA = ArrayBuffer.isView(value) && !(value instanceof DataView);

    if (!isTA) {
        return false;
    }

    // If no expected constructor is provided, any TypedArray is acceptable
    if (!expected) {
        return true;
    }

    return value instanceof expected;
}

// Helper type for consumers
export type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array
    | BigInt64Array
    | BigUint64Array;
