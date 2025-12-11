# isRegExp

Checks whether a value is a regular expression.

This helper performs a strict `instanceof` check and never throws or mutates input. It accepts both RegExp literals and RegExp objects created with `new RegExp`, including wrapper objects created with `Object(...)`.

## Signature

```ts
function isRegExp(value: unknown): value is RegExp
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a RegExp instance (including wrapper objects) to return `true`. |

## Returns

A boolean:

- `true`: If the value is a `RegExp`.
- `false`: Otherwise.

## Examples

```ts
isRegExp(/abc/)              // true
isRegExp(new RegExp('abc'))  // true
isRegExp(Object(/abc/))      // true

isRegExp('/abc/')            // false
isRegExp('abc')              // false
isRegExp(null)               // false
```

## Notes

- This helper intentionally accepts `RegExp` wrapper objects, because JavaScript treats them as genuine `RegExp` instances.
- Strings that resemble regex literals (for example, `/abc/`) are not considered `RegExp` values.
- Use `normalizeRegExp` if you need to convert strings into `RegExp` objects.
- Use `validateRegExp` if you need a `Result<T>` instead of a boolean.

## Next up

[isTimestamp](is-timestamp.md)
