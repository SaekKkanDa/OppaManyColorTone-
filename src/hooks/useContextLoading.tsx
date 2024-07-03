import { LoadingContext } from '@Components/Contexts/LoadingContext';
import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { OmctError } from '@Utils/omctError';
import { useContext } from 'react';

export default function useContextLoading() {
  const context = useContext(LoadingContext);

  if (context === null) {
    throw new OmctError(EOmctErrorNo.COMMON_NOT_INITIALIZED_CONTEXT);
  }

  return context;
}
