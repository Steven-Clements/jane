# JSON value

`JSONValue` is the standard type representing all valid JSON data in Jane. It provides a fully typed, recursive definition of JSON-compatible values for strict validation, normalization, and serialization.

Every validator that works with structured JSON, such as [validateJSON](../validators/semantic/validate-json.md), uses `JSONValue` to ensure type safety and predictability.

## Definition

```ts
export type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
```

## Shape

- Primitive JSON values
  - `null`: Represents a JSON null.
  - `boolean`: Represents a JSON boolean (`true` or `false`).
  - `number`: Represents a finite JSON number. `NaN`, `Infinity`, and `-Infinity` are not allowed.
  - `string`: Represents a JSON string.

## Composite JSON values

- `JSONValue[]`: An array of valid JSON values. Arrays are recursively typed.
- `{ [key: string]: JSONValue }`: A plain object whose property values are valid JSON values.
- Non-plain prototypes (like `Date` or `Map`) are not allowed.

## Behavior

- Fully recursive: Arrays and nested objects are validated against the JSONValue contract.
- Strict: No coercion of types. Strings like `"123"` do not count as numbers, and boxed primitives are rejected.
- Circular references are not allowed. Validators using `JSONValue` detect and reject them.
- Designed to work with all structured validators in Jane, including [validateJSON](../../reference/validators/semantic/validate-json.md).

## Examples

```ts
// Primitives
const a: JSONValue = null;
const b: JSONValue = true;
const c: JSONValue = 42;
const d: JSONValue = "hello";

// Arrays
const arr: JSONValue = [1, "two", true, null, [3, 4]];

// Plain objects
const obj: JSONValue = {
  a: 1,
  b: "x",
  c: [true, null],
  d: { nested: "value" },
};

// Invalid examples (not assignable to JSONValue)
const invalid1 = undefined;
const invalid2 = () => {};
const invalid3 = Symbol("s");
const invalid4 = new Date(); // non-plain object
```

## Notes

- `JSONValue` ensures strict JSON compliance at the type level.
- Validators like [validateJSON](../validators/semantic/validate-json.md) leverage `JSONValue` to provide zero side-effect, deterministic validation.
- Using `JSONValue` allows TypeScript to guarantee that any accepted value is safe to serialize with `JSON.stringify`.
- Suitable for API payload validation, configuration files, state storage, and any scenario requiring strict JSON-compatible data.
