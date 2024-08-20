import Snackbar from '@Components/Snackbar';
import useModalRecoil from '@Hooks/useModalRecoil';
import {
  imageFileState,
  imageNameState,
  shareInfoModalState,
  shareModalState,
} from '../imageUpload.atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import omctDb from '@Utils/omctDb';
import { isEmpty, isNil } from '@Base/utils/check';

import * as S from '../style';
import useContextLoading from '@Hooks/useContextLoading';
import { OmctConsole } from '@Utils/console';
import { IconShare } from '@Components/Icon/IconShare';
import { IconCopy } from '@Components/Icon/IconCopy';
import AlertModal from '@Components/AlertModal';
import { useModal } from '@Base/hooks/useModal';
import { useShareWeb } from '@Hooks/useShareWeb';
import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { copyUrl } from '@Utils/clipboard';

import ROUTE_PATH from '@Constant/routePath';
import { useTranslation } from 'react-i18next';

const console = new OmctConsole('ShareModalSubPage');

export default function ShareModalSubPage() {
  return (
    <>
      <ShareModal />
      <ShareInfoModal />
    </>
  );
}

const ShareModal = () => {
  const { t } = useTranslation();

  const { load, unLoad } = useContextLoading();
  const imageFile = useRecoilValue(imageFileState);
  const setImageName = useSetRecoilState(imageNameState);
  const { isOpen: isOpenShareModal, close: closeShareModal } = useModalRecoil({
    state: shareModalState,
  });
  const { open: openShareInfoModal } = useModalRecoil({
    state: shareInfoModalState,
  });

  const shareImage = async () => {
    if (isNil(imageFile)) return;
    load();
    const result = await omctDb.sendPersonalImage(imageFile);
    unLoad();
    console.log(result);
    setImageName(result.name);
    closeShareModal();
    openShareInfoModal();
  };

  return (
    <Snackbar isOpen={isOpenShareModal} onClose={closeShareModal}>
      <S.PersonalInfoConsentWrapper>
        <h1>{t('personalInfoConsentTitle')}</h1>
        <ul>
          <li>{t('personalInfoConsent_1')}</li>
          <li>{t('personalInfoConsent_2')}</li>
          <li>{t('personalInfoConsent_3')}</li>
        </ul>
        <p>{t('personalInfoConsentGuide')}</p>
      </S.PersonalInfoConsentWrapper>
      <S.ModalButtonWrapper>
        <S.ModalSecondaryButton onClick={closeShareModal}>
          {t('disagree')}
        </S.ModalSecondaryButton>
        <S.ModalPrimaryButton onClick={shareImage}>
          {t('agree')}
        </S.ModalPrimaryButton>
      </S.ModalButtonWrapper>
    </Snackbar>
  );
};

const ShareInfoModal = () => {
  const { t } = useTranslation();

  const { isOpen: isOpenShareInfoModal, close: closeShareInfoModal } =
    useModalRecoil({ state: shareInfoModalState });

  const imageName = useRecoilValue(imageNameState);

  const {
    isOpen: isOpenAlertModal,
    message: alertModalMessage,
    open: openAlertModal,
    close: closeAlertModal,
  } = useModal({ defaultMessage: '' });

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

  const onClickLinkCopy = async () => {
    const url = `${location.origin}${ROUTE_PATH.choiceColor}?imageName=${imageName}`;
    const copyAlertMsg = await copyUrl(url);
    openAlertModal(copyAlertMsg);
  };

  return (
    <>
      {/* HJ TODO: result 페이지와 중복되는 코드 */}
      <Snackbar isOpen={isOpenShareInfoModal} onClose={closeShareInfoModal}>
        <S.ModalText>{t('shareModal_3')}</S.ModalText>
        <S.MenuContainer>
          <S.MenuItemWrapper>
            <S.MenuItemButton onClick={onClickLinkCopy}>
              <IconCopy />
            </S.MenuItemButton>
            <S.MenuItemName>{t('copyUrl')}</S.MenuItemName>
          </S.MenuItemWrapper>

          <S.MenuItemWrapper>
            <S.MenuItemButton onClick={webShare}>
              <IconShare />
            </S.MenuItemButton>
            <S.MenuItemName>{t('shareResult')}</S.MenuItemName>
          </S.MenuItemWrapper>
        </S.MenuContainer>
      </Snackbar>
      {/* HJ TODO: global하게 관리하는 것 or 일일이 작성하는 것 */}
      {isOpenAlertModal && !isEmpty(alertModalMessage) && (
        <AlertModal isOpen={isOpenAlertModal} handleClose={closeAlertModal}>
          {t(alertModalMessage)}
        </AlertModal>
      )}
    </>
  );
};
