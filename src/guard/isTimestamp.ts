/**
 * Checks whether a value is a valid numeric timestamp.
 *
 * A timestamp is defined as a finite number representing milliseconds since
 * the Unix epoch. This helper never throws and never mutates input. It
 * performs a strict type check and does not coerce strings or other values
 * into numbers.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite number, `false` otherwise.
 */
export default function isTimestamp(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value);
}
