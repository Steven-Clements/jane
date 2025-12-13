# Type definitions

Type definitions are the foundational interfaces and type aliases that structure Jane’s data contracts. They ensure predictable shapes for data flowing through all runtime model layers—from guards and normalizers to validators and parsers. These definitions are explicit, immutable, and designed for maximum type safety.

Jane’s utility types enforce non-nullability where possible and focus on clearly expressing the exact structure of inputs and outputs, eliminating common sources of `null` and `undefined` errors in production code.

## Core Type Definitions

These are the essential TypeScript types used to define and communicate predictable data states:

- [JSONValue](./json-value.md): JSONValue is the standard type representing all valid JSON data in Jane.
- [ValidationResult](./validation-result.md): The mandatory return type for all **Validator** functions. It is a discriminated union that enforces a clear success or failure contract.

## When to Refer to Type Definitions

You primarily interact with these definitions when:

- Defining the signature for a new guard, normalizer, validator, or parser.
- Declaring the specific type a function returns after processing data through one of Jane’s layers.
- Creating custom wrappers or higher-order functions that compose Jane’s utilities.
- Documenting the input and output expectations of your application's data flow.

## Why Type Definitions Matter

Type Definitions are the foundation that allows developers to trust the data flowing through the four-layer model:

`type guards → normalizers → validators → parsers`

By strictly defining the shapes of data at each stage (e.g., using `ValidationResult<T>` after validation), your code gains predictability, which simplifies debugging, enhances refactoring safety, and clarifies intent across the entire codebase.
