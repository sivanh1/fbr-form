// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3QOHzy_pRG6yK0vTP7IhJjOXJGnZd_Fs",
    authDomain: "form-99e4f.firebaseapp.com",
    projectId: "form-99e4f",
    storageBucket: "form-99e4f.firebasestorage.app",
    messagingSenderId: "369879142751",
    appId: "1:369879142751:web:b0c0480ec53a92d4c366ea"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
