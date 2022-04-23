// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

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
let app;
app = firebase.initializeApp(firebaseConfig);

console.log(firebase.app().name);

const auth = getAuth(app);
const db = getFirestore(app);

const storage = firebase.storage();

export { auth, db, storage };
