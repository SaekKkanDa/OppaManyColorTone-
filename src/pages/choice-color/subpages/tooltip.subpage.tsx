import { onboardingState } from '@Pages/choice-color/choiceColor.atom';
import { BorderedButton, flexCustom } from '@Styles/theme';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

// HJ TODO: base component로 구현
export const Tooltip = () => {
  const { t } = useTranslation();
  const [, setIsOnboarding] = useRecoilState(onboardingState);

  return (
    <STooltipContainer>
      <SParagraphy>{t('onboarding1')}</SParagraphy>
      <SButton onClick={() => setIsOnboarding(false)}>
        {t('onboarding-confirm')}
      </SButton>
      <STooltipArrow />
    </STooltipContainer>
  );
};

//#region sub components
//#endregion

//#region logics
//#endregion

//#region styled components
const SButton = styled(BorderedButton)`
  width: auto;
  padding: 4px 8px;
  font-size: 16px;
`;

const STooltipContainer = styled.div`
  ${flexCustom('column', 'center', 'center')}
  gap: 8px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: fit-content;
  background: ${({ theme }) => theme.gray[100]};
  transform: translateY(calc(-100% - 20px));
  padding: 8px 12px;
  border-radius: 8px;
`;

const STooltipArrow = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: ${({ theme }) => theme.gray[100]};
  transform: translateY(50%) rotate(45deg);
  border-radius: 1px;
`;

const SParagraphy = styled.p`
  white-space: pre-wrap;
  line-height: 18px;
  font-size: 14px;
`;
//#endregion
