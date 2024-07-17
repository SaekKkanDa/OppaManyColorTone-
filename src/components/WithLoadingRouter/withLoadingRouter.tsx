import LoadingIndicator from '@Components/LoadingIndicator';
import { useRouter } from 'next/router';

export const withLoadingRouter = (
  Component: () => JSX.Element,
  fallback = <LoadingIndicator />
) => {
  const RoutedComponent = () => {
    const router = useRouter();

    if (!router.isReady) return fallback;

    return <Component />;
  };

  return RoutedComponent;
};
