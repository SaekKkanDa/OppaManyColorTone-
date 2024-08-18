import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { Analytics } from 'firebase/analytics';
import { FirebaseStorage, getStorage } from 'firebase/storage';

export default class OmctFirebaseApp {
  static instance: InstanceType<typeof OmctFirebaseApp>;
  private m_config: FirebaseOptions;
  protected m_app: FirebaseApp;
  protected m_analytics: Nullable<Analytics>;
  protected m_db: Firestore;
  protected m_storage: FirebaseStorage;

  constructor() {
    if (OmctFirebaseApp.instance) return OmctFirebaseApp.instance;
    OmctFirebaseApp.instance = this;

    this.m_config = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    this.m_app = initializeApp(this.m_config);
    this.m_db = getFirestore(this.m_app);
    this.m_storage = getStorage(this.m_app);
  }
}
