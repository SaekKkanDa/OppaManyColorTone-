import {
  DocumentData,
  DocumentReference,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import OmctFirebaseApp from '@Utils/firebase';
import { OmctError, parseError } from '@Utils/omctError';
import { EOmctErrorNo } from '@Constant/errorKeyValue';
import { encryptionMd5 } from '@Utils/encryption';
import { OmctConsole } from '@Utils/console';

const console = new OmctConsole('OmctDB');

class OmctDb extends OmctFirebaseApp {
  static #instance: InstanceType<typeof OmctDb>;
  static readonly MAX_RETRY_CNT = 3;

  private m_docRef: DocumentReference<DocumentData>;
  private m_personaImagePath: string;

  constructor() {
    super();
    if (OmctDb.#instance) return OmctDb.#instance;
    OmctDb.#instance = this;

    this.m_docRef = doc(this.m_db, 'numberOfUsers', 'numberOfUsers');
    this.m_personaImagePath = 'personal-images';
  }

  public async getNumberOfUsers() {
    const docSnap = await getDoc(this.m_docRef);

    try {
      if (docSnap.exists()) {
        return docSnap.data().numberOfUsers;
      }

      throw new OmctError(EOmctErrorNo.FIREBASE_STORAGE_OBJECT_NOT_FOUND);
    } catch (error) {
      console.error(error);

      const NUMBER_IN_CASE_ERROR = 404;
      return NUMBER_IN_CASE_ERROR;
    }
  }

  public async addNumberOfUsers() {
    const addedNumberOfUsers = (await this.getNumberOfUsers()) + 1;
    setDoc(this.m_docRef, { numberOfUsers: addedNumberOfUsers });
  }

  public async sendPersonalImage(file: Blob | Uint8Array | ArrayBuffer) {
    const buffer = file instanceof Blob ? await file.arrayBuffer() : file;
    const fileName = encryptionMd5(buffer);

    try {
      const ref = this.getStorageRef(fileName);
      // image have already been uploaded
      return ref;
    } catch (e: unknown) {
      const err = parseError(e);
      if (err.code !== EOmctErrorNo.FIREBASE_STORAGE_OBJECT_NOT_FOUND) {
        console.error(err);
        throw new OmctError(EOmctErrorNo.COMMON_UNHANDLED_ERROR);
      }
    }

    const imgRef = ref(
      this.m_storage,
      `${this.m_personaImagePath}/${fileName}.png`
    );

    const storageRef = (await uploadBytes(imgRef, file)).ref;
    return storageRef;
  }

  private getStorageRef(url?: string) {
    return ref(this.m_storage, url);
  }

  public async getPersonalImageUrl(name: string) {
    const path = `${this.m_personaImagePath}/${name}.png`;
    const imgRef = this.getStorageRef(path);
    return getDownloadURL(imgRef);
  }
}

const omctDb = new OmctDb();
export default omctDb;
