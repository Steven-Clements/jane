# validatePromise

Checks whether a value is a **Promise**. This helper uses the [isPromise](../../type-guards/protocols/is-promise.md) type guard internally.

This validator performs a strict `instanceof Promise` check. It accepts native Promises and `Promise` subclasses, but intentionally rejects arbitrary thenables.

It never throws and never mutates input. Use it when you require a guaranteed `Promise` instance before chaining or awaiting.

## Signature

```ts
function validatePromise<T>(
  value: unknown,
  field: string
): ValidationResult<Promise<T>>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: Promise<T> }`: If the value is a `Promise` instance.
- `{ ok: false, field: string, message: string }`: If the value is not a Promise.

## Behavior

- Uses [isPromise](../../type-guards/protocols/is-promise.md) internally.
- Accepts native Promises and `Promise` subclasses.
Rejects arbitrary thenables (`{ then() {} }`).
- Rejects `async` functions unless invoked.
- Never throws or mutates input.

## Examples

```ts
validatePromise(Promise.resolve(1), "result")
// { ok: true, value: Promise<number> }

validatePromise({ then: () => {} }, "thenable")
// { ok: false, field: "thenable", message: "Value must be a Promise" }

validatePromise(async () => 1, "fn")
// { ok: false, field: "fn", message: "Value must be a Promise" }
```

## Notes

- This validator is intentionally stricter than `Promise`-like checks found in some libraries. Thenables are rejected by design.
- The behavior matches JavaScript’s native `instanceof Promise` semantics.
- Because it relies on [isPromise](../../type-guards/protocols/is-promise.md), values that cannot safely be awaited as true Promises fail the check.
- Suitable for validating return values, deferred computations, async APIs, and concurrency primitives where `Promise` identity matters.
- The validator never throws and never mutates input. All error reporting is handled through structured `ValidationResult` objects.
