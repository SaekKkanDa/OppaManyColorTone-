import Snackbar from '@Components/Snackbar';
import useModalRecoil from '@Hooks/useModalRecoil';
import {
  imageFileState,
  imageNameState,
  shareInfoModalState,
  shareModalState,
} from '../imageUpload.atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import omctDb from '@Utils/omctDb';
import { isEmpty, isNil } from '@Base/utils/check';

import * as S from '../style';
import useContextLoading from '@Hooks/useContextLoading';
import { OmctConsole } from '@Utils/console';
import { FormattedMessage } from 'react-intl';
import { IconShare } from '@Components/Icon/IconShare';
import { IconCopy } from '@Components/Icon/IconCopy';
import AlertModal from '@Components/AlertModal';
import { useModal } from '@Base/hooks/useModal';
import { useShareWeb } from '@Hooks/useShareWeb';
import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { copyUrl } from '@Utils/clipboard';

import ROUTE_PATH from '@Constant/routePath';

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
  const { load, unLoad } = useContextLoading();
  const imageFile = useRecoilValue(imageFileState);
  const [, setImageName] = useRecoilState(imageNameState);
  const { isOpen: isOpenShareModal, close: clsoseShareModal } = useModalRecoil({
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
    clsoseShareModal();
    openShareInfoModal();
  };

  return (
    <Snackbar isOpen={isOpenShareModal} onClose={clsoseShareModal}>
      <S.ModalText>
        <FormattedMessage id="shareModal_1" />
      </S.ModalText>
      <S.ModalButton onClick={shareImage}>
        <FormattedMessage id="shareModal_2" />
      </S.ModalButton>
    </Snackbar>
  );
};

const ShareInfoModal = () => {
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
    const url = `${location.origin}/${ROUTE_PATH.choiceColor}?imageName=${imageName}`;
    const copyAlertMsg = await copyUrl(url);
    openAlertModal(copyAlertMsg);
  };

  return (
    <>
      {/* HJ TODO: result 페이지와 중복되는 코드 */}
      <Snackbar isOpen={isOpenShareInfoModal} onClose={closeShareInfoModal}>
        <S.ModalText>
          <FormattedMessage id="shareModal_3" />
        </S.ModalText>
        <S.MenuContainer>
          <S.MenuItemWrapper>
            <S.MenuItemButton onClick={onClickLinkCopy}>
              <IconCopy />
            </S.MenuItemButton>
            <S.MenuItemName>
              <FormattedMessage id="copyUrl" />
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
      </Snackbar>
      {/* HJ TODO: global하게 관리하는 것 or 일일이 작성하는 것 */}
      {isOpenAlertModal && !isEmpty(alertModalMessage) && (
        <AlertModal isOpen={isOpenAlertModal} handleClose={closeAlertModal}>
          <FormattedMessage id={alertModalMessage} />
        </AlertModal>
      )}
    </>
  );
};
