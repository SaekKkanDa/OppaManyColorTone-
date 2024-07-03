import { useCallback, useEffect, useRef } from 'react';

import { isNil } from '@Base/utils/check';

export interface UseTriggerProps {
  triggerFn?: () => boolean;
  onTrigger?: (reset: () => void) => void;
}

export function useTrigger({ triggerFn, onTrigger }: UseTriggerProps) {
  const isTrigredRef = useRef(false);

  const reset = useCallback(() => {
    isTrigredRef.current = false;
  }, []);

  const trigger = useCallback(() => {
    isTrigredRef.current = true;
  }, []);

  useEffect(() => {
    if (isNil(triggerFn)) return;

    if (!isTrigredRef.current && triggerFn()) {
      isTrigredRef.current = true;
      onTrigger?.(reset);
    }
  }, [onTrigger, reset, triggerFn]);

  return { isTriggered: isTrigredRef.current, reset, trigger };
}
