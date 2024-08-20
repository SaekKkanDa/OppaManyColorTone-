import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('common');

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

  return (
    <>
      <S.MenuContainer>
        <S.MenuItemWrapper>
          <S.MenuItemButton onClick={onClickCapture}>
            <IconDownload />
          </S.MenuItemButton>
          <S.MenuItemName>{t('saveResult')}</S.MenuItemName>
        </S.MenuItemWrapper>

        <S.MenuItemWrapper>
          <S.MenuItemButton onClick={onClickLinkCopy}>
            <IconCopy />
          </S.MenuItemButton>
          <S.MenuItemName>{t('copyUrl')}</S.MenuItemName>
        </S.MenuItemWrapper>

        <S.MenuItemWrapper>
          <S.KakaoShareButton onClick={kakaoShare}>
            <IconKakao width={48} height={48} />
          </S.KakaoShareButton>
          <S.MenuItemName>{t('kakaotalk')}</S.MenuItemName>
        </S.MenuItemWrapper>

        <S.MenuItemWrapper>
          <S.MenuItemButton onClick={webShare}>
            <IconShare />
          </S.MenuItemButton>
          <S.MenuItemName>{t('shareResult')}</S.MenuItemName>
        </S.MenuItemWrapper>
      </S.MenuContainer>

      <S.ButtonsWrapper>
        <Link href={ROUTE_PATH.allTypesView}>
          <S.AllTypesButton>{t('allTypes')}</S.AllTypesButton>
        </Link>
        <RestartButton />
      </S.ButtonsWrapper>
      {isOpenAlertModal && !isEmpty(alertModalMessage) && (
        <AlertModal isOpen={isOpenAlertModal} handleClose={closeAlertModal}>
          {t(`${alertModalMessage}`)}
        </AlertModal>
      )}
    </>
  );
}
export default ShareSubPage;
