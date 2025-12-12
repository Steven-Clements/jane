# Overview

Structural validators check whether an object, record, or tuple conforms to a specific shape, ensuring all required properties exist and meet their type constraints. They return a structured `ValidationResult<T>`, never throw exceptions, and never mutate the input object.

-

All structural validators are pure, predictable, and designed to compose efficiently, allowing you to validate complex nested data schemas without boilerplate.
