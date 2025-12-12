# Overview

Semantic validators ensure that a value not only meets its basic primitive or structural type but also conforms to a conventional meaning or format, such as date strings, email addresses, or specific identifier patterns. They return a structured `ValidationResult<T>`, never throw exceptions, and never mutate the input value.

-

All semantic validators are pure, predictable, and crucial for enforcing data quality based on domain-specific conventions and industry standards.
