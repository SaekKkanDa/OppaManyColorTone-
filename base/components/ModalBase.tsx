import { CSSProperties, ReactElement, ReactNode, cloneElement } from 'react';
import styled from 'styled-components';

import { Hidden } from '@Base/components/Hidden';
import useCreatePortal from '@Base/hooks/useCreatePortal';
import { isNil } from '@Base/utils/check';
import { Backdrop } from '@Base/components/Backdrop';

export interface ModalBaseProps {
  backdropComponent?: ReactElement;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  hiddenStyle?: CSSProperties;
}

export function ModalBase({
  backdropComponent = <Backdrop />,
  children,
  isOpen,
  onClose,
  hiddenStyle,
}: ModalBaseProps) {
  const createPortal = useCreatePortal();

  if (isNil(createPortal)) return <></>;

  return createPortal(
    <Hidden isHidden={!isOpen} style={hiddenStyle}>
      <Container>
        {cloneElement(backdropComponent, { onClick: onClose })}
        {children}
      </Container>
    </Hidden>,
    document.body
  );
}

export const Container = styled.div`
  position: relative;
  height: 100%;
  max-height: 100dvh;
  overflow: hidden;
`;
