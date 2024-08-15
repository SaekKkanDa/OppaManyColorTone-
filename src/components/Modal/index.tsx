import { ModalBase, ModalBaseProps } from '@Base/components/ModalBase';

import * as S from './style';
import { CSSProperties } from 'react';

export interface ModalProps extends ModalBaseProps {
  containerStyle?: CSSProperties;
}

export default function Modal({
  children,
  containerStyle,
  ...rest
}: ModalProps) {
  return (
    <ModalBase hiddenStyle={{ position: 'absolute', zIndex: 1000 }} {...rest}>
      <S.Container style={containerStyle}>{children}</S.Container>
    </ModalBase>
  );
}
