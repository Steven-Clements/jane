/**
 * Checks whether a value is a valid Date instance.
 *
 * This helper never throws and never mutates input. It verifies that the value
 * is a `Date` object and that its internal timestamp is valid. Invalid dates
 * such as `new Date("invalid")` are rejected because their time value is `NaN`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Date instance with a valid timestamp,
 *          `false` otherwise.
 */
export default function isDate(value: unknown): value is Date {
    return value instanceof Date && !Number.isNaN(value.getTime());
}
