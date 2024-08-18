import LoadingIndicator from '@Components/LoadingIndicator';
import Modal from '@Components/Modal';
import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface LoadingContextType {
  load: () => void;
  unLoad: () => void;
}

export const LoadingContext = createContext<LoadingContextType | null>(null);

interface LoadingProviderProps {
  children: ReactNode;
}
export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const load = useCallback(() => {
    setIsLoading(true);
  }, []);

  const unLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      load,
      unLoad,
    }),
    [load, unLoad]
  );

  return (
    <LoadingContext.Provider value={contextValue}>
      <Modal
        isOpen={isLoading}
        containerStyle={{ background: 'transparent', boxShadow: 'unset' }}
      >
        <LoadingIndicator />
      </Modal>
      {children}
    </LoadingContext.Provider>
  );
}
