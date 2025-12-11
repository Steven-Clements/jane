# isPort

Checks whether a value is a valid **TCP/UDP port number**. A port is defined as an integer between `0` and `65535` (inclusive).

This helper never throws and never mutates input. It performs strict type checks and does not coerce strings or other values into numbers.

## Signature

```ts
function isPort(value: unknown): value is number
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be an integer between 0 and 65535 (inclusive) to return `true`. |

## Returns

A boolean:

- `true`: If the value is an integer within the valid port range.
- `false`: Otherwise.

## Examples

```ts
isPort(0)        // true
isPort(80)       // true
isPort(65535)    // true

isPort(-1)       // false
isPort(70000)    // false
isPort(3.14)     // false
isPort("80")     // false
isPort(null)     // false
```

## Notes

- This helper does not coerce strings (for example, "80" is invalid).
- This helper requires the value to be a primitive number.
- Use `normalizePort` if you need to coerce values into ports.
- Use `validatePort` if you need a `Result<T>` instead of a boolean.

## Next up

[isRegExp](is-reg-exp.md)
