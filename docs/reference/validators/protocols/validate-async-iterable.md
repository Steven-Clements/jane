# validateAsyncIterable

Checks whether a value is an **async iterable**. This helper uses the [isAsyncIterable](../../type-guards/protocols/is-async-iterable.md) type guard internally.

A value is considered an async iterable if it is not `null` or `undefined` and exposes a callable `[Symbol.asyncIterator]` method. This matches the semantics used by `for await...of` and other async iteration constructs.

It never throws and never mutates input. Use it when you need a guaranteed async iterable before consuming streamed, paginated, or deferred data.

## Signature

```ts
function validateAsyncIterable<T>(
  value: unknown,
  field: string
): ValidationResult<AsyncIterable<T>>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: AsyncIterable<T> }`: If the value implements a callable [Symbol.asyncIterator].
- `{ ok: false, field: string, message: string }`: If the value is `null`, `undefined`, or does not support async iteration.

## Behavior

- Uses [isAsyncIterable](../../type-guards/protocols/is-async-iterable.md) internally.
- Accepts native async generators and custom async iterable objects.
- Rejects synchronous iterables such as arrays.
- Rejects objects where `Symbol.asyncIterator` exists but is not callable.
- Never throws or mutates input.

## Examples

```ts
async function* stream() {
  yield 1;
  yield 2;
}

validateAsyncIterable(stream(), "stream")
// { ok: true, value: AsyncIterable<number> }

validateAsyncIterable([], "array")
// { ok: false, field: "array", message: "Value must be an async iterable" }

validateAsyncIterable(null, "data")
// { ok: false, field: "data", message: "Value must be an async iterable" }
```

## Notes

- This validator does not coerce values. Synchronous iterables (Array, Set, Map) are rejected even though they support [Symbol.iterator].
- Boxed values, primitives, and plain objects fail unless they explicitly implement [Symbol.asyncIterator].
- Because it relies on [isAsyncIterable](../../type-guards/protocols/is-async-iterable.md), values that would fail in `for await...of` also fail here.
- Suitable for validating streams, async generators, paginated data sources, and any API that yields values asynchronously.
- The validator never throws and never mutates input. All error reporting is handled through structured `ValidationResult` objects.
