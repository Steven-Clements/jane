/**
 * Checks whether a value is one of the allowed enum values.
 *
 * This helper never throws and never mutates input. It works with both
 * string and numeric enums by checking whether the provided value is
 * included in the enum object's value list.
 *
 * @param enumObject - The enum-like object whose values define the allowed set.
 * @param value - The value to check.
 * @returns `true` if the value is one of the enum's values, `false` otherwise.
 */
export default function isEnumValue<T extends Record<string, unknown>>(
    enumObject: T,
    value: unknown,
): value is T[keyof T] {
    return Object.values(enumObject).includes(value);
}
