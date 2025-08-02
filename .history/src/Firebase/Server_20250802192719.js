import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime Database
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAe6kbQ4kepbap8MWy-w8t-NfgK0lUOqY0",
  authDomain: "primetradegroup-ec9f6.firebaseapp.com",
  projectId: "primetradegroup-ec9f6",
  storageBucket: "primetradegroup-ec9f6.firebasestorage.app",
  messagingSenderId: "189908488460",
  appId: "1:189908488460:web:078583624807b00f207929",
  measurementId: "G-PKMV3LW3HQ",
  databaseURL: "https://primetradegroup-ec9f6-default-rtdb.firebaseio.com" // Realtime Database URL
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Realtime Database
const auth = getAuth(app); // Firebase Authentication

export { db, auth }; // Export both db and auth