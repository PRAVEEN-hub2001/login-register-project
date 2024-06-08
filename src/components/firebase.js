// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZFFCcECRMOBYhCwJTJnaIXDFD7WheWgo",
  authDomain: "login-and-register-proje-35f5d.firebaseapp.com",
  projectId: "login-and-register-proje-35f5d",
  storageBucket: "login-and-register-proje-35f5d.appspot.com",
  messagingSenderId: "106994824401",
  appId: "1:106994824401:web:c234225fab8716017101f0",
  measurementId: "G-JQTF9D8JQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;