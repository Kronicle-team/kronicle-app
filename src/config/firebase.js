// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGZzJlhVESFpwkUbZgj4PDVUFnakbJ24U",
  authDomain: "kronicle-app.firebaseapp.com",
  projectId: "kronicle-app",
  storageBucket: "kronicle-app.appspot.com",
  messagingSenderId: "951341387272",
  appId: "1:951341387272:web:7cdeaba3bd6b6649088bbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
