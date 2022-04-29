import Layout from "../../components/Layout";
import style from "./MyAccount.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { logout } from "../../api/authentication";

const MyAccount = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout className={style["myAccount-container"]} header footer>
      <h1>MY ACCOUNT</h1>
      <div className={style["myAccount-wrapper"]}>
        {/*left container*/}
        <div className={style["profile-left-container"]}>

            <div className={style["name"]}>{data.fullName}</div>
            <img
              src={"../../media/images/profile/gdragon.jpg"}
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
            }}>
              Update profile
            </button>

        </div>

        {/*right container*/}
        <div className={style["profile-right-container"]}>
          <div className={style["info-header"]}>
            <h4>BASIC INFO</h4>
            <div className={style["button-wrapper"]}>
              <button className={style["edit-button"]}>EDIT</button>
              <button className={style["save-button"]}>SAVE</button>
            </div>
          </div>

          <form className={style["form"]}>
            <label>First Name</label>
            <div className={style["input"]}>{data.fname}</div>
            <label>Last Name</label>
            <div className={style["input"]}>{data.lname}</div>
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
