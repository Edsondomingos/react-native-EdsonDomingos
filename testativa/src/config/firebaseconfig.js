// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs7UfeiXZkKtYU8x6YE4bZbwLnhOP8Fdg",
  authDomain: "teste-2a807.firebaseapp.com",
  databaseURL: "https://teste-2a807-default-rtdb.firebaseio.com",
  projectId: "teste-2a807",
  storageBucket: "teste-2a807.appspot.com",
  messagingSenderId: "863468657844",
  appId: "1:863468657844:web:2610df93590ae32899cbe1",
  measurementId: "G-PRJ5P1N0QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);