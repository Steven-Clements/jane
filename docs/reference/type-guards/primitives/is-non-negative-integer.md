# isNonNegativeInteger

Checks whether a value is a **non-negative integer** (`0`, `1`, `2`, …).

This helper never throws and never mutates input. It returns `true` only when the value is a finite number (that evaluates to an integer) whose value is greater than or equal to zero.

Use it when integer semantics matter for array indexing, pagination values, counters, etc.

## Signature

```ts
function isNonNegativeInteger(value: unknown): value is number
```

## Parameters

| Name | Type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a non-negative integer to return `true`. |

## Returns

Returns `true` if value is a non-negative integer, otherwise `false`.

## Examples

```ts
isNonNegativeInteger(0);     // → true
isNonNegativeInteger(12);    // → true

isNonNegativeInteger(-1);    // → false
isNonNegativeInteger(3.14);  // → false
isNonNegativeInteger('5');   // → false
isNonNegativeInteger(NaN);   // → false
```
