/**
 * checking object if is null + undefined or not
 * if object is 0, this functions consider as true
 */
export function isNil<T>(obj: T | undefined | null): obj is undefined | null {
  if (obj === undefined || obj === null) return true;

  return false;
}

/**
 * checking object if is null + undefined or not
 * if object is 0, this functions consider as true
 */
export function isNotNil<T>(obj: T | undefined | null): obj is T {
  return !isNil(obj);
}

export function isEmpty<T extends string | Array<unknown>>(obj: T) {
  if (obj.length === 0) return true;
  return false;
}
