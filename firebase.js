// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh3cAMkuQYuLk3LkzYpzIXFna9lAObijk",
  authDomain: "clone-fb8a8.firebaseapp.com",
  projectId: "clone-fb8a8",
  storageBucket: "clone-fb8a8.appspot.com",
  messagingSenderId: "243070254055",
  appId: "1:243070254055:web:6c32dcd1abc8b18e5ddb42",
  measurementId: "G-XEQFCGMSVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);