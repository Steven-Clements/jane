# isPromise

Checks whether a value is a *Promise*. This helper performs a strict `instanceof` check and never throws or mutates input. It accepts native Promise instances and Promise subclasses, but does not treat arbitrary thenables as Promises.

## Signature

```ts
function isPromise(value: unknown): value is Promise<unknown>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | true |

## Returns

A boolean:

- true if the value is a Promise
- false otherwise

## Examples

```ts
isPromise(Promise.resolve())     // true
isPromise(new Promise(() => {})) // true

isPromise({ then() {} })         // false
isPromise('promise')             // false
isPromise(null)                  // false
```

## Notes

- This helper intentionally *does not* treat thenables as Promises.
- It accepts Promise subclasses.
- Use `normalizePromise` if you need to coerce values into Promises.
- Use `validatePromise` if you need a `Result<T>` instead of a boolean.
