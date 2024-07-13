import { useCallback, useEffect, useState } from 'react';

import { isNil } from '@Base/utils/check';

export interface UseTriggerProps {
  triggerFn?: () => boolean;
  onTrigger?: (reset: () => void) => void;
}

export function useTrigger({ triggerFn, onTrigger }: UseTriggerProps) {
  const [isTriggered, setIsTriggered] = useState(false);

  const reset = useCallback(() => {
    setIsTriggered(false);
  }, []);

  const trigger = useCallback(() => {
    setIsTriggered(true);
  }, []);

  useEffect(() => {
    if (isNil(triggerFn)) return;

    if (triggerFn()) {
      setIsTriggered(true);
      onTrigger?.(reset);
    }
  }, [onTrigger, reset, triggerFn]);

  return { isTriggered, reset, trigger };
}
