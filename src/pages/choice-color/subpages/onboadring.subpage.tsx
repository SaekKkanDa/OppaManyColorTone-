import { Backdrop } from '@Base/components/Backdrop';
import { isNil } from '@Base/utils/check';
import {
  onboardingElState,
  onboardingState,
} from '@Pages/choice-color/choiceColor.atom';
import { Tooltip } from '@Pages/choice-color/subpages/tooltip.subpage';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

export const OnboardingPage = () => {
  const [isOnboarding, setIsOnboarding] = useRecoilState(onboardingState);
  const onBoardingEl = useRecoilValue(onboardingElState);

  useEffect(() => {
    const close = () => setIsOnboarding(false);
    document.body.addEventListener('click', close);
    return () => {
      document.body.removeEventListener('click', close);
    };
  }, [setIsOnboarding]);

  if (isNil(onBoardingEl)) return;

  if (isOnboarding) {
    // HJ TODO: z-index enum으로 관리
    onBoardingEl.style.zIndex = '20';
  } else {
    onBoardingEl.style.zIndex = 'unset';
    return;
  }

  const { width, height } = onBoardingEl.getBoundingClientRect();

  return (
    <>
      {createPortal(
        <Backdrop onClick={() => setIsOnboarding(false)} />,
        document.body
      )}
      {createPortal(
        <SContainer style={{ width: width + 8, height: height + 8 }}>
          <Tooltip />
        </SContainer>,
        onBoardingEl
      )}
    </>
  );
};

//#region sub components
//#endregion

//#region logics
//#endregion

//#region styled components
const SContainer = styled.div`
  position: absolute;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.gray[100]};
  transform: translate(-4px, -4px);
`;
//#endregion
