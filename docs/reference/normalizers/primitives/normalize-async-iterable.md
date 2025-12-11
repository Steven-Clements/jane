# normalizeAsyncIterable

Normalizes an **async‑iterable‑like value** into a real async iterable or returns `null`.

This helper provides a predictable way to work with asynchronous iteration without coercing non‑iterables or triggering iterator errors.

## Signature

```ts
function normalizeAsyncIterable<T>(
    value: unknown
): AsyncIterable<T> | null
```

## Behavior

- Returns async iterable with values unchanged.
- Accepts async generators and custom async iterables.
- Rejects non‑async‑iterable values.
- Rejects objects whose async iterator throws when accessed or invoked.
- Never throws and never mutates input.
- Does not attempt to convert plain values into async iterables.

```ts
Examples
async function* gen() {
    yield 1
}

normalizeAsyncIterable(gen())
// returns the async generator object

normalizeAsyncIterable({}) 
// returns null

normalizeAsyncIterable({
    [Symbol.asyncIterator]() { throw new Error("nope") }
})
// returns null
```

## Notes

- This helper is ideal when you want to accept any async iterable value but reject everything else.
- It protects against hostile or broken async iterator implementations.
- Use `validateAsyncIterable` if you need a `Result<T>` wrapper instead of `null`.
