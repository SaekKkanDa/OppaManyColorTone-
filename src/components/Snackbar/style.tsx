import styled, { css, keyframes } from 'styled-components';

const roadRunnerIn = keyframes`
  0% {
    transform:translateX(-1500px) skewX(30deg) scaleX(1.3);
  }
  70% {
    transform:translateX(30px) skewX(0deg) scaleX(.9);
  }
  100% {
    transform:translateX(-50%) skewX(0deg) scaleX(1);
  }
`;

const roadRunnerOut = keyframes`
  0% {
    transform:translateX(-50%) skewX(0deg) scaleX(1);
  }
  30% {
    transform:translateX(-30px) skewX(-5deg) scaleX(.9);
  }
  100% {
    transform:translateX(1500px) skewX(30deg) scaleX(1.3);
  }
`;

export const Container = styled.div<{ isIn: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: calc(var(--viewport-max-width) - 120px);
  max-width: calc(var(--viewport-max-width) - 64px);
  padding: 24px 16px;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  background-color: ${({ theme }) => theme.gray[50]};
  color: ${({ theme }) => theme.gray[800]};

  white-space: break-spaces;

  button {
    font-size: 1.25rem;
  }

  transform-origin: center;
  transform: tranlsateX(-1500px);
  ${({ isIn }) =>
    isIn
      ? css`
          animation: ${roadRunnerIn} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)
            forwards;
        `
      : css`
          animation: ${roadRunnerOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
            forwards;
        `}
`;
