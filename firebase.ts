// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqHoJj4c0D2KY9FajfUNjhiInpDPugzkk",
  authDomain: "eldoradosemarangcell0.firebaseapp.com",
  projectId: "eldoradosemarangcell0",
  storageBucket: "eldoradosemarangcell0.firebasestorage.app",
  messagingSenderId: "457960255015",
  appId: "1:457960255015:web:657cdc1ae8e78e8e95e802",
  measurementId: "G-S47VGFJCKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);