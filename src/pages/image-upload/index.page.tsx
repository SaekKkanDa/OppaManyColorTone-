import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'next-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { CropImage } from '@Recoil/app';
import ROUTE_PATH from '@Constant/routePath';
import AlertModal from '@Components/AlertModal';
import theme, {
  Modal as ThemeModal,
  ModalBackground,
  ModalContainer,
} from '@Styles/theme';
import { useModal } from '@Base/hooks/useModal';

import FaceDetection from './FaceDetection';
import * as S from './style';
import { isEmpty, isNotNil } from '@Base/utils/check';
import { imageFileState, shareModalState } from './imageUpload.atom';
import useModalRecoil from '@Hooks/useModalRecoil';
import ShareModalSubPage from './subpages/shareModal.subpage';

function ImageUploadPage() {
  const { t } = useTranslation('common');

  const [imageFile, setImageFile] = useRecoilState(imageFileState);

  const {
    isOpen: isOpenImageUploadModal,
    open: openImageUploadModal,
    close: closeImageUploadModal,
  } = useModal({ defaultIsOpen: false });

  const [alertMessage, setAlertMessage] = useState('');
  const imagePreviewURL = useRecoilValue(CropImage);

  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const clickInput = () => {
    inputRef.current?.click();
  };

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageFile(event.target.files[0]);
      openImageUploadModal();
      return;
    }
    setAlertMessage('alertRetry');
  };

  // related to start button
  const { open: openShareRecommendationModal } = useModalRecoil({
    state: shareModalState,
  });

  return (
    <>
      <ModalContainer isOpen={isOpenImageUploadModal}>
        {isOpenImageUploadModal && isNotNil(imageFile) && (
          <>
            <ThemeModal>
              <FaceDetection
                imageFile={imageFile}
                setAlertMessage={setAlertMessage}
                handleClose={closeImageUploadModal}
              />
            </ThemeModal>
            <ModalBackground />
          </>
        )}
        {!isEmpty(alertMessage) && (
          <AlertModal
            isOpen={!!alertMessage}
            handleClose={() => setAlertMessage('')}
          >
            {t(`${alertMessage}`)}
          </AlertModal>
        )}

        <S.FlexContainer isOpen={isOpenImageUploadModal}>
          <S.ImageBox>
            {imagePreviewURL ? (
              <>
                <S.CroppedImageBox
                  src={imagePreviewURL}
                  alt="preview image"
                  width={150}
                  height={150}
                />
                <S.InputFile
                  ref={inputRef}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={selectImage}
                />
              </>
            ) : (
              <S.ImageLabel>
                <S.InputFile
                  ref={inputRef}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={selectImage}
                />
                <FontAwesomeIcon
                  icon={faUserPlus}
                  size="3x"
                  color={theme.gray[300]}
                />
              </S.ImageLabel>
            )}
          </S.ImageBox>

          <S.SelectImgButton onClick={clickInput}>
            {t('selectImg')}
          </S.SelectImgButton>
          <S.Guidance>{t('guidance')}</S.Guidance>
          <S.Notification>
            <h6>
              <FontAwesomeIcon icon={faFaceSmile} size="sm" />
              {t('notification_1')}
            </h6>
            {t('notification_2')}
            <br />
            {t('notification_3')}
          </S.Notification>

          <S.ButtonWrapper>
            <S.NextButton
              disabled={!imagePreviewURL}
              onClick={openShareRecommendationModal}
            >
              {t('otherChooseButton')}
            </S.NextButton>
            <S.ButtonLink href={ROUTE_PATH.choiceColor}>
              <S.NextButton disabled={!imagePreviewURL}>
                {t('nextButton')}
              </S.NextButton>
            </S.ButtonLink>
          </S.ButtonWrapper>
        </S.FlexContainer>
      </ModalContainer>
      <ShareModalSubPage />
    </>
  );
}

export default ImageUploadPage;
