import { useEffect, useState } from 'react';

// 진행률에 따라 count 속도 조절
const easeOutExpo = (rate: number) => {
  return rate === 1 ? 1 : 1 - Math.pow(2, -10 * rate);
};

// 점차 느려지는 count up 함수
export const useCountUp = (
  targetNumber: number,
  duration: number,
  isInView: boolean
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);

    let currentNumber = 0;
    const counter = setInterval(() => {
      const progressRate = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round(targetNumber * progressRate));

      // 진행 완료 시 interval 해제
      if (progressRate === 1) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => {
      clearInterval(counter);
    };
  }, [duration, isInView, targetNumber]);

  return count;
};
