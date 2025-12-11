# normalizeIterable

Normalizes an **iterable‑like value** into a real iterable or returns `null`.

This helper provides a predictable way to work with iterable values without coercing non‑iterables or triggering iterator errors.

```ts
Signature
function normalizeIterable<T>(
    value: unknown
): Iterable<T> | null
```

## Behavior

- Returns iterable values unchanged
- Accepts strings, arrays, sets, maps, typed arrays, generators, and custom iterables
- Rejects non‑iterable values
- Rejects objects whose iterator throws when accessed or invoked
- Never throws and never mutates input
- Does not attempt to convert plain values into iterables

```ts
Examples
normalizeIterable([1, 2, 3])
// returns the array

normalizeIterable("abc")
// returns the string

normalizeIterable(new Set([1, 2]))
// returns the set

normalizeIterable({}) 
// returns null

normalizeIterable({ [Symbol.iterator]: () => { throw new Error("nope") } })
// returns null
```

## Notes

- This helper is ideal when you want to accept any iterable value but reject everything else.
- It protects against hostile or broken iterator implementations.
- Use `validateIterable` if you need a `Result<T>` wrapper instead of `null`.
