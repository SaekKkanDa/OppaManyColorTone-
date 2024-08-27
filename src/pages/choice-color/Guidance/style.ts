import styled from 'styled-components';
import { flexCustom } from '@Styles/theme';

export const Guidance = styled.div`
  ${flexCustom('column', 'center', 'center')}
  row-gap: 0.5rem;
  text-align: center;
`;

export const MainGuide = styled.div`
  ${flexCustom('row', 'center', 'center')}
  column-gap: 0.25rem;
  font-weight: 600;
`;

export const MoreGuideButton = styled.button`
  color: ${({ theme }) => theme.gray[700]};
  line-height: 0;
`;

export const SubGuide = styled.p`
  color: ${({ theme }) => theme.gray[500]};
  font-size: ${({ theme }) => theme.font.size.xs};
`;

export const ColorChoiceGuideWrapper = styled.div`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  row-gap: 0.75rem;
  color: ${({ theme }) => theme.gray[700]};
`;
