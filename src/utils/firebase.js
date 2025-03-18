// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYYT8_759gw867YXmH2PvWZdbmh8fOX6E",
  authDomain: "netflix-gpt-d7c2c.firebaseapp.com",
  projectId: "netflix-gpt-d7c2c",
  storageBucket: "netflix-gpt-d7c2c.firebasestorage.app",
  messagingSenderId: "253409432419",
  appId: "1:253409432419:web:ffb9430480ea6db919f956",
  measurementId: "G-HL6BJLYSGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();