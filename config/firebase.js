// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ-HmEHPgEI_WQp-HSEGicpBshUczO_1E",
  authDomain: "test-app-88a42.firebaseapp.com",
  projectId: "test-app-88a42",
  storageBucket: "test-app-88a42.appspot.com",
  messagingSenderId: "845365651723",
  appId: "1:845365651723:web:77b592e8b209340349da0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
