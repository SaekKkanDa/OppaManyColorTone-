import {
  DocumentData,
  DocumentReference,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import OmctFirebaseApp from '@Utils/firebase';
import { getRandomId } from '@Base/utils/dataExtension';
import { parseError } from '@Utils/omctError';
import omctError, { EOmctErrorNo } from '@Constant/errorKeyValue';

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

      throw new Error(
        'firebase document에서 numberOfUsers를 찾을 수 없습니다.'
      );
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
    let uniqueId = getRandomId();
    let cnt = 0;
    for (cnt = 0; cnt < OmctDb.MAX_RETRY_CNT; cnt++) {
      console.log(uniqueId);
      try {
        await this.getPersonalImageUrl(uniqueId);
      } catch (e: unknown) {
        const err = parseError(e);
        if (err.code === EOmctErrorNo.FIREBASE_STORAGE_OBJECT_NOT_FOUND) {
          break;
        }
      }
      uniqueId = getRandomId();
    }

    const isFail = cnt === OmctDb.MAX_RETRY_CNT;

    if (isFail)
      throw {
        code: EOmctErrorNo.FIREBASE_STORAGE_UNIQUE_ID_NOT_FOUND,
        message: omctError.get(
          EOmctErrorNo.FIREBASE_STORAGE_UNIQUE_ID_NOT_FOUND
        ),
      } as OmctErrorResponse;

    const imgRef = ref(
      this.m_storage,
      `${this.m_personaImagePath}/${uniqueId}.png`
    );

    return uploadBytes(imgRef, file);
  }

  public async getPersonalImageUrl(name: string) {
    const path = `${this.m_personaImagePath}/${name}.png`;
    const imgRef = ref(this.m_storage, path);
    return getDownloadURL(imgRef);
  }
}

const omctDb = new OmctDb();
export default omctDb;
