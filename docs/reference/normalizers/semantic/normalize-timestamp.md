# normalizeTimestamp

Normalizes **timestamp‑like input** into a millisecond epoch number or returns `null`. Supports a `strict`-mode toggle for predictable, ISO‑only parsing.

## Signature

```ts
function normalizeTimestamp(
    value: unknown,
    options?: { strict?: boolean }
): number | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | A value that may represent a timestamp. |
|  | { strict?: boolean } | Enables strict ISO-8601 parsing. |

Returns

One of:

- A number representing milliseconds since Unix epoch.
- `null` if the value cannot be interpreted as a valid timestamp.

## Behavior

- **Common behavior**:
  - A valid Date instance returns its millisecond timestamp.
  - An invalid Date instance returns null.
  - A finite number returns unchanged.
  - A non‑finite number returns null.
  - An empty string or a string made only of whitespace returns null.
  - The helper never throws and never mutates the input.
- **Non‑strict mode (default)**:
  - Strings are passed to `Date.parse`.
  - Any format the JS engine accepts is allowed.
  - Useful for flexible ingestion of user input.
- **Strict mode** (`{ strict: true }`)
  - Only accepts ISO‑8601 strings:
    - `YYYY-MM-DD`.
    - `YYYY-MM-DDTHH:mm:ssZ`.
    - `YYYY-MM-DDTHH:mm:ss±HH:mm`.
  - Rejects all other string formats.
  - Ensures predictable, cross‑engine behavior.
  - Still accepts valid `Date` instances and finite numbers.

## Examples

```ts
normalizeTimestamp("2020-01-01");
// → 1577836800000

normalizeTimestamp("January 1, 2020");
// → 1577836800000 (non-strict mode)

normalizeTimestamp("January 1, 2020", { strict: true });
// → null

normalizeTimestamp("2020-01-01T12:30:00Z", { strict: true });
// → 1577881800000

normalizeTimestamp(new Date("2020-01-01T00:00:00Z"));
// → 1577836800000

normalizeTimestamp(NaN);
// → null
```

## Notes

- Strict mode is ideal for API boundaries, schema validation, and reproducible parsing.
- Non‑strict mode is ideal for user‑entered data or ingestion pipelines.
- This helper does not attempt to correct malformed dates.
- Use `validateTimestamp` if you need a `Result<T>` wrapper instead of null.
