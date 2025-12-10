# isDate

Checks whether a value is a *valid Date instance*. This helper ensures the value is a `Date` object and that it represents a valid timestamp. It never throws and never mutates input.

## Signature

```ts
function isDate(value: unknown): value is Date
```

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a Date instance with a valid timestamp to return `true`. |

## Returns

A boolean:

- `true` if the value is a Date instance and `value.getTime()` is not `NaN`.
- `false` otherwise.

## Examples

```ts
isDate(new Date())                 // true
isDate(new Date("2020-01-01"))     // true

isDate(new Date("invalid"))        // false
isDate(Date.now())                 // false
isDate("2020-01-01")               // false
isDate(null)                       // false
isDate({})                         // f
```

## Notes

- This helper rejects invalid dates such as `new Date("invalid")`.
- Use `normalizeDate` if you need to convert values into Date instances.
- Use `validateDate` if you need a `Result<T>` instead of a boolean.
