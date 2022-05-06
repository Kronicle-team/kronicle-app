import { auth, db } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { setDoc, doc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";

const signIn = async (email, password, navigate) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredentials) => {
      const user = userCredentials.user;
      const checkValidUser = []
      const infoColRef = collection(db, "users");
      const q = query(infoColRef, where("address", "==", ""));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log("All users after filter " + doc.id)
        if (doc.id === auth.currentUser.uid) {
          checkValidUser.push(doc.id)
          console.log("An array that returns the user that match the filter " + checkValidUser)
        }
        if (checkValidUser[0] === auth.currentUser.uid) {
          navigate("/form")
        }
        else {
          console.log("Successfully sign in");
          navigate("/my-account")
        }
      });
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
          navigate("/form");
        }
      );
    }
  } catch (err) {
    alert(err.message);
  }
};

const pushData = async (avatar, fullName, phoneNum, address, aboutMe, navigate) => {
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    avatar: avatar,
    fullName: fullName,
    email: auth.currentUser.email,
    phoneNum: phoneNum,
    address: address,
    aboutMe: aboutMe,
    cart: {}
  }).then(() => {
    navigate("/");
  });
};


const updateData = async (fullName, phoneNum, address, aboutMe, navigate) => {
  await updateDoc(doc(db, "users", auth.currentUser.uid), {
    fullName: fullName,
    email: auth.currentUser.email,
    phoneNum: phoneNum,
    address: address,
    aboutMe: aboutMe,
    cart: {}
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
