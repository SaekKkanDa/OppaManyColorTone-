import LoadingIndicator from '@Components/LoadingIndicator';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const withLoadingRouter = (
  Component: () => JSX.Element,
  fallback = <LoadingIndicator />
) => {
  const RoutedComponent = () => {
    const router = useRouter();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!router.isReady || !hasMounted) return fallback;

    return <Component />;
  };

  return RoutedComponent;
};
