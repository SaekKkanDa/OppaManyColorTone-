import { md5, Message } from 'js-md5';

export function encryptionMd5(message: Message) {
  return md5.hex(message);
}
