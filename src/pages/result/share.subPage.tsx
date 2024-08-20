import React from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

import { isEmpty, isNil } from '@Base/utils/check';
import AlertModal from '@Components/AlertModal';
import { useModal } from '@Base/hooks/useModal';
import ROUTE_PATH from '@Constant/routePath';
import { copyUrl } from '@Utils/clipboard';
import RestartButton from '@Pages/result/RestartButton';
import { captureAndDownload, checkIfKakaoAndAlert } from './share.logic';
import * as S from './style';
import { useShareKakao } from '@Hooks/useShareKakao';
import { useShareWeb } from '@Hooks/useShareWeb';
import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { IconDownload } from '@Components/Icon/IconDownload';
import { IconCopy } from '@Components/Icon/IconCopy';
import { IconKakao } from '@Components/Icon/IconKakao';
import { IconShare } from '@Components/Icon/IconShare';

interface MenuSubPageProps {
  resultContainerRef: React.RefObject<HTMLDivElement>;
  colorType: string;
}

function ShareSubPage({ resultContainerRef, colorType }: MenuSubPageProps) {
  const router = useRouter();

  // alert modal
  const {
    isOpen: isOpenAlertModal,
    message: alertModalMessage,
    open: openAlertModal,
    close: closeAlertModal,
  } = useModal({ defaultMessage: '' });

  const kakaoShare = useShareKakao({
    onError: () => openAlertModal('alertRetry'),
  });

  const webShare = useShareWeb({
    onError: (reason) => {
      if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_KAKAO_BROWSER) {
        openAlertModal('alertKakao');
      } else if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_BROWSER) {
        openAlertModal('alertMacOS');
      } else if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_FUNCTION) {
        openAlertModal('alertNotSupportedBrowser');
      }
      // HJ TODO: assertion 함수 구현
    },
  });

  const kakaoAlertMsg = checkIfKakaoAndAlert();

  const onClickCapture = async () => {
    if (kakaoAlertMsg) {
      openAlertModal(kakaoAlertMsg);
      return;
    }

    const wrapper = resultContainerRef.current;
    if (isNil(wrapper)) return;

    const imgName = `${colorType}-result.png`;
    captureAndDownload(wrapper, imgName);
  };

  const onClickLinkCopy = async () => {
    if (kakaoAlertMsg) {
      openAlertModal(kakaoAlertMsg);
      return;
    }

    const copyAlertMsg = await copyUrl(location.href);
    openAlertModal(copyAlertMsg);
  };

  const handleGoToAllTypesView = () => {
    router.push(ROUTE_PATH.allTypesView);
  };

  return (
    <>
      <S.MenuContainer>
        <S.MenuItemWrapper>
          <S.MenuItemButton onClick={onClickCapture}>
            <IconDownload />
          </S.MenuItemButton>
          <S.MenuItemName>
            <FormattedMessage id="saveResult" />
          </S.MenuItemName>
        </S.MenuItemWrapper>

        <S.MenuItemWrapper>
          <S.MenuItemButton onClick={onClickLinkCopy}>
            <IconCopy />
          </S.MenuItemButton>
          <S.MenuItemName>
            <FormattedMessage id="copyUrl" />
          </S.MenuItemName>
        </S.MenuItemWrapper>

        <S.MenuItemWrapper>
          <S.KakaoShareButton onClick={kakaoShare}>
            <IconKakao width={48} height={48} />
          </S.KakaoShareButton>
          <S.MenuItemName>
            <FormattedMessage id="kakaotalk" />
          </S.MenuItemName>
        </S.MenuItemWrapper>

        <S.MenuItemWrapper>
          <S.MenuItemButton onClick={webShare}>
            <IconShare />
          </S.MenuItemButton>
          <S.MenuItemName>
            <FormattedMessage id="shareResult" />
          </S.MenuItemName>
        </S.MenuItemWrapper>
      </S.MenuContainer>

      <S.ButtonWrapper>
        <RestartButton />
        <S.AllTypesButton onClick={handleGoToAllTypesView}>
          <FormattedMessage id="viewAllTypesButton" />
        </S.AllTypesButton>
      </S.ButtonWrapper>
      {isOpenAlertModal && !isEmpty(alertModalMessage) && (
        <AlertModal isOpen={isOpenAlertModal} handleClose={closeAlertModal}>
          <FormattedMessage id={alertModalMessage} />
        </AlertModal>
      )}
    </>
  );
}
export default ShareSubPage;
