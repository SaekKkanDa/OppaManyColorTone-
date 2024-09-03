import styled from 'styled-components';
import { Button, flexCustom, layout } from '@Styles/theme';

export const LandingWrap = styled.div`
  ${layout}
  ${flexCustom('column', 'center', 'center')}
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const LandingTitleDiv = styled.div`
  ${flexCustom('column', 'center', 'flex-end')}
  flex: 1 1 0;
`;

export const LandingTitle = styled.h1`
  color: ${({ theme }) => theme.gray[300]};
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.gray[700]};
`;

export const LandingSubTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  ${flexCustom('column', 'center', 'center')}
  flex: 3 1 0;
`;

export const SpinnerLoadingArea = styled.div`
  width: 240px;
  height: 240px;
`;

export const QuestionMark = styled.div`
  position: absolute;
  top: calc(50% - 80px);
  left: calc(50% + 36px);
  -webkit-animation: scale-in-out 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s
    alternate both infinite;
  animation: scale-in-out 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s alternate
    both infinite;

  @-webkit-keyframes scale-in-out {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    60% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    70% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }

  @keyframes scale-in-out {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    60% {
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    70% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
    }
  }
`;

export const LandingBottomDiv = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 100%;
`;

export const UserCount = styled.div`
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const StartButton = styled(Button)`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const MiniButtonWrapper = styled.div`
  ${flexCustom('row', 'flex-end', 'center')}
  column-gap: 1rem;
  margin-top: 16px;
`;

export const MiniButton = styled.button`
  ${flexCustom('column', 'center', 'center')}
  padding:0.5rem;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.gray[500]};
  font-size: 0.875rem;

  &:active {
    background-color: ${({ theme }) => theme.gray[200]};
    border-color: ${({ theme }) => theme.gray[700]};
    color: ${({ theme }) => theme.gray[700]};
  }
`;
