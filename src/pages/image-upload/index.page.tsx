import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FormattedMessage } from 'react-intl';

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
import { isEmpty, isTrue } from '@Base/utils/check';
import { useTrigger } from '@Base/hooks/useTrigger';
import { imageFileState, shareModalState } from './imageUpload.atom';
import useModalRecoil from '@Hooks/useModalRecoil';
import ShareModalSubPage from './subpages/shareModal.subpage';

function ImageUploadPage() {
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

  useTrigger({
    triggerFn: () => !isEmpty(imagePreviewURL),
    onTrigger: () => openShareRecommendationModal(),
  });

  return (
    <>
      <ModalContainer isOpen={isOpenImageUploadModal}>
        {isOpenImageUploadModal && isTrue(imageFile) && (
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
            <FormattedMessage id={alertMessage} />
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
            <FormattedMessage id="selectImgButton" />
          </S.SelectImgButton>
          <S.Guidance>
            <FormattedMessage id="guidance" />
          </S.Guidance>
          <S.Notification>
            <h6>
              <FontAwesomeIcon icon={faFaceSmile} size="sm" />
              <FormattedMessage id="notification_1" />
            </h6>
            <FormattedMessage id="notification_2" />
            <br />
            <FormattedMessage id="notification_3" />
          </S.Notification>

          <Link href={ROUTE_PATH.choiceColor}>
            <S.NextButton disabled={!imagePreviewURL}>
              <FormattedMessage id="nextButton" />
            </S.NextButton>
          </Link>
        </S.FlexContainer>
      </ModalContainer>
      <ShareModalSubPage />
    </>
  );
}

export default ImageUploadPage;
