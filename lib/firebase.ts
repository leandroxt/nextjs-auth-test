import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBndodYgzJkpxG064qCHJ0IkoLGyN__6l8",
  authDomain: "numix-360702.firebaseapp.com",
  projectId: "numix-360702",
  storageBucket: "numix-360702.appspot.com",
  messagingSenderId: "580678474585",
  appId: "1:580678474585:web:a48e5ddc0cc44fa8d60a48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification
} from "firebase/auth";
