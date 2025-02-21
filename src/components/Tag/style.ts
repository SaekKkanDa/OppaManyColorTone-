import { flexCustom } from '@Styles/theme';
import styled from 'styled-components';

export const TagWrapper = styled.div`
  ${flexCustom('row', 'center', 'center')}
  flex-wrap: wrap;
  column-gap: 4px;
  row-gap: 6px;
`;

interface TagStyleProps {
  backgroundColor: string;
  textColor: string;
}

export const Tag = styled.span<TagStyleProps>`
  ${flexCustom('row', 'flex-start', 'flex-start')}
  padding: 0.5rem;
  border-radius: 1em;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme, textColor }) =>
    ({ light: theme.white, dark: theme.gray[900] }[textColor])};
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: 1;
`;
