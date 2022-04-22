import { auth, db } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const signIn = async (email, password, navigate) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("SignIn success");
      navigate("/form");
    })
    .catch((error) => {
      alert(error.message);
    });
};

const signUp = async (email, password, vrfPassword, navigate) => {
  try {
    if (password === vrfPassword) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          console.log("Create user: ", email);
          window.alert("Sign up successful!");
          navigate("/login");
        }
      );
    }
  } catch (err) {
    alert(err.message);
  }
};

const pushData = async (fname, lname, phoneNum, address, aboutMe, navigate) => {
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    fullName: fname + " " + lname,
    fname: fname,
    lname: lname,
    email: auth.currentUser.email,
    phoneNum: phoneNum,
    address: address,
    aboutMe: aboutMe,
    cart: [],
    selling_product: "",
  }).then(() => {
    navigate("/");
  });
};

const logout = async () => {
  try {
    await auth.signOut();
    console.log("Sign out successfully!");
  } catch (err) {
    console.log("err:", err);
  }
};

export { signIn, signUp, pushData, logout };
