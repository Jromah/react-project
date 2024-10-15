// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLuWzgP9IjzOuODBRQmepmAiHsDk7xeSM",
  authDomain: "proyecto-coder-60030.firebaseapp.com",
  projectId: "proyecto-coder-60030",
  storageBucket: "proyecto-coder-60030.appspot.com",
  messagingSenderId: "576304162068",
  appId: "1:576304162068:web:58b3b1091f06806471ce01"
};

// Initialize Firebase (servicios)
const app = initializeApp(firebaseConfig);

// init data base
export const db = getFirestore(app)