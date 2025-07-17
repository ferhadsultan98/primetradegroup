// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6kbQ4kepbap8MWy-w8t-NfgK0lUOqY0",
  authDomain: "primetradegroup-ec9f6.firebaseapp.com",
  projectId: "primetradegroup-ec9f6",
  storageBucket: "primetradegroup-ec9f6.firebasestorage.app",
  messagingSenderId: "189908488460",
  appId: "1:189908488460:web:078583624807b00f207929",
  measurementId: "G-PKMV3LW3HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);