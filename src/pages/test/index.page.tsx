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
import { CropImage, Locale } from '@Recoil/app';
import omctDb from '@Utils/omctDb';
import { canWebShare, webShare } from '@Utils/share';
import { copyUrl } from '@Utils/clipboard';
import ROUTE_PATH from '@Constant/routePath';
import * as S from './style';

export default function Home() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [count, setCount] = useState(0);
  const [isRunningStartTransition, setIsRunningStartTransition] =
    useState(false);
  const router = useRouter();
  const intl = useIntl();

  const setUserImg = useSetRecoilState(CropImage);
  const [locale, setLocale] = useRecoilState(Locale);

  const onIntersect = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) setCount(numberOfUsers);
  };

  const { ref: observerRef } = useIntersectionObserver(onIntersect);

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
    // router.push(ROUTE_PATH.imageUpload);
    setIsRunningStartTransition(true);
  };

  const onStartTransitionEnd = () => {
    router.push(ROUTE_PATH.imageUpload);
  };

  const handleClickDown = () => {
    if (typeof window !== 'undefined')
      scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
    app.setBackgroundColor('#2f2f37');
  };

  return (
    <S.PageWrapper>
      <S.TopPage>
        <S.LanguageButton onClick={handleLocale}>
          {{ 'ko-KR': 'ENG', 'en-US': '한국어' }[locale]}
        </S.LanguageButton>

        <S.TitleWrapper>
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

        <S.DownButton onClick={handleClickDown}>
          <FontAwesomeIcon icon={faChevronDown} size="xl" />
        </S.DownButton>
      </S.TopPage>

      <S.BottomPage>
        <S.UserCountMessage ref={observerRef}>
          <FormattedMessage id="userCount_1" />
          <S.UserCountWrapper>
            <S.UserCount
              animateToNumber={count}
              includeComma
              transitions={(index) => ({
                duration: index + 0.01,
              })}
              fontStyle={{
                fontSize: '2.5rem',
                fontWeight: 600,
                letterSpacing: '-0.05rem',
              }}
            />
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

        <S.MiniButtonWrapper>
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
