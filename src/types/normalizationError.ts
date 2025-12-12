export interface NormalizationError {
    kind: 'invalid_string';
    message: string;
    input: unknown;
}
