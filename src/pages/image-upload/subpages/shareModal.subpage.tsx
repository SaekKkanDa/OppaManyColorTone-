import Snackbar from '@Components/Snackbar';
import useModalRecoil from '@Hooks/useModalRecoil';
import {
  imageFileState,
  shareInfoModalState,
  shareModalState,
} from '../imageUpload.atom';
import { useRecoilValue } from 'recoil';
import omctDb from '@Utils/omctDb';
import { isFalse } from '@Base/utils/check';

import * as S from '../style';
import useContextLoading from '@Hooks/useContextLoading';

export default function ShareModalSubPage() {
  const { load, unLoad } = useContextLoading();
  const imageFile = useRecoilValue(imageFileState);
  const { isOpen: isOpenShareModal, close: clsoseShareModal } = useModalRecoil({
    state: shareModalState,
  });

  const {
    isOpen: isOpenShareInfoModal,
    open: openShareInfoModal,
    close: closeShareInfoModal,
  } = useModalRecoil({ state: shareInfoModalState });

  const shareImage = async () => {
    if (isFalse(imageFile)) return;
    load();
    const result = await omctDb.sendPersonalImage(imageFile);
    unLoad();
    console.log(result);
    clsoseShareModal();
    openShareInfoModal();
  };

  return (
    <>
      <Snackbar isOpen={isOpenShareModal} onClose={clsoseShareModal}>
        <S.ModalText>대리 선택 신청하기</S.ModalText>
        <S.ModalButton onClick={shareImage}>공유하기</S.ModalButton>
      </Snackbar>
      <Snackbar isOpen={isOpenShareInfoModal} onClose={closeShareInfoModal}>
        <S.ModalText>공유하기</S.ModalText>
      </Snackbar>
    </>
  );
}
