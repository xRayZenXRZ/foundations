/*
T est un parametre généric permettant à la fonction de travailler sur toute type Objet, tant que ces objets possedant une propriété id : number.
le paramètre items est un tableau de T objet et id est un identifier numeric permettant sa recherche. la fonction utilise find() qui retourn le premier item correspondant
s'il existe aucun find() retourn undefined. (T | undefined)
*/
export const findById = <T extends { id: number }>(
  items: Array<T>,
  id: number,
): T | undefined => items.find((item) => item.id === id);

export const replaceById = <T extends { id: number }>(
  items: Array<T>,
  replacement: T,
): Array<T> =>
  items.map((item) => (item.id === replacement.id ? replacement : item));
