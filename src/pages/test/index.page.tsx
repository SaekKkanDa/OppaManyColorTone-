'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { FormattedMessage, useIntl } from 'react-intl';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faShareNodes,
  faSwatchbook,
} from '@fortawesome/free-solid-svg-icons';
import { useIntersectionObserver } from '@Base/hooks/useIntersectionObserver';
import { useCountUp } from '@Base/hooks/useCountUp';
import { CropImage, Locale } from '@Recoil/app';
import omctDb from '@Utils/omctDb';
import { canWebShare, webShare } from '@Utils/share';
import { copyUrl } from '@Utils/clipboard';
import ROUTE_PATH from '@Constant/routePath';
import * as S from './style';

export default function Home() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [isInViewBottom, setIsInViewBottom] = useState(false);
  const [isRunningStartTransition, setIsRunningStartTransition] =
    useState(false);
  const router = useRouter();
  const intl = useIntl();

  const setUserImg = useSetRecoilState(CropImage);
  const [locale, setLocale] = useRecoilState(Locale);

  const { ref: topRef } = useIntersectionObserver(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) setIsInViewBottom(false);
    }
  );
  const { ref: bottomRef } = useIntersectionObserver(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) setIsInViewBottom(entry.isIntersecting);
    }
  );

  const COUNT_UP_DURATION = 2000;
  const userCount = useCountUp(
    numberOfUsers,
    COUNT_UP_DURATION,
    isInViewBottom
  );

  useEffect(() => {
    if (window !== undefined) document.body.style.backgroundColor = S.bgColor;

    return () => {
      if (window !== undefined) document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const getNumberOfUsers = async () => {
      setNumberOfUsers(await omctDb.getNumberOfUsers());
    };

    getNumberOfUsers();
  }, []);

  useEffect(() => {
    setUserImg('');
  }, [setUserImg]);

  const handleClickStart = () => {
    setIsRunningStartTransition(true);
  };

  const onStartTransitionEnd = () => {
    router.push(ROUTE_PATH.imageUpload);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined')
      scrollTo({
        top: isInViewBottom ? 0 : document.body.scrollHeight,
        behavior: 'smooth',
      });
  };

  const handleViewAllType = () => {
    router.push(ROUTE_PATH.allTypesView);
  };

  const handleShare = async () => {
    if (canWebShare) return await webShare();
    const messageId = await copyUrl(location.href);
    alert(intl.messages[messageId]);
  };

  const handleLocale = () => {
    setLocale((prev) => (prev === 'en-US' ? 'ko-KR' : 'en-US'));
  };

  const onLoadSpline = (app: Application) => {
    app.setZoom(0.15);
    app.setBackgroundColor(S.bgColor);
  };

  return (
    <S.PageWrapper>
      <S.TopPage>
        <S.LanguageButton onClick={handleLocale}>
          {{ 'ko-KR': 'ENG', 'en-US': '한국어' }[locale]}
        </S.LanguageButton>

        <S.TitleWrapper ref={topRef}>
          <S.Title>
            <FormattedMessage id="landingTitle" />
          </S.Title>
          <S.Subtitle>
            <FormattedMessage id="landingSubTitle" />
          </S.Subtitle>
        </S.TitleWrapper>

        <Spline
          scene="https://prod.spline.design/hZ8jGzxERn1B-4De/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
          }}
          onLoad={onLoadSpline}
        />

        <S.ScrollButton $isInViewBottom={isInViewBottom} onClick={handleScroll}>
          <FontAwesomeIcon icon={faChevronDown} />
        </S.ScrollButton>
      </S.TopPage>

      <S.BottomPage>
        <S.UserCountMessage ref={bottomRef} $isInViewBottom={isInViewBottom}>
          <FormattedMessage id="userCount_1" />
          <S.UserCountWrapper>
            <S.UserCount>{userCount.toLocaleString()}</S.UserCount>
            <FormattedMessage id="userCount_2" />
          </S.UserCountWrapper>
          <FormattedMessage id="userCount_3" />
        </S.UserCountMessage>

        <S.StartButton
          $isRunningStartTransition={isRunningStartTransition}
          onClick={handleClickStart}
        >
          <FormattedMessage id="startButton" />
        </S.StartButton>
        <S.StartTransition
          $isRunningStartTransition={isRunningStartTransition}
          onTransitionEnd={onStartTransitionEnd}
        />

        <S.MiniButtonWrapper $isInViewBottom={isInViewBottom}>
          <S.MiniButton onClick={handleShare}>
            <FontAwesomeIcon icon={faShareNodes} />
            <FormattedMessage id="shareButton" />
          </S.MiniButton>
          <S.MiniButton onClick={handleViewAllType}>
            <FontAwesomeIcon icon={faSwatchbook} />
            <FormattedMessage id="viewAllTypesButton" />
          </S.MiniButton>
        </S.MiniButtonWrapper>
      </S.BottomPage>
    </S.PageWrapper>
  );
}
