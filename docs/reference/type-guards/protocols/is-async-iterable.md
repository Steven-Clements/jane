# isAsyncIterable

Checks whether a value is **asynchronously iterable**. A value is async iterable if it is not `null` or `undefined` and has a callable [Symbol.asyncIterator] method. This matches the behavior of `await` and other async iteration constructs.

## Signature

```ts
function isAsyncIterable<T = unknown>(value: unknown): value is AsyncIterable<T>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must implement the async iterable protocol to return `true`. |

## Returns

A boolean:

- `true`: If the value is async iterable.
- `false`: Otherwise.

## Examples

```ts
async function* gen() { yield 1 }
isAsyncIterable(gen())          // true

isAsyncIterable([])             // false
isAsyncIterable('abc')          // false
isAsyncIterable(null)           // false
```

## Notes

- This helper checks only for the presence of a callable `[Symbol.asyncIterator]` method.
- It does *not* attempt to call the async iterator.
- Sync iterables are not considered async iterables.
- Use `validateAsyncIterable` if you need a `Result<T>` instead of a boolean.

## Next up

[isIterable](is-iterable.md)
