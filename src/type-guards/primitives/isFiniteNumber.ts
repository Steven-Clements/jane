/**
 * Checks whether a value is a finite primitive number.
 *
 * A finite number is defined as a number primitive that is not `NaN`,
 * `Infinity`, or `-Infinity`. This helper never throws and never mutates input.
 * It accepts any value and performs a strict numeric check without coercion.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a finite primitive number; `false` otherwise.
 */
export default function isFiniteNumber(value: unknown): value is number {
    return typeof value === 'number' && Number.isFinite(value);
}
