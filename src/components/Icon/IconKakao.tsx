import Image from 'next/image';
import { ComponentProps } from 'react';
import styled from 'styled-components';
import kakaoIcon from 'public/images/icon/kakaoIcon.png';

interface Props extends Omit<ComponentProps<typeof Image>, 'src' | 'alt'> {}
export const IconKakao = (props: Props) => {
  return <Img src={kakaoIcon} alt="카카오톡 공유 버튼" {...props} />;
};

//#region styled component
const Img = styled(Image)`
  max-width: 100%;
`;
//#endregion
