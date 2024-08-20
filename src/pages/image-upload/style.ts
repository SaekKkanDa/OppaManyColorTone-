import Image from 'next/image';
import styled from 'styled-components';
import { BorderedButton, Button, flexCustom, layout } from '@Styles/theme';

export const CroppedImageBox = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;
`;

export const FlexContainer = styled.div<{ isOpen: boolean }>`
  ${layout}
  display: ${({ isOpen }) => (isOpen ? 'hidden' : 'block')};
  ${flexCustom('column', 'center', 'center')}
`;

export const ImageSelectWrapper = styled.div`
  flex-grow: 1;
  ${flexCustom('column', 'center', 'center')}
  row-gap: 1.5rem;
`;

export const ImageBox = styled.div`
  ${flexCustom('column', 'center', 'center')}
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
`;

export const ImageLabel = styled.label`
  ${flexCustom('column', 'center', 'center')}
  width: 100%;
  height: 100%;
  border-radius: inherit;
  cursor: pointer;
`;

export const SelectImgButton = styled(Button)`
  width: 200px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Guidance = styled.p`
  text-align: center;
`;

export const Notification = styled.div`
  padding: 0.5rem 0.75rem;
  width: 268px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray[200]};
  color: ${({ theme }) => theme.gray[500]};
  font-size: ${({ theme }) => theme.font.size.xs};
  white-space: pre-line;
  word-break: keep-all;

  h6 {
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    font-family: inherit;

    svg {
      margin-right: 0.25rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  ${flexCustom('column', 'center', 'center')}
  row-gap: 0.5rem;
  width: 100%;
`;

export const PrimaryButton = Button;

export const SecondaryButton = BorderedButton;

// Modal
export const ModalText = styled.div`
  text-align: center;
`;

export const PersonalInfoConsentWrapper = styled.div`
  ${flexCustom('column', 'flex-start', 'center')}
  row-gap: 1rem;
  padding-bottom: 1rem;

  & h1 {
    font-size: ${({ theme }) => theme.font.size.lg};
    font-family: inherit;
    font-weight: 600;
  }

  & ul {
    list-style-type: disc;
    color: ${({ theme }) => theme.gray[600]};

    & li {
      margin-left: 1.5rem;
      font-size: ${({ theme }) => theme.font.size.sm};
    }
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.gray[400]};
  }
`;

export const ModalButtonWrapper = styled.div`
  ${flexCustom('row', 'center', 'center')}
  column-gap: 0.5rem;
`;

export const ModalPrimaryButton = styled(Button)`
  flex-basis: 60%;
`;

export const ModalSecondaryButton = styled(BorderedButton)`
  flex-basis: 40%;
`;

export const MenuContainer = styled.div`
  ${flexCustom('row', 'inherit', 'space-around')}
  padding: 10px 10px;
`;

export const MenuItemWrapper = styled.div`
  ${flexCustom('column', 'center', 'center')}
`;

export const MenuItemButton = styled.button`
  ${flexCustom('column', 'center', 'center')}
  padding: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray[800]};
  aspect-ratio: 1/1;
  font-size: 48px;
  cursor: pointer;

  svg {
    width: 100%;
  }
`;

export const KakaoShareButton = styled.button`
  ${flexCustom('column', 'center', 'center')}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const MenuItemName = styled.div`
  margin-top: 4px;
  text-align: center;
  font-size: 12px;
`;
