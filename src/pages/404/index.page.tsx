import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import emoji from 'public/images/emoji/sad-emoji-3d.png';
import * as S from './style';

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <S.FlexContainer>
      <S.Message>{t('notFoundMsg')}</S.Message>
      <S.Emoji
        src={emoji.src}
        alt="sad emoji"
        width={150}
        height={150}
        priority
      />

      <Link href="/">
        <S.HomeButton>{t('restart')}</S.HomeButton>
      </Link>
    </S.FlexContainer>
  );
};

export default NotFound;
