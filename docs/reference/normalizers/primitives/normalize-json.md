# normalizeJSON

Normalizes a **JSON‑like value** into a parsed JavaScript value or returns `null`. Supports a `strict`‑mode toggle for predictable, specification‑aligned parsing.

## Signature

```ts
function normalizeJSON(
    value: unknown,
    options?: { strict?: boolean }
): unknown | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | A value that may represent JSON. |
| options | `object` with `strict` | Enables strict parsing rules. |

## Returns

One of:

- A parsed JavaScript value.
- `null`: If the value cannot be interpreted as valid JSON.

## Behavior

- **Common behavior**:
  - Never throws or mutates input.
  - Returns `null` for unsupported or invalid values.
- **Non‑strict mode (default)**:
  - Accepts objects and arrays and returns them unchanged.
  - Accepts strings that `JSON.parse` can interpret.
  - Allows leading and trailing whitespace.
  - Rejects empty or whitespace‑only strings.
  - Rejects invalid JSON strings.
- **Strict mode**:
  - Accepts only strings
  - Rejects strings with leading or trailing whitespace
  - Rejects any string that is not valid JSON
  - Rejects all non‑string inputs

This mode is intended for predictable, specification‑aligned parsing where only canonical JSON is allowed.

## Notes

- Strict mode is ideal for configuration files, environment variables, and API boundaries.
- Non‑strict mode is ideal for user input or ingestion pipelines.
- Use `validateJSON` if you need a `Result<T>` wrapper instead of `null`.
