import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-app-cfde3.firebaseapp.com",
  projectId: "crud-app-cfde3",
  storageBucket: "crud-app-cfde3.appspot.com",
  messagingSenderId: "842925669042",
  appId: "1:842925669042:web:9bbca3b7342d517bd7e7ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)