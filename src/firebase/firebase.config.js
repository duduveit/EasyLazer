// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmz8qpMB7k0hJaY9dkMjawOA0BsO8fjfg",
  authDomain: "easylazer-3e79f.firebaseapp.com",
  projectId: "easylazer-3e79f",
  storageBucket: "easylazer-3e79f.appspot.com",
  messagingSenderId: "369962294452",
  appId: "1:369962294452:web:8049ebbcebad104e454be1"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);