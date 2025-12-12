# ValidationResult

`ValidationResult<T>` is the standard return type for all validators in Jane. It represents the outcome of a validation operation and provides a structured, predictable way to report success or failure without throwing exceptions or mutating input.

Every validator in Jane returns a `ValidationResult<T>` and follows the same contract:

- Success returns the validated value.
- Failure returns a structured error describing what went wrong.
- No validator ever throws.
- No validator ever mutates input.

This type is central to Jane’s clarity‑first philosophy.

## Signature

```ts
type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; field: string; message: string };
```

## Shape

**Success case**:

```ts
{
  ok: true;
  value: T;
}
```

- `ok` is always `true`.
- `value` contains the validated value, guaranteed to satisfy the validator's contract.
- No additional metadata is included.

**Failure case**:

```ts
{
  ok: false;
  field: string;
  message: string;
}
```

- `ok` is always `false`.
- `field` identifies the name of the field being validated.
- `message` provides a human‑readable explanation of the failure.
- *No exceptions are thrown*; all error information is *returned structurally*.

## Behavior

- Never throws. All validation failures are represented as structured results.
- Never mutates input. Validators treat all inputs as immutable.
- Pure and deterministic. The same input always produces the same output.
- Explicit contracts. Each validator defines exactly what qualifies as a valid value.
- Composable. Higher‑level validators can combine multiple `ValidationResult` values to build complex validation flows.

## Examples

**Successful validation**:

```ts
validatePositiveInteger(5, "count")
// { ok: true, value: 5 }


Failed validation
validatePositiveInteger(-1, "count")
// {
//   ok: false,
//   field: "count",
//   message: "Value must be a positive integer"
// }
```

**Using ValidationResult in application code**:

```ts
const result = validateNonEmptyString(input, "username");

if (!result.ok) {
  return respondWithError(result.field, result.message);
}

const username = result.value;
// safe to use here
```

## Notes

- `ValidationResult<T>` is intentionally minimal. It avoids nested structures, error codes, or metadata that could obscure clarity.
- The `field` property is always required in failure cases to support consistent error reporting in forms, APIs, and logs.
- Validators *never* coerce values.
- This type is stable and intended to remain unchanged across major versions of Jane.
