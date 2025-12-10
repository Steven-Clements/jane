/**
 * Checks whether a value is a Unix timestamp in milliseconds.
 *
 * A timestamp is defined as a finite integer number representing milliseconds
 * since the Unix epoch (1970-01-01T00:00:00Z). This helper never throws and
 * never mutates input. It performs strict numeric checks without coercion.
 *
 * Negative timestamps are allowed because they represent valid dates before
 * the Unix epoch.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite integer timestamp; `false` otherwise.
 */
export default function isTimestamp(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value);
}
