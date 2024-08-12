import { useState, useMemo, useEffect } from 'react';
import useSelectBonusColorTypes from '@Hooks/useSelectBonusColorTypes';
import choiceColorData, { ChoiceColorDataType } from '@Data/choiceColorData';
import BasicStage from './BasicStage';
import BonusStage from './BonusStage';
import * as S from './style';
import { AdSense } from '@Components/AdSense';
import useCropImg from '@Hooks/useCropImg';
import shuffle from '@Utils/shuffle';

function ChoiceColor() {
  const [selectedTypes, setSelectedTypes] = useState<ColorType[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [stageNum, setStageNum] = useState(0);

  const selectedTypesLength = selectedTypes.length;
  const MAX_STAGE_NUM = choiceColorData.length;

  const basicColorOptions = useMemo(() => {
    if (stageNum < MAX_STAGE_NUM) {
      return shuffle(choiceColorData[stageNum]);
    }
    return choiceColorData[stageNum];
  }, [stageNum]);

  const bonusColorTypes = useSelectBonusColorTypes(
    selectedTypes,
    MAX_STAGE_NUM
  );

  const userImg = useCropImg();

  const onBasicClick = (selectedChip: ChoiceColorDataType) => {
    if (!(stageNum < MAX_STAGE_NUM)) return;

    setSelectedTypes((prev) => [...prev, selectedChip.type]);
    setSelectedColor(selectedChip.color);
  };

  useEffect(() => {
    if (selectedColor) {
      const timeout = setTimeout(() => {
        setStageNum((prev) => prev + 1);
        setSelectedColor('');
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [stageNum, selectedColor]);

  return (
    <S.Wrapper>
      {selectedTypesLength < MAX_STAGE_NUM ? (
        <BasicStage
          userImg={userImg}
          stageNum={stageNum}
          MAX_STAGE_NUM={MAX_STAGE_NUM}
          basicColorOptions={basicColorOptions}
          selectedColor={selectedColor}
          onBasicClick={onBasicClick}
        />
      ) : (
        <BonusStage userImg={userImg} bonusColorTypes={bonusColorTypes} />
      )}
      <AdSense data-ad-slot={'2551404503'} />
    </S.Wrapper>
  );
}

export default ChoiceColor;
