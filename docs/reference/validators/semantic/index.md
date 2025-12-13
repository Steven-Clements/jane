# Overview

Semantic validators ensure that a value not only meets its basic primitive or structural type but also conforms to a conventional meaning or format, such as date strings, email addresses, or specific identifier patterns. They return a structured `ValidationResult<T>`, never throw exceptions, and never mutate the input value.

- [validateDate](validate-date.md): Ensures a value is a valid Date instance with a finite timestamp. Rejects invalid Date objects such as new Date("invalid")
- [validateEnumValue](validate-enum-value.md): Ensures a value is one of the allowed values of a specific enum, including both string and numeric enums.
- [validateError](validate-error.md): Ensures a value is an Error object, including native error types and custom error subclasses.
- [validateFunction](validate-function.md): Ensures a value is a callable function with a specific parameter and return type, including arrow functions and class constructors.
- [validateJSON](validate-json.md): Ensures a value is a valid JSONValue, including primitives, arrays, and plain objects; rejects circular references and non-plain prototypes.
- [validatePort](validate-port.md): Ensures a value is an integer between 0 and 65535 inclusive, representing a valid TCP/UDP port number.
- [validateRegExp](validate-reg-exp.md): Ensures a value is a genuine RegExp instance, not a wrapper or custom object.
- [validateTimestamp](validate-timestamp.md): Ensures a value is a finite integer number representing a Unix timestamp in milliseconds.

All semantic validators are pure, predictable, and crucial for enforcing data quality based on domain-specific conventions and industry standards.
