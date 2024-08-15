import Image from 'next/image';
import styled from 'styled-components';
import { Button, flexCustom } from '@Styles/theme';
import Link from 'next/link';

export const CroppedImageBox = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;
`;

export const FlexContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'hidden' : 'block')};
  height: 100dvh;
  ${flexCustom('column', 'center', 'center')}
  padding: 40px 20px;
`;

export const ImageBox = styled.div`
  ${flexCustom('column', 'center', 'center')}
  margin-bottom: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
`;

export const ImageLabel = styled.label`
  ${flexCustom('column', 'center', 'center')}
  cursor: pointer;
`;

export const SelectImgButton = styled(Button)`
  width: 200px;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Guidance = styled.div`
  margin: 24px 0 12px;
  text-align: center;
  line-height: 1.6em;
`;

export const Notification = styled(Guidance)`
  padding: 8px 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray[200]};
  color: ${({ theme }) => theme.gray[500]};
  text-align: left;
  font-size: 12px;

  h6 {
    margin-bottom: 0.2em;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;

    svg {
      margin-right: 4px;
    }
  }
`;

export const NextButton = styled(Button)`
  width: 100%;
  // position: fixed;
  // bottom: 48px;
  // left: 50%;
  // transform: translateX(-50%);
`;

// Modal
export const ModalText = styled.div`
  text-align: center;
`;

export const ModalButton = styled(Button)`
  &&& {
    font-size: ${({ theme }) => theme.font.size.md};
  }
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

export const ButtonWrapper = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
  margin-top: 16px;
  width: 100%;
  gap: 12px;
  padding: 0px 12px;
`;

export const ButtonLink = styled(Link)`
  width: 100%;
`;
