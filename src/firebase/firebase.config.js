// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQln6Gpac1UDe1hhwwmpat9t9wFz9_BoA",
  authDomain: "benz-automobile.firebaseapp.com",
  projectId: "benz-automobile",
  storageBucket: "benz-automobile.firebasestorage.app",
  messagingSenderId: "1095574801521",
  appId: "1:1095574801521:web:663cea40bfc27cfcfa9fd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);