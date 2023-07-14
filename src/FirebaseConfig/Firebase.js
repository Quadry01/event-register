import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_4dabA7styj2Yz-fLybMcnZUgapEJ0DQ",
  authDomain: "event-register-97a56.firebaseapp.com",
  projectId: "event-register-97a56",
  storageBucket: "event-register-97a56.appspot.com",
  messagingSenderId: "248657181402",
  appId: "1:248657181402:web:393e9a5f23066d7f7183e3",
  measurementId: "G-4J98H34EM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
