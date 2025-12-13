# validateJSON

Validates whether a value is a valid JSON value.

A valid JSON value is one of:

- `null`.
- Boolean.
- Finite number.
- String.
- An array of JSON values.
- A plain object with JSON values as properties.

This validator rejects:

- Undefined.
- Functions.
- Symbols.
- BigInt.
- Non-finite numbers (`NaN`, `Infinity`).
- Circular references.
- Objects with non-plain prototypes (for example, `Date`, `Map`, custom classes`).

It never throws and never mutates input.

## Signature

```ts
function validateJSON(value: unknown, field: string): ValidationResult<JSONValue>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

One of:

- `{ ok: true, value: JSONValue }`: If the value is valid JSON.
- `{ ok: false, field: string, message: string }`: If the value is not valid JSON.

## Examples

```ts
validateJSON({ a: 1, b: "x" }, "field")
// { ok: true, value: { a: 1, b: "x" } }

validateJSON([1, 2, 3], "field")
// { ok: true, value: [1, 2, 3] }

validateJSON("string", "field")
// { ok: true, value: "string" }

validateJSON(42, "field")
// { ok: true, value: 42 }

const circularObj: { self?: Record<string, JSONValue> } = {};
circularObj.self = circularObj;
validateJSON(circularObj, "field")
// { ok: false, field: "field", message: "Value must be valid JSON" }

validateJSON(undefined, "field")
// { ok: false, field: "field", message: "Value must be valid JSON" }
```

## Behavior

- Uses the [JSONValue](../../types/json-value.md) type internally for strict typing.
- Validates arrays and nested plain objects recursively.
- Detects circular references using a `WeakSet`.
- Rejects objects with non-plain prototypes (like `Date`, `Map`, or custom class instances).
- Pure and deterministic: same input always produces the same result.
- Suitable for validating API payloads, configuration objects, or any data structure that must be JSON-serializable.

## Notes

- This validator does not coerce values. Strings like `"123"`, boxed numbers `(new Number(123))`, or functions are invalid.
- Because it depends on structural checks, values such as `NaN`, `Infinity`, `-Infinity`, and non-finite numbers automatically fail.
- The validator ensures strict JSON compliance while remaining fully type-safe in TypeScript.
