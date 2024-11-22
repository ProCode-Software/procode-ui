export function mergeClasses(classes: (string | undefined)[]): {className: string} {
    return { className: classes.filter(Boolean).join(' ') };
}