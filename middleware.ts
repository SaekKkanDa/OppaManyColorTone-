// 브라우저의 Accept-Language 헤더를 기반으로 언어를 감지하고 URL에 언어 코드를 자동으로 리다이렉트 처리

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // 지원되는 언어 목록
  const supportedLanguages = ['en', 'ko'];

  // 요청 URL에서 pathname을 가져옵니다.
  const { nextUrl: url } = req;
  const { pathname } = url;

  // URL에 이미 언어 코드가 있는지 확인합니다.
  const hasLocaleInPathname = supportedLanguages.some((lang) =>
    pathname.startsWith(`/${lang}`)
  );

  if (!hasLocaleInPathname) {
    // `Accept-Language` 헤더에서 언어를 감지합니다.
    const acceptLanguage = req.headers.get('accept-language');
    let detectedLanguage = 'en'; // 기본 언어

    if (acceptLanguage) {
      const preferredLanguages = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0]);

      // 지원되는 언어 중 가장 우선순위가 높은 언어를 감지합니다.
      detectedLanguage =
        supportedLanguages.find((lang) => preferredLanguages.includes(lang)) ||
        'en';
    }

    // 언어 코드가 없는 URL에 대해 리다이렉트합니다.
    const redirectUrl = new URL(`/${detectedLanguage}${pathname}`, req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // 언어 코드가 이미 URL에 있으면 요청을 계속 진행합니다.
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
    여기서 리다이렉트를 적용할 경로 패턴을 지정합니다.
    예를 들어, 모든 페이지에 대해 적용하려면 '/' 패턴을 사용하고,
    특정 경로에만 적용하려면 해당 경로를 명시합니다.
    */
    '/((?!_next|favicon.ico).*)', // _next 폴더나 favicon 등을 제외하고 모든 경로에 적용
  ],
};
