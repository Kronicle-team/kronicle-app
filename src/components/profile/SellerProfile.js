import Layout from "../../components/Layout";
import style from "./SellerProfile.module.css";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";

const SellerProfile = () => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    getDoc(doc(db, "users", "HR6QlZUlyacmra6d3inTTrbw8sf2")).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  const fetchProduct = async () => {
    getDocs(collection(db, "listing"))
      .then((querySnapshot) => {
        const newUserDataArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProducts(newUserDataArray);
      })
      .catch((err) => {
        console.error("Failed to retrieve data", err);
      });
  };

  useEffect(() => {
    fetchData().then(() => {});
  }, []);

  useEffect(() => {
    fetchProduct().then(() => console.log(products));
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
              Products
            </Link>
          </nav>
        </div>
        <div className={style["product-wrapper"]}>
          {products.map((product) => {
            if (product.seller_id === "HR6QlZUlyacmra6d3inTTrbw8sf2") {
              return (
                <div key={product.id} className={style.card}>
                  <div>
                    <Link to={"/"}>
                      <div className={style.imgWrapper}>
                        <img
                          src={product.product_image}
                          alt={"product"}
                          className={style.cardImg}
                        />
                      </div>
                    </Link>

                    <Link to={"/"}>
                      <h6 className={style.cardName}>{product.product_name}</h6>
                    </Link>
                    <div>{product.price + " VND"}</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SellerProfile;
