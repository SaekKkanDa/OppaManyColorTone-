import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

interface Props extends Omit<FontAwesomeIconProps, 'icon' | 'color'> {}
export const IconShare = (props: Props) => {
  return <FontAwesomeIcon icon={faShare} color={'white'} {...props} />;
};
