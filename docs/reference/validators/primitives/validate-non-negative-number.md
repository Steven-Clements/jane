# validateNonNegativeNumber

## Description

Validates that a value is a **non-negative number** — a finite numeric primitive greater than or equal to zero. Fractional values are allowed. No coercion is performed.

This helper never throws and never mutates input. It is built on top of [isNonNegativeNumber](../../type-guards/primitives/is-non-negative-number.md), ensuring a strict and predictable numeric check.

Use this validator when you need safe enforcement of zero-inclusive lower bounds such as counters, durations, balances, timeouts, or pagination offsets.

## Signature

```ts
function validateNonNegativeNumber(
    value: unknown,
    field: string
): ValidationResult<number>
```

## Returns

One of:

- **Success**: `{ ok: true; value: number }`
- **Failure**:

```ts
{
  ok: false;
  field: string;
  message: "Expected a non-negative number.";
}
```

## Behavior

- **Accepts**:
  - `0`.
  - Positive integers (`1`, `5`, `100`).
  - Positive floats (`0.1`, `3.5`).
- **Rejects**:
  - Negative numbers.
  - `NaN`, `Infinity`, and `-Infinity`.
  - Numeric strings (`0`, `4`).
  - Boxed numbers(`new Number(1)`).
  - All other types (objects, arrays, functions, `null`, and `undefined`).

## Examples

```ts
validateNonNegativeNumber(0, "offset");
// { ok: true, value: 0 }

validateNonNegativeNumber(3.5, "balance");
// { ok: true, value: 3.5 }

validateNonNegativeNumber(-1, "offset");
// { ok: false, field: "offset", message: "Expected a non-negative number." }

validateNonNegativeNumber("0", "offset");
// { ok: false, field: "offset", message: "Expected a non-negative number." }
```

## Notes

- Use [validatePositiveNumber](./validate-positive-number.md) if zero should be excluded.
- Fractional values are allowed.
- The validator never throws and never mutates input. All failures return a structured, predictable `ValidationResult`.
- Use type guard [isNonNegativeNumber](../../type-guards/primitives/is-non-negative-number.md) directly when you need a boolean check without error context.
