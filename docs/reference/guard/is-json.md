# isJSON

Checks whether a value is a valid JSON value. This helper performs a strict, recursive structural check aligned with the ECMAScript JSON specification. It never throws and never mutates input.

A JSON value is one of:

- null
- a boolean
- a finite number
- a string
- an array of JSON values
- a plain object whose values are JSON values

## Signature

```ts
function isJSON(value: unknown): value is JSONValue
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| name | `unknown` | The value to check. Must be a valid JSON value to return `true`. |

## Returns

A boolean:

- `true` if the value is JSON‑safe.
- `false` otherwise.

Examples

```ts
isJSON({ a: 1, b: [true, null] })   // true
isJSON([1, 2, 3])                   // true
isJSON('hello')                     // true

isJSON(undefined)                   // false
isJSON(() => {})                    // false
isJSON(new Date())                  // false
isJSON({ a: undefined })            // false
```

## Notes

- Rejects non‑finite numbers (`NaN`, `Infinity`).
- Rejects objects with custom prototypes (including `Date`, `Map`, `Set`, class instances).
- Rejects functions, symbols, bigint, and undefined.
- Rejects circular structures.
- This guard is *structural*, not behavioral — it does not call `JSON.stringify`.
