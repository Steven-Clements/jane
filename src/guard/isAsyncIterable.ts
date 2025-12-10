/**
 * Checks whether a value is async iterable.
 *
 * A value is async iterable if it is not null or undefined and has a callable
 * `[Symbol.asyncIterator]` method. This matches the behavior of `for await...of`
 * and other async iteration constructs. This helper never throws and never
 * mutates input.
 *
 * @param value - The value to check.
 * @returns `true` if the value is async iterable; `false` otherwise.
 */
export default function isAsyncIterable<T = unknown>(value: unknown): value is AsyncIterable<T> {
    return (
        value !== null &&
        value !== undefined &&
        typeof (value as { [Symbol.asyncIterator]?: unknown })[Symbol.asyncIterator] === 'function'
    );
}
