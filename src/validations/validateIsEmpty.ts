export function validateIsEmpty(value: string): boolean {
    return (value === '' || value.length == 0 || value === undefined) ? true : false;
}