import { Button, flexCustom, layout } from '@Styles/theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  ${layout}
  ${flexCustom('column', 'initial', 'initial')}
  row-gap: 2rem;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  ${flexCustom('column', 'initial', 'initial')}
  row-gap: 2rem;
`;

export const GuideWrapper = styled.div`
  ${flexCustom('column', 'initial', 'initial')}
  row-gap: 1rem;
`;

export const GuideMain = styled.p`
  color: ${({ theme }) => theme.gray[900]};
  font-size: ${({ theme }) => theme.font.size['1.5xl']};
  font-weight: 700;
`;

export const GuideSub = styled.p`
  color: ${({ theme }) => theme.gray[700]};
`;

export const TestUrlWrapper = styled.div`
  ${flexCustom('column', 'initial', 'initial')}
  row-gap: 0.25rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.gray[200]};
`;

export const TestUrlHeader = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const TestUrl = styled.div`
  color: ${({ theme }) => theme.gray[500]};
  font-size: ${({ theme }) => theme.font.size.sm};
  word-break: break-all;
`;

export const CopyUrlButton = styled.button``;

export const PrimaryButton = Button;
