import { auth, db } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.alert("Sign In success");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signUp = async (email, name, password, vrfPassword) => {
  try {
    if (password === vrfPassword) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        uid: auth.currentUser.uid,
        name,
        email,
      });
      alert("Sign Up success");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export { signIn, signUp };
