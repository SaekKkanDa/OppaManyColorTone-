import { ModalBase, ModalBaseProps } from '@Base/components/ModalBase';

import * as S from './style';
import useLazyUpdate from '@Base/hooks/useLazyUpdate';

export interface SnackbarProps
  extends Omit<ModalBaseProps, 'backdropComponent'> {}

export default function Snackbar({ isOpen, children, ...rest }: SnackbarProps) {
  const localIsOpen = useLazyUpdate({ state: isOpen, time: 500 });

  return (
    <ModalBase isOpen={isOpen || localIsOpen} {...rest}>
      <S.Container isIn={isOpen}>{children}</S.Container>
    </ModalBase>
  );
}
