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
const signUp = async (email, password, vrfPassword) => {
  try {
    if (password === vrfPassword) {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up success");
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const pushData = async (fname, lname, phoneNum, aboutMe) => {
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    fullName: fname + lname,
    fname: fname,
    lname: lname,
    email: auth.currentUser.email,
    phoneNum: phoneNum,
    aboutMe: aboutMe,
    cart: [],
    selling_product: "",
  });
};
export { signIn, signUp, pushData };
