# isIterable

Checks whether a value is iterable. A value is iterable if it is not `null` or `undefined` and has a callable `[Symbol.iterator]` method. This matches the behavior of `for...of`, spread syntax, and `Array.from`.

## Signature

```ts
function isIterable<T = unknown>(value: unknown): value is Iterable<T>
```

Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must implement the iterable protocol to return `true`. |

## Returns

A boolean:

- `true` if the value is iterable.
- `false` otherwise.

## Examples

```ts
isIterable([1, 2, 3])        // true
isIterable('abc')            // true
isIterable(new Set())        // true

isIterable({})               // false
isIterable(123)              // false
isIterable(null)             // false
```

## Notes

- This helper checks only for the presence of a callable `[Symbol.iterator]` method.
- It does not attempt to call the iterator.
- It does not treat array‑like objects as iterable unless they implement the iterator protocol.
- Use `validateIterable` if you need a `Result<T>` instead of a boolean.
