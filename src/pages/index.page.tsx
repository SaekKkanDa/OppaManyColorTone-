import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { FormattedMessage, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useCountUp } from '@Base/hooks/useCountUp';
import { CropImage, Locale } from '@Recoil/app';
import ColorChipSpinner from '@Components/ColorChipSpinner';
import omctDb from '@Utils/omctDb';
import { canWebShare, webShare } from '@Utils/share';
import ROUTE_PATH from '@Constant/routePath';
import { copyUrl } from '@Utils/clipboard';
import questionBubble from 'public/images/icon/question-bubble.png';
import * as S from './style';

function LandingPage() {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const router = useRouter();
  const intl = useIntl();

  const setUserImg = useSetRecoilState(CropImage);
  const [locale, setLocale] = useRecoilState(Locale);

  useEffect(() => {
    const getNumberOfUsers = async () => {
      setNumberOfUsers(await omctDb.getNumberOfUsers());
    };

    getNumberOfUsers();
  }, []);

  const COUNT_UP_DURATION = 2000;
  const count = useCountUp(numberOfUsers, COUNT_UP_DURATION, true);

  useEffect(() => {
    setUserImg('');
  }, [setUserImg]);

  const onClickStartButton = () => {
    router.push(ROUTE_PATH.imageUpload);
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

  return (
    <>
      <S.LandingWrap>
        <S.LandingTitleDiv>
          <S.LandingTitle>
            <FormattedMessage id="landingTitle_1" />{' '}
            <S.TitleHighlight>
              <FormattedMessage id="titleHighlight" />
            </S.TitleHighlight>{' '}
            <FormattedMessage id="landingTitle_2" />
          </S.LandingTitle>
          <S.LandingSubTitle>
            <FormattedMessage id="landingSubTitle" />
          </S.LandingSubTitle>
        </S.LandingTitleDiv>

        <S.SpinnerWrapper>
          <ColorChipSpinner />
          <S.QuestionMark>
            <Image
              src={questionBubble}
              alt="thought bubble"
              width={48}
              height={48}
            />
          </S.QuestionMark>
        </S.SpinnerWrapper>

        <S.LandingBottomDiv>
          <S.UserCount>
            <FormattedMessage id="userCount_1" /> {count.toLocaleString()}
            <FormattedMessage id="userCount_2" />{' '}
            <FormattedMessage id="userCount_3" />
          </S.UserCount>

          <S.StartButton onClick={onClickStartButton}>
            <FormattedMessage id="startButton" />
          </S.StartButton>

          <S.MiniButtonWrapper>
            <S.MiniButton $type="icon" onClick={handleViewAllType}>
              <FontAwesomeIcon icon={faPalette} />
            </S.MiniButton>
            <S.MiniButton $type="text" onClick={handleLocale}>
              {{ 'ko-KR': 'ENG', 'en-US': '한국어' }[locale]}
            </S.MiniButton>
            <S.MiniButton $type="icon" onClick={handleShare}>
              <FontAwesomeIcon icon={faShareNodes} />
            </S.MiniButton>
          </S.MiniButtonWrapper>
        </S.LandingBottomDiv>
      </S.LandingWrap>
    </>
  );
}

export default LandingPage;
