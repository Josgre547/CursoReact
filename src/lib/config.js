import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaRHAbBl2_dXyv1PUKDYM1ozTTHiz9x1c",
  authDomain: "books-c0001.firebaseapp.com",
  projectId: "books-c0001",
  storageBucket: "books-c0001.appspot.com",
  messagingSenderId: "357109428500",
  appId: "1:357109428500:web:58cc58b7db089fb6de5201"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);