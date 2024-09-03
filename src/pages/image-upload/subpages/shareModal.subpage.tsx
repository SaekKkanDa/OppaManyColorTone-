import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import Snackbar from '@Components/Snackbar';
import useModalRecoil from '@Hooks/useModalRecoil';
import omctDb from '@Utils/omctDb';
import { isNil } from '@Base/utils/check';
import useContextLoading from '@Hooks/useContextLoading';
import { OmctConsole } from '@Utils/console';
import ROUTE_PATH from '@Constant/routePath';

import { imageFileState, shareModalState } from '../imageUpload.atom';
import * as S from '../style';

const console = new OmctConsole('ShareModalSubPage');

export default function ShareModalSubPage() {
  return <ShareModal />;
}

const ShareModal = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { load, unLoad } = useContextLoading();
  const imageFile = useRecoilValue(imageFileState);
  const { isOpen: isOpenShareModal, close: closeShareModal } = useModalRecoil({
    state: shareModalState,
  });

  const shareImage = async () => {
    if (isNil(imageFile)) return;
    load();
    const result = await omctDb.sendPersonalImage(imageFile);
    unLoad();
    console.log(result);
    closeShareModal();
    router.push(`${ROUTE_PATH.myTestShare}?imageName=${result.name}`);
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

// const ShareInfoModal = () => {
//   const { t } = useTranslation();

//   const { isOpen: isOpenShareInfoModal, close: closeShareInfoModal } =
//     useModalRecoil({ state: shareInfoModalState });

//   const imageName = useRecoilValue(imageNameState);

//   const {
//     isOpen: isOpenAlertModal,
//     message: alertModalMessage,
//     open: openAlertModal,
//     close: closeAlertModal,
//   } = useModal({ defaultMessage: '' });

//   const webShare = useShareWeb({
//     onError: (reason) => {
//       if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_KAKAO_BROWSER) {
//         openAlertModal('alertKakao');
//       } else if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_BROWSER) {
//         openAlertModal('alertMacOS');
//       } else if (reason === EOmctErrorNo.SHARE_NOT_SUPPORT_FUNCTION) {
//         openAlertModal('alertNotSupportedBrowser');
//       }
//       // HJ TODO: assertion 함수 구현
//     },
//   });

//   const onClickLinkCopy = async () => {
//     const url = `${location.origin}${ROUTE_PATH.choiceColor}?imageName=${imageName}`;
//     const copyAlertMsg = await copyUrl(url);
//     openAlertModal(copyAlertMsg);
//   };

//   return (
//     <>
//       {/* HJ TODO: result 페이지와 중복되는 코드 */}
//       <Snackbar isOpen={isOpenShareInfoModal} onClose={closeShareInfoModal}>
//         <S.ModalText>{t('shareModal_3')}</S.ModalText>
//         {/* <S.MenuContainer>
//           <S.MenuItemWrapper>
//             <S.MenuItemButton onClick={onClickLinkCopy}>
//               <IconCopy />
//             </S.MenuItemButton>
//             <S.MenuItemName>{t('copyUrl')}</S.MenuItemName>
//           </S.MenuItemWrapper>

//           <S.MenuItemWrapper>
//             <S.MenuItemButton onClick={webShare}>
//               <IconShare />
//             </S.MenuItemButton>
//             <S.MenuItemName>{t('shareResult')}</S.MenuItemName>
//           </S.MenuItemWrapper>
//         </S.MenuContainer> */}
//       </Snackbar>
//       {/* HJ TODO: global하게 관리하는 것 or 일일이 작성하는 것 */}
//       {isOpenAlertModal && !isEmpty(alertModalMessage) && (
//         <AlertModal isOpen={isOpenAlertModal} handleClose={closeAlertModal}>
//           {t(alertModalMessage)}
//         </AlertModal>
//       )}
//     </>
//   );
// };
