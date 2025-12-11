# isDate

Checks whether a value is a valid **Date** instance.

This helper verifies two things:

1. The value is actually a `Date` object (`instanceof Date`).
2. The internal timestamp is valid (`getTime()` is *not* `NaN`).

It never throws and never mutates input.

## Signature

```ts
function isDate(value: unknown): value is Date
```

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a `Date` instance with a valid timestamp to return `true`. |

## Returns

A boolean:

- `true`: If the value is a Date instance *and* its timestamp is valid.
- `false`: Otherwise.

## Examples

```ts
isDate(new Date())                 // true
isDate(new Date("2020-01-01"))     // true

isDate(new Date("invalid"))        // false
isDate(Date.now())                 // false
isDate("2020-01-01")               // false
isDate(null)                       // false
isDate({})                         // false
```

## Notes

- Invalid `Date` objects such as `new Date("invalid")` are rejected because their time value is `NaN`.
- This helper does *not* attempt to parse or coerce values into dates.
- Use `normalizeDate` if you need to convert values into `Date` instances.
- Use `validateDate` if you need a `Result<T>` instead of a boolean.

## Next up

[isEnumValue](is-enum-value.md)
