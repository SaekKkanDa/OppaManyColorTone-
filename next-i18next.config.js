/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko-KR'],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'), // 번역 파일 경로
  fallbackLng: 'en', // 기본 언어 설정
  ns: ['common'], // 사용하는 namespace 목록
  defaultNS: 'common', // 기본 namespace
  debug: process.env.NODE_ENV === 'development',
};
