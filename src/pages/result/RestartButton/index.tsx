import Link from 'next/link';
import { BorderedButton } from '@Styles/theme';
import ROUTE_PATH from '@Constant/routePath';
import { useTranslation } from 'next-i18next';

function RestartButton() {
  const { t } = useTranslation('common');

  return (
    <Link href={ROUTE_PATH.landing}>
      <BorderedButton style={{ width: '100%' }}>{t('restart')}</BorderedButton>
    </Link>
  );
}

export default RestartButton;
