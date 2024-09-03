import styled from 'styled-components';
import { flexCustom, layout } from '@Styles/theme';

export const Wrapper = styled.div`
  ${layout}
  height: 100svh;
  ${flexCustom('column', 'stretch', 'start')}
  row-gap: 1.5rem;
`;
