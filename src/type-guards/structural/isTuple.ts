export default function isTuple<const Guards extends readonly ((value: unknown) => boolean)[]>(
    value: unknown,
    guards: Guards,
): value is {
    [I in keyof Guards]: Guards[I] extends (value: unknown) => value is infer T ? T : unknown;
} {
    if (!Array.isArray(value)) {
        return false;
    }

    if (value.length !== guards.length) {
        return false;
    }

    for (let i = 0; i < guards.length; i++) {
        const guard = guards[i];
        if (typeof guard !== 'function') {
            return false;
        }
        if (!guard(value[i])) {
            return false;
        }
    }

    return true;
}
