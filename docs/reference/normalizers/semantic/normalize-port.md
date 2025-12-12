# normalizePort

Normalizes a port‑like value into a **valid TCP port number** or returns `null`. Supports a strict‑mode toggle for predictable, configuration‑safe parsing.

## Signature

```ts
function normalizePort(
    value: unknown,
    options?: { strict?: boolean }
): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | A value that may represent a TCP port number |
| options | object with `strict` | Enables strict parsing rules |

## Returns

One of:

- A number representing a valid TCP port.
- Null if the value cannot be interpreted as a valid port.

## Behavior

- **Common behavior**:
  - Accepts only integer values within the valid TCP port range.
  - Accepts strings that represent integers.
  - Rejects negative numbers, non‑finite numbers, and numbers above the valid range.
  - Rejects strings that contain anything other than digits.
  - Never throws and never mutates input.
- **Non‑strict mode (default)**:
  - Accepts integer ports from 0 through 65535.
  - Accepts strings that represent those integers.
  - Allows leading zeros and surrounding whitespace.
- **Strict mode**:
  - Accepts integer ports from 1 through 65535.
  - Rejects zero.
  - Accepts only digit‑only strings with no whitespace and no leading zeros.
  - Rejects any string that contains anything other than digits.

## Notes

- This helper intentionally does not accept named pipes or service names.
- Use `strict` mode for configuration files, environment variables, and any boundary where predictable formatting is required.
- Use `validatePort` if you need a `Result<T>` wrapper instead of `null`.
