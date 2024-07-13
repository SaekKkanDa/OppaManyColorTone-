import { withDefault } from '@Base/utils/dataExtension';
import omctError, { EOmctErrorNo } from '@Constant/errorKeyValue';

import { FirebaseError } from 'firebase/app';

export function parseError(error: unknown): OmctErrorResponse {
  let code = EOmctErrorNo.COMMON_UNKNOWN;

  if (error instanceof FirebaseError) {
    if (error.code.includes('storage/object-not-found')) {
      code = EOmctErrorNo.FIREBASE_STORAGE_OBJECT_NOT_FOUND;
    }
  }

  const message = withDefault(
    omctError.get(code),
    omctError.get(EOmctErrorNo.COMMON_UNKNOWN) as string
  );

  return { code, message };
}

export class OmctError extends Error {
  public code: EOmctErrorNo;

  constructor(code: EOmctErrorNo) {
    super('OmctError');
    this.code = code;
    this.message = withDefault(omctError.get(code), '알 수 없는 에러');
  }
}
