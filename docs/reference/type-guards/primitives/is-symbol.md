# isSymbol

Checks whether a value is a **symbol**. A symbol is a primitive value created using the `Symbol` function.

This helper never throws and never mutates input. Use it when you need to confirm symbol types before running normalization or validation.

## Signature

```ts
function isSymbol(value: unknown): value is symbol
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper returns true only for symbol primitives. |

## Returns

A boolean:

- `true` if the value is a symbol.
- `false` otherwise.

## Examples

```ts
isSymbol(Symbol())          // true
isSymbol(Symbol('id'))      // true
isSymbol(Symbol.iterator)   // true

isSymbol(Object(Symbol()))  // false
isSymbol("abc")             // false
isSymbol(123)               // false
```

## Notes

- This helper performs a strict `typeof` check and does not accept `Symbol` wrapper objects.
- Use `normalizeSymbol` if you need to convert values into symbols.
- Use `validateSymbol` if you need a `Result<T>` instead of a boolean.

## Next up

[isUndefined](is-undefined.md)
