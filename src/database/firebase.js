import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC2KMxwwWDxj8JyrVUa5e6a9-m7bbtREBM",
  authDomain: "quizpath-ec4f8.firebaseapp.com",
  projectId: "quizpath-ec4f8",
  storageBucket: "quizpath-ec4f8.appspot.com",
  messagingSenderId: "405008828092",
  appId: "1:405008828092:web:6ba014bd90d2eccd5772b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);