import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface Props extends Omit<FontAwesomeIconProps, 'icon' | 'color'> {}
export const IconDownload = (props: Props) => {
  return <FontAwesomeIcon icon={faDownload} color={'white'} {...props} />;
};
