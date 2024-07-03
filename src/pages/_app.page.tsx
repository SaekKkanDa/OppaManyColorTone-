import Head from 'next/head';
import type { AppProps } from 'next/app';
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

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  const isLoading = useLoading();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>오빠 톤 많아? 퍼스널 컬러 자가진단 테스트</title>
      </Head>

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

export default App;
