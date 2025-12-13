# validateFunction

Checks whether a value is a **callable function**. This validator uses [isFunction](../../type-guards/semantic/is-function.md) internally.

Accepts arrow functions, traditional functions, and class constructors. Never throws and never mutates input.

## Signature

```ts
function validateFunction<F extends (...args: unknown[]) => unknown>(
  value: unknown,
  field: string
): ValidationResult<F>
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to validate. |
| field | `string` | The name of the field being validated, used in error reporting. |

## Returns

One of:

- `{ ok: true, value: F }`: If the value is a callable function matching the generic signature.
- `{ ok: false, field: string, message: string }`: If the value is not a function.

## Behavior

- Accepts arrow functions, traditional functions, and class constructors.
- Rejects primitives, objects, arrays, and non-function values.
- Performs no coercion.
- Never throws or mutates input.
- Fully generic: `args` and return type are typed as `unknown`, ensuring strict TypeScript compliance without `any`.

## Examples

```ts
// Arrow function
validateFunction(() => 42, "fn")
// { ok: true, value: [Function] }

// Traditional function
validateFunction(function hello() {}, "fn")
// { ok: true, value: [Function: hello] }

// Class constructor
class MyClass {}
validateFunction(MyClass, "fn")
// { ok: true, value: [class MyClass] }

// Generic signature with unknown args and return
const result = validateFunction<(...args: unknown[]) => unknown>(
  (x) => x,
  "callback"
);
// { ok: true, value: [Function] }

// Invalid value
validateFunction(123, "fn")
// { ok: false, field: "fn", message: "Value must be a function" }
```

## Notes

- Using generics with `unknown[]` avoids ESLint and TypeScript warnings.
- This validator is suitable for validating callbacks, hooks, or configuration entries.
- Fully compatible with Jane’s pure, zero side-effect philosophy.
