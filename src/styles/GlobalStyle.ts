import localFont from 'next/font/local';
import { createGlobalStyle } from 'styled-components';
import ResetStyle from './resetStyle';
import theme from './theme';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const moyamoya = localFont({
  src: '../../public/fonts/Cafe24Moyamoya-Face-v1.0.woff2',
});

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  :root {
    --font-pretendard: ${pretendard.style.fontFamily};
    --font-moyamoya: ${moyamoya.style.fontFamily};
    --viewport-max-width: 400px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-family: ${pretendard.style.fontFamily}, "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
	
  body {
    background-color: ${theme.gray[100]};
    color: ${theme.gray[900]};
    font-size: 16px;
  }

  div#__next > div > div {
    min-height: 100dvh;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: var(--font-moyamoya);
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
