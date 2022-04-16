import { auth, db } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.alert("Sign In success");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signUp = async (
  uid,
  fname,
  lname,
  email,
  title,
  aboutMe,
  password,
  vrfPassword
) => {
  try {
    if (password === vrfPassword) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        fullName: fname + lname,
        fname: fname,
        lname: lname,
        email: email,
        title: title,
        aboutMe: aboutMe,
      });
      alert("Sign Up success");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export { signIn, signUp };
