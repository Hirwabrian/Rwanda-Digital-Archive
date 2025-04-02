import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBWY_1inuGUIp1alyU-zeODHGjlMw2xmTk",
  authDomain: "rwanda-digital-archive.firebaseapp.com",
  projectId: "rwanda-digital-archive",
  storageBucket: "rwanda-digital-archive.firebasestorage.app",
  messagingSenderId: "94125936437",
  appId: "1:94125936437:web:8a87630c3a02aecb1dc67c",
  measurementId: "G-BLNCXJWP0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
