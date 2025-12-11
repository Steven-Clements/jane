/**
 * Checks whether a value is a symbol.
 *
 * A symbol is a primitive value created using the `Symbol` function. This
 * helper never throws and never mutates input. It performs a strict `typeof`
 * check and does not coerce values.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a symbol; `false` otherwise.
 */
export default function isSymbol(value: unknown): value is symbol {
    // Must be a symbol primitive. Rejects Symbol objects and all non-symbol types.
    return typeof value === 'symbol';
}
