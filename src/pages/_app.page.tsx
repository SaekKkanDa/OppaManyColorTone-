import Head from 'next/head';
import type { AppProps } from 'next/app';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { appWithTranslation } from 'next-i18next';

import Script from 'next/script';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { useLoading } from '@Hooks/useLoading';
import LoadingIndicator from '@Components/LoadingIndicator';
import MobileLayout from '@Components/Layout/MobileLayout';
import GlobalStyle from '@Styles/GlobalStyle';
import theme from '@Styles/theme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { LoadingProvider } from '@Components/Contexts/LoadingContext';

import i18nextConfig from '../../next-i18next.config';

config.autoAddCss = false;

// i18n 초기화
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

const App = ({ Component, pageProps }: AppProps) => {
  const isLoading = useLoading();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>리트머스 페이스 - 퍼스널 컬러 자가진단 테스트</title>
      </Head>

      {/* Google Adsense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9551977219354865"
        crossOrigin="anonymous"
      />

      {/* Google Analytics 4 + Google Tag */}
      <GoogleAnalytics gaId="G-MSP07W6675" />

      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-59DR9LFK" />

      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <MobileLayout>
              {isLoading ? <LoadingIndicator /> : <Component {...pageProps} />}
            </MobileLayout>
          </LoadingProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default appWithTranslation(App, i18nextConfig);
