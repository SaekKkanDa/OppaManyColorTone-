import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { OmctError } from '@Utils/omctError';

export async function updateClipboard(newClip: string) {
  return navigator.clipboard.writeText(newClip);
}

export async function copyUrl(url: string) {
  try {
    await updateClipboard(url);
    return 'alertSuccessCopy';
  } catch (error) {
    console.error(error);
    return 'alertFailCopy';
    throw new OmctError(EOmctErrorNo.SHARE_CLIPBOARD_COPY_ERROR);
  }
}
