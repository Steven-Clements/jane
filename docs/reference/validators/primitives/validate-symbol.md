# validateSymbol

Checks whether a value is a **symbol**. This helper uses the [isSymbol](../../type-guards/primitives/is-symbol.md) type guard internally. A symbol is a primitive value created via `Symbol()` or `Symbol(description)`.

It never throws and never mutates input. Use it when you need a strict symbol before normalization or further validation.

## Signature

```ts
function validateSymbol(value: unknown, field: string): ValidationResult<symbol>
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: symbol }`: If value is a symbol.
- `{ ok: false, field: string, message: string }`: If value is not a symbol.

## Behavior

- Uses [isSymbol](../../type-guards/primitives/is-symbol.md) internally.
- Only primitive symbols pass.
- Boxed symbols (`Object(Symbol()`)) fail.
- All non-symbol types fail.
- Never throws or mutates input.

## Examples

```ts
validateSymbol(Symbol(), "id")
// { ok: true, value: Symbol() }

validateSymbol(Symbol("x"), "tag")
// { ok: true, value: Symbol("x") }

validateSymbol("symbol", "string")
// { ok: false, field: "string", message: "Value must be a symbol" }

validateSymbol(Object(Symbol("wrapped")), "wrapped")
// { ok: false, field: "wrapped", message: "Value must be a symbol" }
```

## Notes

- This validator does not coerce values. Strings like `Symbol()` return an error.
- Because it depends on [isSymbol](../../type-guards/primitives/is-symbol.md), boxed symbols automatically fail.
- Suitable for validating unique keys, internal identifiers, and APIs that rely on symbol semantics.
- The validator never throws and never mutates input. All error reporting goes through structured `ValidationResult` objects.
