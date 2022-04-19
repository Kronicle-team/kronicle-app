import Layout from "../../components/Layout";
import style from "./SellerProfile.module.css";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";

const SellerProfile = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    getDoc(doc(db, "users", "HR6QlZUlyacmra6d3inTTrbw8sf2")).then((docSnap) => {
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
        <div className={style["profile-header"]}>
          <img
            src={"../../media/images/profile/gdragon.jpg"}
            className={style["avatar"]}
            alt={"Avatar"}
          />
          <div className={style["name"]}>{data.fullName}</div>
          <div className={style["info"]}>
            <p>{data.aboutMe}</p>
          </div>

          <div className={style["button-wrapper"]}>
            <button className={style["follow-button"]}>Follow</button>
            <button className={style["message-button"]}>Message</button>
          </div>
        </div>
        <div className={style["sell-container"]}>
          <nav className={style["nav"]}>
            <Link to="/" className={style["active-link"]}>
              Sell
            </Link>
            <Link to="/" className={style["option"]}>
              Bid
            </Link>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default SellerProfile;
