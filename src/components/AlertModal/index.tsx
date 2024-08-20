import { useTranslation } from 'next-i18next';
import { ModalBackground, Button } from '@Styles/theme';
import * as S from './style';
import { ModalBase } from '@Base/components/ModalBase';

interface AlertModalProps {
  isOpen: boolean;
  title?: string;
  textSize?: 'sm' | 'md';
  handleClose: () => void;
}

const AlertModal = ({
  isOpen,
  title,
  children,
  textSize = 'md',
  handleClose,
}: AlertModalProps & React.PropsWithChildren) => {
  const { t } = useTranslation('common');

  return (
    <ModalBase
      isOpen={isOpen}
      backdropComponent={<ModalBackground />}
      onClose={handleClose}
    >
      <S.Modal>
        {title && <S.Title>{t(`${title}`)}</S.Title>}
        <S.Message $textSize={textSize}>{children}</S.Message>

        <Button onClick={handleClose}>{t('confirm')}</Button>
      </S.Modal>
    </ModalBase>
  );
};

export default AlertModal;
