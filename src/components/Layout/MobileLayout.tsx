import React from 'react';
import styled from 'styled-components';
import useViewportHeight from '@Hooks/useViewportHeight';
import { useRecoilValue } from 'recoil';
// import { useRecoilValue, useRecoilState } from 'recoil';
import {
  globalBgColorAtom,
  globalTextColorAtom,
} from '@Recoil/globalStyleStore';
// import { IntlProvider } from 'react-intl';
// import { Locale } from '@Recoil/app';
// import flattenMessages from '@Utils/flattenMessages';
// import koLanguage from './../../../public/translations/ko.json';
// import EnLanguage from './../../../public/translations/en.json';

interface MobileLayoutProps {
  backgroundColor: string;
  textColor: string;
}

const Wrapper = styled.div<MobileLayoutProps>`
  margin: 0 auto;
  width: 100%;
  max-width: var(--viewport-max-width);
  min-height: 100dvh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
`;

function MobileLayout({ children }: React.PropsWithChildren) {
  const bgColor = useRecoilValue(globalBgColorAtom);
  const textColor = useRecoilValue(globalTextColorAtom);
  // const [locale] = useRecoilState(Locale);
  useViewportHeight();

  // const translationsForUsersLocale = {
  //   'en-US': EnLanguage,
  //   'ko-KR': koLanguage,
  // }[locale];

  return (
    <Wrapper backgroundColor={bgColor} textColor={textColor}>
      {/* <IntlProvider
        locale={locale}
        messages={flattenMessages(translationsForUsersLocale)}
      > */}
      {children}
      {/* </IntlProvider> */}
    </Wrapper>
  );
}

export default MobileLayout;
