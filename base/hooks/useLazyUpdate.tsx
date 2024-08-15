import { useEffect, useRef, useState } from 'react';

export interface UseLazyUpateProps<T> {
  state: T;
  time?: number;
}

export default function useLazyUpdate<T>({
  state,
  time = 500,
}: UseLazyUpateProps<T>) {
  const timeRef = useRef(time);
  const [localState, setLocalState] = useState(state);

  useEffect(() => {
    const timoutId = setTimeout(() => setLocalState(state), timeRef.current);

    return () => {
      clearTimeout(timoutId);
    };
  }, [state]);

  return localState;
}
