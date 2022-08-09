// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // COLAR AQUI O CÓDIGO DE ACESSO AO FIREBASE
  apiKey: "AIzaSyBy0QmWwyihD7OLfTkoHroFvwmt-qOYUm4",
  authDomain: "banco01-b2585.firebaseapp.com",
  projectId: "banco01-b2585",
  storageBucket: "banco01-b2585.appspot.com",
  messagingSenderId: "918040578554",
  appId: "1:918040578554:web:87d055df1410e8f284fc43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);