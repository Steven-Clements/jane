/**
 * Checks whether a value is iterable.
 *
 * A value is iterable if it is not null or undefined and has a callable
 * `[Symbol.iterator]` method. This matches the behavior of `for...of`,
 * spread syntax, and `Array.from`. This helper never throws and never
 * mutates input.
 *
 * @param value - The value to check.
 * @returns `true` if the value is iterable; `false` otherwise.
 */
export default function isIterable<T = unknown>(value: unknown): value is Iterable<T> {
    return (
        value !== null &&
        value !== undefined &&
        typeof (value as { [Symbol.iterator]?: unknown })[Symbol.iterator] === 'function'
    );
}
