# isFunction

Checks whether a value is a *function*. This helper never throws and never mutates input. Use it when you need to confirm callable values before running logic that expects a function.

## Signature

```ts
function isFunction(value: unknown): value is Function
```

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. This helper performs a strict `typeof` check and only returns `true` for *finite primitive integers*. |

## Returns

A boolean:

- `true` if the value is a function.
- `false` otherwise.

## Examples

```ts
isFunction(() => {})        // true
isFunction(function () {})  // true
isFunction(class X {})      // true

isFunction({})              // false
isFunction(null)            // false
isFunction("hello")         // false
isFunction(123)             // false
```

## Notes

- This helper does not check arity or function type (arrow, async, generator, constructor, etc.).
- Use it before invoking a value to avoid runtime errors.
- Use tap or other functional helpers if you need to run side‑effect‑free callbacks inside pipelines.
