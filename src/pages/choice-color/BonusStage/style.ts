import styled from 'styled-components';
import * as S from '../BasicStage/style';
import { flexCustom } from '@Styles/theme';

export const StatusWrapper = S.StatusWrapper;

export const BonusStatusBox = styled(S.StatusBox)`
  background: -webkit-linear-gradient(
    90deg,
    ${({ theme }) => theme.gray[300]},
    ${({ theme }) => theme.gray[600]},
    ${({ theme }) => theme.gray[300]}
  );
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gray[300]},
    ${({ theme }) => theme.gray[600]},
    ${({ theme }) => theme.gray[300]}
  );
  background-size: 200%;

  -webkit-animation: gradient 1s linear reverse infinite;
  -moz-animation: gradient 1s linear reverse infinite;
  animation: gradient 1s linear reverse infinite;

  @-webkit-keyframes gradient {
    0% {
      background-position: 0%;
    }
    25% {
      background-position: 50%;
    }
    50% {
      background-position: 100%;
    }
    75% {
      background-position: 150%;
    }
    100% {
      background-position: 200%;
    }
  }

  @-moz-keyframes gradient {
    0% {
      background-position: 0%;
    }
    25% {
      background-position: 50%;
    }
    50% {
      background-position: 100%;
    }
    75% {
      background-position: 150%;
    }
    100% {
      background-position: 200%;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    25% {
      background-position: 50%;
    }
    50% {
      background-position: 100%;
    }
    75% {
      background-position: 150%;
    }
    100% {
      background-position: 200%;
    }
  }
`;

export const BonusStatusContent = S.StatusContent;

export const BonusColorBox = S.ColorBox;

export const BonusColor = styled(S.Color)<{ colors: string[] }>`
  background: conic-gradient(
    ${({ colors }) => colors[0]} 120deg,
    ${({ colors }) => colors[2]} 120deg 240deg,
    ${({ colors }) => colors[1]} 240deg
  );
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  ${flexCustom('column', 'center', 'center')}

  img {
    border-radius: 50%;
  }
`;
