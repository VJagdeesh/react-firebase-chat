import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBhocxrMoaegPqaT6n-rEVDLiO9WlpyMy0",
  authDomain: "reactchat-8aac9.firebaseapp.com",
  projectId: "reactchat-8aac9",
  storageBucket: "reactchat-8aac9.appspot.com",
  messagingSenderId: "513508638944",
  appId: "1:513508638944:web:843dd69b992c5d20b59085",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
