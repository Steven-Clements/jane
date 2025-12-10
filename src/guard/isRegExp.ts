/**
 * Checks whether a value is a regular expression.
 *
 * This helper performs an internal [[Class]] check to ensure the value is a
 * genuine RegExp instance and not a wrapper object. It never throws and never
 * mutates input.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a RegExp object; `false` otherwise.
 */
export default function isRegExp(value: unknown): value is RegExp {
    return value instanceof RegExp;
}
