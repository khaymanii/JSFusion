import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API_KEY } from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "buygun-ca397.firebaseapp.com",
  projectId: "buygun-ca397",
  storageBucket: "buygun-ca397.firebasestorage.app",
  messagingSenderId: "823014984355",
  appId: "1:823014984355:web:33d04a8cea61d3dd94cd16",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
