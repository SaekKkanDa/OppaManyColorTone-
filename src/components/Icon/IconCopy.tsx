import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface Props extends Omit<FontAwesomeIconProps, 'icon' | 'color'> {}
export const IconCopy = (props: Props) => {
  return <FontAwesomeIcon icon={faLink} color={'white'} {...props} />;
};
