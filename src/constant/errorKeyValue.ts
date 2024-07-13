export enum EOmctErrorNo {
  /* 0 ~ 20 : Common Error */
  COMMON_ERROR_START = 0,
  COMMON_UNEXPECTED_CONDITION,
  COMMON_INVALID_PARAMETER,
  COMMON_UNKNOWN,
  COMMON_NOT_INITIALIZED_CONTEXT,
  COMMON_ERROR_FINISH = 20,

  /* 21 ~ 30 : Share Error */
  SHARE_ERROR_START = COMMON_ERROR_FINISH,
  SHARE_CLIPBOARD_COPY_ERROR,
  SHARE_ERROR_FINISH = 30,

  /* 31 ~ 40 : Firebase Error */
  FIREBASE_ERROR_START = SHARE_ERROR_FINISH + 1,
  FIREBASE_STORAGE_OBJECT_NOT_FOUND,
  FIREBASE_STORAGE_UNIQUE_ID_NOT_FOUND,
  FIREBASE_ERROR_END = 40,
}

const omctError = new Map<EOmctErrorNo, string>();

// prettier-ignore
{
  /* 0 ~ 20 : Common Error */
  omctError.set(EOmctErrorNo.COMMON_UNEXPECTED_CONDITION, '예기치 못한 에러가 발생하였습니다.');
  omctError.set(EOmctErrorNo.COMMON_INVALID_PARAMETER, '잘못된 파라미터 입니다.');
  omctError.set(EOmctErrorNo.COMMON_UNKNOWN, '알 수 없는 에러');
  omctError.set(EOmctErrorNo.COMMON_NOT_INITIALIZED_CONTEXT, 'Context가 초기화 되지 않았습니다');

  /* 21 ~ 30 : Share Error */
  omctError.set(EOmctErrorNo.SHARE_CLIPBOARD_COPY_ERROR, '클립보드 복사에 실패했습니다.');

  /* 31 ~ 40: Firebase Error */
  omctError.set(EOmctErrorNo.FIREBASE_STORAGE_OBJECT_NOT_FOUND, '이미지를 찾을 수 없습니다.');
  omctError.set(EOmctErrorNo.FIREBASE_STORAGE_UNIQUE_ID_NOT_FOUND,'유니크 ID를 만들지 찾지 못했습니다.');
}

export default omctError;
