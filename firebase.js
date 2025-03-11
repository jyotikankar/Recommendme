// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tumhara Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrkmMWUXcrQH2AO3xHAnL6TEGzi2sw5lY",
  authDomain: "my-hospital-app-7f457.firebaseapp.com",
  projectId: "my-hospital-app-7f457",
  storageBucket: "my-hospital-app-7f457.firebasestorage.app",
  messagingSenderId: "1:360019806923:web:277c3fd7fb6fa72ce7a94e",
  appId: "G-82QJSWGVV3"
};

// Firebase App Initialize Karo
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export { auth };
