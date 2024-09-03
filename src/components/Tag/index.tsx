import { useTranslation } from 'next-i18next';
import { Tag as TagType } from '@Data/resultColorData';
import * as S from './style';

interface TagContentProps {
  tags: TagType[];
  colorType: ColorType;
}

function Tag({ tags, colorType }: TagContentProps) {
  const { t } = useTranslation('common');

  return (
    <S.TagWrapper>
      {tags.map(({ backgroundColor, textColor }, index: number) => (
        <S.Tag
          key={index}
          backgroundColor={backgroundColor}
          textColor={textColor}
        >
          {t(`${colorType}.keyword.${index}`)}
        </S.Tag>
      ))}
    </S.TagWrapper>
  );
}

export default Tag;
