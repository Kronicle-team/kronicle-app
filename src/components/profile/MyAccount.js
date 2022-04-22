import Layout from "../../components/Layout";
import style from "./MyAccount.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const MyAccount = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    getDoc(doc(db, "users", "HxjkE2HdQMWmOYbVQCbPYtI817x2")).then((docSnap) => {
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
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <h1 style={{ textAlign: "center" }}>MY ACCOUNT</h1>
        <div className={style["profile-and-info"]}>
          <div className={style["profile-wrapper"]}>
            <img
              src={"../../media/images/profile/gdragon.jpg"}
              className={style["avatar"]}
              alt={"Avatar"}
            />
            <div className={style["name"]}>{data.fullName}</div>
            <div className={style["bio-p"]}>
              <p>100% new authenticated cards</p>
              <p>I live in Korea</p>
            </div>
            <button
              className={style["button"]}
              onClick={() => {
                fetchData();
              }}
            >
              Upload your avatar
            </button>
          </div>

          <div className={style["vertical-line"]} />

          <div className={style["info"]}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>BASIC INFO</h4>
              <div className={style["button-wrapper"]}>
                <button className={style["cancel-button"]}>CANCEL</button>
                <button className={style["save-button"]}>SAVE</button>
              </div>
            </div>
            <hr style={{ border: "1px solid #858585" }} />
            <form className={style["form"]}>
              <label>First Name</label>
              <div className={style["input"]}>{data.fname}</div>
              <label>Last Name</label>
              <div className={style["input"]}>{data.lname}</div>
              <label>Title</label>
              <div className={style["input"]}>{data.title}</div>
              <label>Email</label>
              <div className={style["input"]}>{data.email}</div>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <h4>ABOUT ME</h4>
            </div>
            <hr style={{ border: "1px solid #858585" }} />
            <div className={style["input"]}>{data.aboutMe}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/login">
                <button className={style["logout-button"]}>LOG OUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
