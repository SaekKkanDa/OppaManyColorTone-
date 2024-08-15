import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// next js client component should be rendered after window object is created
// https://stackoverflow.com/questions/75408148/referenceerror-document-is-not-defined-inside-next-js-client-component
export default function useCreatePortal() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return createPortal;
}
