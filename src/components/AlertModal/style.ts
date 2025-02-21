import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: calc(100% - 64px);
  max-width: calc(var(--viewport-max-width) - 64px);
  padding: 1rem;
  border-radius: 28px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  background-color: ${({ theme }) => theme.gray[50]};
  color: ${({ theme }) => theme.gray[800]};

  white-space: break-spaces;

  button {
    font-size: 1.25rem;
  }
`;

export const Title = styled.h6`
  padding-top: 0.5rem;
`;

export const Message = styled.div<{ $textSize: 'sm' | 'md' }>`
  padding-bottom: 0.5rem;
  font-size: ${({ $textSize }) => $textSize === 'sm' && '0.875rem'};
  text-align: initial;
`;
