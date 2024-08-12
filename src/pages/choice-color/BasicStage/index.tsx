import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import shuffle from '@Utils/shuffle';
import type { ChoiceColorDataType } from '@Data/choiceColorData';
import Guidance from '../Guidance';

import * as S from './style';
import ChoiceColor from '../index.page';

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
  return (
    <>
      <S.StatusBox>
        <S.StatusBar width={`${(stageNum + 1) * (100 / MAX_STAGE_NUM)}%`} />
      </S.StatusBox>
      <S.StatusContent>
        {stageNum + 1}/{MAX_STAGE_NUM} <FormattedMessage id="statusContent" />
      </S.StatusContent>

      <Guidance />

      <S.ColorBox>
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
