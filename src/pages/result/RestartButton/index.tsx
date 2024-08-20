import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import { Button } from '@Styles/theme';
import ROUTE_PATH from '@Constant/routePath';

// HJ TODO: props를 전달 받아야 할까?
function RestartButton() {
  const router = useRouter();

  const handleGoToLanding = () => {
    router.push(ROUTE_PATH.landing);
  };

  return (
    <Button onClick={handleGoToLanding}>
      <FormattedMessage id="restart" />
    </Button>
  );
}

export default RestartButton;
