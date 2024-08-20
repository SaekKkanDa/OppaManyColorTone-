import { LegacyRef, useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export interface AdSenseProps {
  'data-ad-slot': string;
}

export function AdSense(props: AdSenseProps) {
  const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (adRef.current) {
      try {
        // 이미 광고가 로드되지 않은 경우에만 광고 로드를 시도
        if (adRef.current.innerHTML.trim() === '') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('AdSense error', e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef as LegacyRef<HTMLModElement>} // ref를 ins 요소에 할당
      className="adsbygoogle"
      style={{
        display: 'block',
        width: '100%', // 부모 요소의 너비를 따르도록 설정
        height: '100px', // 기본 높이를 설정하여 0이 되지 않도록 방지
        minHeight: '100px', // 최소 높이를 설정
      }}
      data-ad-client="ca-pub-9551977219354865"
      data-ad-format="auto"
      data-full-width-responsive="true"
      {...props}
    />
  );
}
