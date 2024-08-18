import { useCallback } from 'react';
import { RecoilState, useRecoilState } from 'recoil';

interface UseModalRecoilProps {
  state: RecoilState<boolean>;
}

export default function useModalRecoil({ state }: UseModalRecoilProps) {
  const [isOpen, setIsOpen] = useRecoilState(state);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return { isOpen, open, close };
}
