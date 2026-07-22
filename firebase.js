import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvPk8zXNftVQ7vEU8jnjjQOB-xS9QieoA",
  authDomain: "visionai-3af16.firebaseapp.com",
  projectId: "visionai-3af16",
  storageBucket: "visionai-3af16.firebasestorage.app",
  messagingSenderId: "399023451432",
  appId: "1:399023451432:web:e46983bb738882990cb41d",
  measurementId: "G-D7PQKVWSWC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};
