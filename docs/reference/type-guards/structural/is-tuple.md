# isTuple

Checks whether a value is a **tuple** of a specific structure. A tuple is defined as an array with a fixed length where each element satisfies a corresponding guard.

This helper is fully structural and never throws or mutates input.

## Signature

```ts
function isTuple<
    const Guards extends readonly ((value: unknown) => boolean)[]
>(
    value: unknown,
    guards: Guards,
): value is {
    [I in keyof Guards]:
        Guards[I] extends (value: unknown) => value is infer T ? T : unknown
}
```

## Parameters

| Name | Data type | Description |
|---|---|---|
| value | `unknown` | The value to check. Must be an array of the same length as `guards`. |
| guards | Readonly array of guard functions | One guard per tuple position. Each guard must accept `unknown` and return a boolean or a type predicate. |

## Returns

A boolean:

- `true`: If value is an array of the same length as guards and each element passes its corresponding guard.
- `false`: Otherwise.

## Examples

```ts
isTuple([1, 'x'], [isNumber, isString] as const);
// → true

isTuple([1, 2], [isNumber, isString] as const);
// → false

isTuple([1], [isNumber, isString] as const);
// → false
```

## Notes

- This helper is structural. It does not rely on TypeScript metadata.
- The `guards` parameter must be provided as a tuple literal or a `const` tuple for correct inference.
- Each guard is checked at runtime for safety; non-function guards cause the check to fail.
- Use `validateTuple` if you need a `Result<T>` instead of a boolean.

## Next up

This is the final topic for structural type guards. In the next section, we'll cover collection-based type guards.

[Collections](../collections/index.md)
