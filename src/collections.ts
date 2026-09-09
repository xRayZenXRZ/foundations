
export const findById = <T extends { id: number }>(items: Array<T>, id: number): T | undefined => items.find((item) => item.id === id);

//export const replaceById = <T extends { id: number }>(items: Array<T>, replacement: T): Array<T> => { // à compléter};