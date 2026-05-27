// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeaLtDSvnJ3TQyisqBUgzxo6KRVXUwnz0",
  authDomain: "notex-6fa1e.firebaseapp.com",
  projectId: "notex-6fa1e",
  storageBucket: "notex-6fa1e.firebasestorage.app",
  messagingSenderId: "650296593505",
  appId: "1:650296593505:web:7ad3524bcea62a53676e20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
