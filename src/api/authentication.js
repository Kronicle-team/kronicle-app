import { auth, db } from "../config/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {setDoc, doc, updateDoc, collection} from "firebase/firestore";

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

const pushData = async (avatar, fullName, phoneNum, address, aboutMe, navigate) => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
        avatar: avatar,
        fullName: fullName,
        email: auth.currentUser.email,
        phoneNum: phoneNum,
        address: address,
        aboutMe: aboutMe,
        cart: {},
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
        cart: {},
    }).then(() => {
        navigate("/");
    });
};


const logout = async () => {
    try {
        await auth.signOut();
        alert("Logout successfully!");
    } catch (err) {
        console.log("err:", err);
    }
};

export { signIn, signUp, pushData, logout };
