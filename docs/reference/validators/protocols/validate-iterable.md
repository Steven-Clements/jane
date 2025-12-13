# validateIterable

Checks whether a value is **iterable**. This helper uses the [isIterable](../../type-guards/protocols/is-iterable.md) type guard internally.

A value is considered iterable if it is not `null` or `undefined` and exposes a callable `[Symbol.iterator]` method. This matches the semantics used by `for...of`, spread syntax, and `Array.from`.

It never throws and never mutates input. Use it when you need a guaranteed iterable before iteration or collection.

## Signature

```ts
function validateIterable<T>(
  value: unknown,
  field: string
): ValidationResult<Iterable<T>>
```

# Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: Iterable<T> }`: If the value implements a callable `[Symbol.iterator]`.
- `{ ok: false, field: string, message: string }`: If the value is not iterable.

## Behavior

- Uses [isIterable](../../type-guards/protocols/is-iterable.md) internally.
- Accepts arrays, strings, sets, maps, and custom iterables.
- Rejects non-iterable objects.
- Rejects values where `[Symbol.iterator]` exists but is not callable.
- Never throws and mutates input.

### Examples

```ts
validateIterable([1, 2, 3], "items")
// { ok: true, value: Iterable<number> }

validateIterable("abc", "text")
// { ok: true, value: Iterable<string> }

validateIterable({ a: 1 }, "object")
// { ok: false, field: "object", message: "Value must be iterable" }
```

## Notes

- This validator does not coerce values. Boxed primitives and plain objects fail unless they explicitly implement `[Symbol.iterator]`.
- Synchronous iteration only. Async iterables must be validated with [validateAsyncIterable](../../type-guards/protocols/is-async-iterable.md).
- Because it relies on [isIterable](../../type-guards/protocols/is-iterable.md), values that would fail in `for...of` also fail here.
- Suitable for validating collections, input sequences, configuration lists, and any context where safe synchronous iteration is required.

The validator never throws and never mutates input. All error reporting is handled through structured `ValidationResult` objects.
