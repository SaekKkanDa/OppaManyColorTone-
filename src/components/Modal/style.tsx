import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: calc(100% - 64px);
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
`;
