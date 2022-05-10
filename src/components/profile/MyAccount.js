/***************************************************************************************
 *    Title: Get data with Cloud Firestore
 *    Author: Firebase
 *    Date: 4 May 2022
 *    Availability: https://firebase.google.com/docs/firestore/query-data/get-data (Accessed 4 April 2022)
 *
 ***************************************************************************************/

import Layout from "../../components/Layout";
import style from "./MyAccount.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const MyAccount = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    getDoc(doc(db, "users", auth?.currentUser?.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false);
        fetchData();
      } else {
        navigate("/");
      }
    });
    unsub();

    return () => unsub();
  }, []);

  if (isLoading) {
    return <div />;
  }

  return (
    <Layout className={style["myAccount-container"]} header footer>
      <h1>MY ACCOUNT</h1>
      <div className={style["myAccount-wrapper"]}>
        {/*left container*/}
        <div className={style["profile-left-container"]}>
          <div className={style["name"]}>{data.fullName}</div>
          <img
            src={data.avatar}
            className={style["profile-pic"]}
            alt={"Avatar"}
          />
          <button className={style["uploadAvatar-btn"]}>
            Upload your profile picture
          </button>
          <button
            className={style["updateProfile-btn"]}
            onClick={() => {
              fetchData();
            }}
          >
            Update profile
          </button>
        </div>

        {/*right container*/}
        <div className={style["profile-right-container"]}>
          <div className={style["info-header"]}>
            <h4>BASIC INFO</h4>
          </div>

          <form className={style["form"]}>
            <label>Full Name</label>
            <div className={style["input"]}>{data.fullName}</div>
            <label>Email</label>
            <div className={style["input"]}>{data.email}</div>
            <label>Phone Number</label>
            <div className={style["input"]}>{data.phoneNum}</div>
            <label>Address</label>
            <div className={style["input"]}>{data.address}</div>
            <label>About me</label>
            <div className={style["input"]}>{data.aboutMe}</div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
