import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GGL_API_KEY,
  authDomain: process.env.GGL_AUTH_DOMAIN,
  projectId: process.env.GGL_PROJECT_ID,
  storageBucket: process.env.GGL_STORAGE_BUCKET,
  messagingSenderId: process.env.GGL_MESSAGING_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();
