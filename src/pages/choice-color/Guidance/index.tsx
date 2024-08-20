import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import AlertModal from '@Components/AlertModal';

import * as S from './style';

function Guidance() {
  const [isOpenGuideModal, setIsOpenGuideModal] = useState(false);

  const handleOpenGuideModal = () => {
    setIsOpenGuideModal(true);
  };

  return (
    <S.Guidance>
      <S.MainGuide>
        <FormattedMessage id="explanation_1" />
        <S.MoreGuideButton onClick={handleOpenGuideModal}>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </S.MoreGuideButton>
      </S.MainGuide>
      <S.SubGuide>
        <FormattedMessage id="explanation_2" />
        <br />
        <FormattedMessage id="explanation_3" />
      </S.SubGuide>

      {isOpenGuideModal && (
        <AlertModal
          isOpen={isOpenGuideModal}
          title="colorChoiceGuideTitle"
          textSize="sm"
          handleClose={() => setIsOpenGuideModal(false)}
        >
          <S.ColorChoiceGuideWrapper>
            {[
              'colorChoiceGuideExplanation_1',
              'colorChoiceGuideExplanation_2',
              'colorChoiceGuideExplanation_3',
            ].map((messageId) => (
              <p key={messageId}>
                <FormattedMessage id={messageId} />
              </p>
            ))}
          </S.ColorChoiceGuideWrapper>
        </AlertModal>
      )}
    </S.Guidance>
  );
}

export default Guidance;
