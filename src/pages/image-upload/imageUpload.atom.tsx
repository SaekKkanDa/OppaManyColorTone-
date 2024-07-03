import { atom } from 'recoil';

const KEY_PREFIX = 'shareModal';

export const imageFileState = atom<File | null>({
  key: `${KEY_PREFIX}_imageFile`,
  default: null,
});

export const shareModalState = atom({
  key: `${KEY_PREFIX}_shareModal`,
  default: false,
});

export const shareInfoModalState = atom({
  key: `${KEY_PREFIX}_shareInfoModal`,
  default: false,
});
