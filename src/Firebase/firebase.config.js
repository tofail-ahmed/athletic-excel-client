// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbqdGAlYcjihQDiviSMRB2MSRi90iaVZc",
  authDomain: "athletic-excel.firebaseapp.com",
  projectId: "athletic-excel",
  storageBucket: "athletic-excel.appspot.com",
  messagingSenderId: "264326068681",
  appId: "1:264326068681:web:9951b895c04e3ab4ba1018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;