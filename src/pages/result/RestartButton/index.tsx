import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import ROUTE_PATH from '@Constant/routePath';
import { Button } from '@Styles/theme';

function RestartButton() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const handleGoToLanding = () => {
    router.push(ROUTE_PATH.landing);
  };

  return <Button onClick={handleGoToLanding}>{t('restart')}</Button>;
}

export default RestartButton;
