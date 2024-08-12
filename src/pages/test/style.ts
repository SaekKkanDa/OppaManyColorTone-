import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { flexCustom } from '@Styles/theme';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

export const PageWrapper = styled.div`
  width: 100%;
  height: 200dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const TopPage = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #2f2f37;
  scroll-snap-align: start;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 3rem;
  padding: 2.5rem;
  ${flexCustom('column', 'center', 'center')}
  row-gap: 0.5rem;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.gray[50]};
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 1.875rem;
  color: ${({ theme }) => theme.gray[400]};
  line-height: 1.125;
  white-space: pre-line;
`;

export const LanguageButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  ${flexCustom('column', 'center', 'center')}
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.gray[200]};
  font-family: var(--font-pretendard);
  font-size: 0.75rem;

  &:active {
    background-color: ${({ theme }) => theme.gray[800]};
    border-color: ${({ theme }) => theme.gray[300]};
    color: ${({ theme }) => theme.gray[300]};
  }
`;

export const StartButton = styled.button<{
  $isRunningStartTransition: boolean;
}>`
  position: fixed;
  bottom: 5rem;
  z-index: 1;
  padding: 1.5rem 2.5rem;
  border-radius: 2.75rem;
  background-color: ${({ theme }) => theme.gray[100]};
  color: ${({ theme, $isRunningStartTransition }) =>
    $isRunningStartTransition ? theme.gray[100] : theme.gray[900]};
  font-size: 2.5rem;
  font-weight: 500;

  -webkit-box-shadow: 0px 0px 30px 1px ${({ theme }) => `${theme.gray[100]}80`};
  -moz-box-shadow: 0px 0px 30px 1px ${({ theme }) => `${theme.gray[100]}80`};
  box-shadow: 0px 0px 30px 1px ${({ theme }) => `${theme.gray[100]}80`};

  transition: color 0.3s ease-in-out;
  animation: pulse 1s infinite ease-in-out alternate;
  @keyframes pulse {
    from {
      transform: scale(0.975);
    }
    to {
      transform: scale(1.025);
    }
  }
`;

export const StartTransition = styled.div<{
  $isRunningStartTransition: boolean;
}>`
  position: fixed;
  bottom: ${({ $isRunningStartTransition }) =>
    $isRunningStartTransition ? '-50vmax' : '7rem'};
  width: ${({ $isRunningStartTransition }) =>
    $isRunningStartTransition ? '200vmax' : '3rem'};
  height: ${({ $isRunningStartTransition }) =>
    $isRunningStartTransition ? '200vmax' : '1.5rem'};
  border-radius: ${({ $isRunningStartTransition }) =>
    $isRunningStartTransition ? '100vmax' : '0.75rem'};
  background-color: ${({ theme }) => theme.gray[100]};

  transition: all 0.5s ease-in-out;
`;

export const DownButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  translate: -50% 0;
  ${flexCustom('column', 'center', 'center')}
  padding: 0.5875rem 0.5rem 0.4125rem;
  color: ${({ theme }) => theme.gray[400]};

  &:active {
    color: ${({ theme }) => theme.gray[300]};
  }

  /* animation: bounce 2.5s ease-in-out infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(1rem);
    }
    60% {
      transform: translateY(0.5rem);
    }
  } */
`;

export const BottomPage = styled.div`
  ${flexCustom('column', 'center', 'center')}
  row-gap: 2.5rem;
  width: 100%;
  height: 50%;
  padding: 2.5rem 1.5rem;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, #2f2f37 25%, ${theme.gray[600]})`};
  scroll-snap-align: end;
`;

export const UserCountMessage = styled.div`
  ${flexCustom('column', 'center', 'start')}
  row-gap: 0.75rem;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.gray[200]};
`;

export const UserCountWrapper = styled.div`
  ${flexCustom('row', 'center', 'center')}
  column-gap: 0.25rem;
`;

export const UserCount = styled(AnimatedNumbers)`
  color: ${({ theme }) => theme.gray[100]};
`;

export const MiniButtonWrapper = styled.div`
  ${flexCustom('column', 'stretch', 'center')}
  row-gap: 0.75rem;
`;

export const MiniButton = styled.button`
  ${flexCustom('row', 'center', 'start')}
  column-gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.gray[300]};

  & svg {
    flex-basis: 1rem;
  }

  &:active {
    background-color: ${({ theme }) => theme.gray[800]};
    border-color: ${({ theme }) => theme.gray[400]};
    color: ${({ theme }) => theme.gray[400]};
  }
`;
