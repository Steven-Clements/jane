# isFunction

Checks whether a value is a **function**.

This helper never throws and never mutates input. Use it when you need to confirm callable values before running logic that expects a function.

## Signature

```ts
function isFunction(value: unknown): value is Function
```

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be a function (per JavaScript's `typeof` semantics), including class constructors, async functions, generator functions, and bound functions. |

## Returns

A boolean:

- `true`: If the value is a function (including classes, async, generator, and built-in functions).
- `false`: Otherwise.

## Examples

```ts
// Standard functions
isFunction(function () {})        // true
isFunction(() => {})              // true

// Async functions
isFunction(async function () {})  // true
isFunction(async () => {})        // true

// Generator functions
isFunction(function* () {})       // true

// Class constructors
class MyClass {}
isFunction(MyClass)               // true

// Bound functions
const fn = () => {};
const bound = fn.bind(null);
isFunction(bound)                 // true

// Built-in functions
isFunction(Math.max)              // true
isFunction(Promise.resolve)       // true

// Non-functions
isFunction(123)                   // false
isFunction('abc')                 // false
isFunction({})                    // false
isFunction(null)                  // false
isFunction(undefined)             // false
isFunction([])                    // false
isFunction(Symbol())              // false
```

## Notes

- Classes are technically functions in JavaScript `(typeof class X {} === 'function')`, so they return `true`.
- Async functions, generator functions, and bound functions are all considered functions by this helper.
- This helper does not invoke the value; it only checks type.
- Use `normalizeFunction` if you need to wrap or coerce values into callable functions.
- Use `validateFunction` if you need a `Result<T>` instead of a boolean.

## Next up

[isJSON](is-json.md)
