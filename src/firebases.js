import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiezX1_NOoH1K1n20vBXcpXHgM-3xmt7I",
  authDomain: "chatappfirebase-812aa.firebaseapp.com",
  projectId: "chatappfirebase-812aa",
  storageBucket: "chatappfirebase-812aa.appspot.com",
  messagingSenderId: "340125771927",
  appId: "1:340125771927:web:bd5bafc6360192102de1d2",
  measurementId: "G-TJJK78QD64",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
