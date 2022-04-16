import Layout from "../../components/Layout";
import style from "./SellerProfile.module.css";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const SellerProfile = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    getDoc(doc(db, "users", "5FrihL0CgOch4KffrjTvlKVKNOO2")).then((docSnap) => {
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
            <p>100% new authenticated cards</p>
            <p>I live in Korea</p>
          </div>

          <div className={style["button-wrapper"]}>
            <button className={style["follow-button"]}>Follow</button>
            <button className={style["message-button"]}>Message</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellerProfile;
