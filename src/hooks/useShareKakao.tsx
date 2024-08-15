import useKakaoShare from '@Hooks/useKakaoShare';
import { useCallback } from 'react';

interface Props {
  onSuccess?: () => void;
  onError?: () => void;
}
export const useShareKakao = ({ onSuccess, onError }: Props) => {
  const { isLoading, kakaoShare } = useKakaoShare();

  const share = useCallback(() => {
    // HJ TODO: 확인 필요
    if (isLoading) {
      onError?.();
    } else {
      kakaoShare();
      onSuccess?.();
    }
  }, [isLoading, kakaoShare, onError, onSuccess]);

  return share;
};
