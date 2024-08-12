import { flexCustom } from '@Styles/theme';
import styled from 'styled-components';

export const Guidance = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.3em;
  text-align: center;
`;

export const Explanation = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.gray[400]};
  font-size: 13px;
`;

export const ColorChoiceGuideWrapper = styled.div`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  row-gap: 0.75rem;
`;
