import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import type { ChoiceColorDataType } from '@Data/choiceColorData';
import Guidance from '../Guidance';

import * as S from './style';
import { useRecoilState } from 'recoil';
import { onboardingElState } from '@Pages/choice-color/choiceColor.atom';
import { useEffect, useRef } from 'react';
import { isNotNil } from '@Base/utils/check';

interface BasicStageProps {
  userImg: string;
  stageNum: number;
  MAX_STAGE_NUM: number;
  basicColorOptions: ChoiceColorDataType[];
  selectedColor: string;
  onBasicClick: (selectedChip: ChoiceColorDataType) => void;
}

function BasicStage({
  userImg,
  stageNum,
  MAX_STAGE_NUM,
  basicColorOptions,
  selectedColor,
  onBasicClick,
}: BasicStageProps) {
  // HJ TODO: 더 좋은 방법이 있을 것 같음...
  const colorBoxElRef = useRef<HTMLDivElement>(null);
  const [, setOnboardingEl] = useRecoilState(onboardingElState);

  useEffect(() => {
    const colorBoxEl = colorBoxElRef.current;
    if (isNotNil(colorBoxEl)) setOnboardingEl(colorBoxEl);
  }, [setOnboardingEl]);

  return (
    <>
      <S.StatusBox>
        <S.StatusBar width={`${(stageNum + 1) * (100 / MAX_STAGE_NUM)}%`} />
      </S.StatusBox>
      <S.StatusContent>
        {stageNum + 1}/{MAX_STAGE_NUM} <FormattedMessage id="statusContent" />
      </S.StatusContent>

      <Guidance />

      <S.ColorBox ref={colorBoxElRef}>
        {basicColorOptions.map((item) => (
          <S.Color
            key={item.id}
            color={item.color}
            isSelected={item.color === selectedColor}
            onClick={() => onBasicClick(item)}
          >
            <Image src={userImg} alt="사용자 이미지" width={100} height={100} />
          </S.Color>
        ))}
      </S.ColorBox>
    </>
  );
}

export default BasicStage;
