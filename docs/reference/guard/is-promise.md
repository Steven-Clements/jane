# isPromise

Checks whether a value is a **Promise‑like object**. This helper never throws and never mutates input. It performs a structural check to confirm that the value is an object with a callable `then` method.

Use it when you need to confirm that a value behaves like a Promise before awaiting or chaining it.

## Signature

```ts
function isPromise(value: unknown): value is Promise<unknown>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a non‑null object with a callable then method to return `true`. |

## Returns

A boolean:

- `true` if the value is a Promise‑like object.
- `false` otherwise.

## Examples

```ts
isPromise(Promise.resolve(123))     // true
isPromise(new Promise(() => {}))    // true

isPromise({ then: () => {} })       // true (Promise-like)
isPromise({})                       // false
isPromise(null)                     // false
isPromise("hello")                  // false
isPromise(123)                      // false
```

## Notes

- This helper checks for *Promise‑like* values, not just native Promises.
- A value is considered a Promise if it is an object with a callable `then` method.
- Use `normalizePromise` if you need to convert values into Promises.
- Use `validatePromise` if you need a `Result<T>` instead of a boolean.
