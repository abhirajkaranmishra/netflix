// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfIE9mTwp97hzUDgij72Lb2C9q52BiT6c",
  authDomain: "netflixgpt-59396.firebaseapp.com",
  projectId: "netflixgpt-59396",
  storageBucket: "netflixgpt-59396.firebasestorage.app",
  messagingSenderId: "456066026526",
  appId: "1:456066026526:web:25fd91bf42ebd09537f20f",
  measurementId: "G-CLMWC6HC9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);