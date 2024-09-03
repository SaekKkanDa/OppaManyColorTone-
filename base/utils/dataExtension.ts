import { isNil } from '@Base/utils/check';

export function getRandomId() {
  return Math.random().toString(16).slice(2);
}

export function withDefault<T>(obj: T | null | undefined, defaultValue: T): T {
  if (isNil(obj)) return defaultValue;

  return obj;
}
