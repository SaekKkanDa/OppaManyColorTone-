import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

const theme = {
  white: '#ffffff',
  gray: {
    50: '#fafafa',
    100: '#f4f4f5',
    150: '#f1f1f3',
    200: '#e4e4e7',
    300: '#d4d4d8',
    350: '#BBBBC1',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },

  font: {
    size: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '1.5xl': '1.5rem',
      '1.75xl': '1.75rem',
      '2xl': '2rem',
    },
  },
} as const;

export default theme;

export const flexCustom = (
  flexDirection: CSSProperties['flexDirection'] = 'initial',
  alignItems: CSSProperties['alignItems'] = 'center',
  justifyContent: CSSProperties['justifyContent'] = 'center'
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
`;

export const layout = css`
  min-height: 100dvh;
  width: 100%;
  padding: 2rem 1.5rem;
`;

export const Button = styled.button`
  padding: 1rem 0;
  width: 100%;
  max-width: calc(min(var(--viewport-max-width), 100vw) - 3rem);
  border-radius: 1.25rem;

  background-color: ${theme.gray[800]};
  color: ${theme.white};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;

  &:active {
    background-color: ${theme.gray[900]};
  }

  &:disabled {
    background-color: ${theme.gray[300]};
    color: ${theme.gray[100]};
    cursor: not-allowed;
  }
`;

export const BorderedButton = styled(Button)`
  background-color: transparent;
  outline: 2px solid ${theme.gray[800]};
  outline-offset: -2px;
  color: ${theme.gray[800]};

  &:active {
    background-color: ${theme.gray[200]};
  }

  &:disabled {
    background-color: transparent;
    outline-color: ${theme.gray[300]};
    color: ${theme.gray[300]};
    cursor: not-allowed;
  }
`;

type ModalContainerProps = {
  isOpen: boolean;
};

export const ModalContainer = styled.div<ModalContainerProps>`
  position: relative;
  height: 100%;
  max-height: ${({ isOpen }) => (isOpen ? '100dvh' : 'none')};
  overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.gray[800]};
  opacity: 0.5;
  z-index: 10;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
