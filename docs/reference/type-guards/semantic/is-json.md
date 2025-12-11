# isJSON

Checks whether a value is a valid JSON value. This helper performs a strict, recursive structural check aligned with the ECMAScript JSON specification. It never throws and never mutates input.

A JSON value is one of:

- `null`.
- `boolean`.
- A finite number (`NaN`, `Infinity`, and `-Infinity` are not allowed).
- `string`.
- An array of JSON values.

Plain objects (`{}`) whose values are JSON values (objects with custom prototypes, for example, `Date`, `Map`, `Set`, or class instances) are rejected.

## Signature

```ts
function isJSON(value: unknown): value is JSONValue
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must conform to JSON structural rules to return `true`. |

## Returns

A boolean:

- `true`: If the value is JSON‑safe.
- `false`: Otherwise.

Examples

```ts
isJSON(null)                     // true
isJSON(true)                     // true
isJSON(123)                      // true
isJSON('abc')                    // true
isJSON([1, 'a', null])           // true
isJSON({ a: 1, b: [true, null] }) // true

isJSON(NaN)                      // false
isJSON(Infinity)                 // false
isJSON(undefined)                // false
isJSON(() => {})                 // false
isJSON(new Date())               // false
isJSON({ a: undefined })         // false

// Circular references are rejected
const arr: unknown[] = [];
arr.push(arr);
isJSON(arr)                      // false

const obj: Record<string, unknown> = {};
obj['self'] = obj;
isJSON(obj)                       // false
```

## Notes

- Rejects non‑finite numbers (`NaN`, `Infinity`).
- Rejects objects with custom prototypes (including `Date`, `Map`, `Set`, class instances).
- Rejects functions, symbols, bigint, and `undefined`.
- Rejects circular structures.
- This guard is *structural*, not behavioral. It does not call `JSON.stringify`.

## Next up

[isPort](is-port.md)
