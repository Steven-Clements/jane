import isTypedArray from '../../type-guards/collections/isTypedArray';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a TypedArray instance.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateTypedArray(
    value: unknown,
    field: string,
): ValidationResult<TypedArray> {
    if (isTypedArray(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a TypedArray',
    };
}

/**
 * Broad union type covering all built-in TypedArray variants.
 */
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
