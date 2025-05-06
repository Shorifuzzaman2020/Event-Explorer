// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk5pP--zVp2WqzuU6nlzSS8GrKT3hxRfk",
  authDomain: "event-discovery-project.firebaseapp.com",
  projectId: "event-discovery-project",
  storageBucket: "event-discovery-project.firebasestorage.app",
  messagingSenderId: "931228422736",
  appId: "1:931228422736:web:82f613e41b9485bd657755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);