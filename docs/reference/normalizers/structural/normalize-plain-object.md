# normalizePlainObject

Normalizes a **plain-object-like value** into a real plain object or returns `null`.

This helper accepts objects whose prototype is either `Object.prototype` or `null`. It rejects arrays, functions, class instances, and built-in exotic objects. It never throws and never mutates input.

Use this when you need to ensure that a value is a safe, JSON-like object before further processing or validation.

## Signature

```ts
function normalizePlainObject(value: unknown): Record<string, unknown> | null
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to normalize into a plain object. |

## Returns

One of:

- A plain object — if the input is object-like and its prototype is Object.prototype or null.
- `null`: If the value cannot be interpreted as a plain object.

## Behavior

- **Accepts**:
  - Objects whose prototype is exactly `Object.prototype`.
  - Objects created using `Object.create(null)` (`null-prototype` objects).
- **Rejects**:
  - Arrays.
  - Functions.
  - Class instances.
  - Built-in objects: Map, Set, Date, RegExp, Error, etc.
  - Objects with custom prototypes.
  - Objects whose prototype getter throws.
  - All non-object values.

Uses `Reflect.getPrototypeOf` safely (wrapped in try/catch).

## Examples

```ts
normalizePlainObject({ a: 1 })               
// { a: 1 }

const obj = Object.create(null)
obj.x = 1
normalizePlainObject(obj)                    
// { x: 1 }

normalizePlainObject([])                     
// null

normalizePlainObject(new Map())              
// null

normalizePlainObject(new (class Foo {})())   
// null

normalizePlainObject(123)                    
// null
normalizePlainObject("abc")                  
// null
normalizePlainObject(null)                   
// null
```

## Notes

- Use [normalizeRecord](normalize-record.md) if you want to enforce that all keys are strings and all values are serializable.
- Use `validatePlainObject` if you need structured error information instead of returning `null`.
- Plain objects are useful for JSON-like data structures, but for deep validation consider chaining with `validateObjectShape`, schemas, or normalizers for nested values.
