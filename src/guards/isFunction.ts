/**
 * Checks whether a value is a function.
 *
 * This helper never throws and never mutates input. It performs a strict
 * `typeof` check and only returns `true` for callable function values,
 * including arrow functions, traditional functions, and class constructors.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export default function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}
