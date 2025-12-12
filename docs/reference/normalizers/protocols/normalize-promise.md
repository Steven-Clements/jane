# normalizePromise

Normalizes a **promise‑like value** into a real `Promise` or returns `null`.

This helper provides a predictable way to work with asynchronous values without coercing unrelated types or triggering unhandled rejections.

## Signature

```ts
function normalizePromise<T>(
    value: unknown
): Promise<T> | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | A value that may represent a `Promise` or a thenable. |

## Returns

One of:

- A real `Promise`.
- `null`: If the value cannot be interpreted as a `Promise` or a safe thenable.

Behavior

- Returns a real Promise unchanged.
- Wraps thenable objects in a real `Promise`.
- Detects and rejects thenables that throw when invoked.
- Detects and rejects thenables that reject synchronously.
- Never throws and never mutates input.
- Never triggers unhandled rejections.
- Does not attempt to convert plain values into promises.

## Examples

```ts
normalizePromise(Promise.resolve(5))
// returns the same promise

normalizePromise({ then: r => r(10) })
// returns a real promise that resolves to ten

normalizePromise({ then() { throw new Error("failure") } })
// returns null

normalizePromise(123)
// returns null
```

## Notes

- This helper is intended for safe ingestion of asynchronous values.
- It distinguishes between real `Promises` and arbitrary objects with a then method.
- It rejects unsafe or hostile thenables to avoid unhandled rejections.
- Use `validatePromise` if you need a `Result<T>` wrapper instead of `null`.
