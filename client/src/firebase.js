// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gokhuldamestate.firebaseapp.com",
  projectId: "gokhuldamestate",
  storageBucket: "gokhuldamestate.appspot.com",
  messagingSenderId: "249144736977",
  appId: "1:249144736977:web:3e7c8920d00f5f4da059f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);