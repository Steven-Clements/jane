import isSymbol from '../../type-guards/primitives/isSymbol';
import type { ValidationResult } from '../../types';

/**
 * Validates that a value is a symbol.
 *
 * Pure, zero side-effects, never throws.
 */
export default function validateSymbol(value: unknown, field: string): ValidationResult<symbol> {
    if (isSymbol(value)) {
        return { ok: true, value };
    }

    return {
        ok: false,
        field,
        message: 'Value must be a symbol',
    };
}
