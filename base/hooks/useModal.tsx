import { useCallback, useState } from 'react';

import { isNotNil } from '@Base/utils/check';

export interface UseModalProps {
  defaultMessage?: string;
  defaultIsOpen?: boolean;
}

export function useModal({
  defaultIsOpen = false,
  defaultMessage = '',
}: UseModalProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const [message, setMessage] = useState(defaultMessage);

  const open = useCallback((message?: string) => {
    if (isNotNil(message)) setMessage(message);

    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, message, open, close };
}
