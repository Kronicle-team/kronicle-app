/***************************************************************************************
 *    Title: Get data with Cloud Firestore
 *    Author: Firebase
 *    Date: 4 May 2022
 *    Availability: https://firebase.google.com/docs/firestore/query-data/get-data (Accessed 4 April 2022)
 *
 ***************************************************************************************/

import Layout from "../../components/Layout";
import style from "./SellerProfile.module.css";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link, useParams } from "react-router-dom";
import { capitalizeAllWords } from "../../helper/formatData";
import {
  faEnvelope,
  faHouse,
  faIdCard,
  faPhone,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SellerProfile = () => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    getDoc(doc(db, "users", id)).then((docSnap) => {
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
    fetchProduct().then(() => {});
  }, []);

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["profile-header"]}>
          {data.avatar ? (
            <img src={data.avatar} className={style["avatar"]} alt={"Avatar"} />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} className={style["avatar"]} />
          )}

          <div className={style["name"]}>{data.fullName}</div>
          <div className={style["info-container"]}>
            <div className={style["info"]}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />{" "}
              {data.email}
            </div>
            <div className={style["info"]}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: 10 }} />{" "}
              {data.phoneNum}
            </div>
            <div className={style["info"]}>
              <FontAwesomeIcon icon={faHouse} style={{ marginRight: 10 }} />
              {data.address}
            </div>
            <div className={style["info"]}>
              <FontAwesomeIcon icon={faIdCard} style={{ marginRight: 10 }} />
              {data.aboutMe}
            </div>
          </div>
        </div>

        <div className={style["sell-container"]}>
          <nav className={style["nav"]}>
            <h2 className={style["heading"]}>Products</h2>
          </nav>
        </div>
        <div className={style["product-wrapper"]}>
          {products.map((product) => {
            if (product.seller_id === id) {
              let path;
              if (product.product_pricing === "bid now") {
                path = `/cards/bid/${product.id}`;
              } else {
                path = `/cards/buy-now/${product.id}`;
              }
              return (
                <div key={product.id} className={style.card}>
                  <div>
                    <Link to={path}>
                      <div className={style.imgWrapper}>
                        <img
                          src={product.product_image}
                          alt={"product"}
                          className={style.cardImg}
                        />
                      </div>
                    </Link>

                    <Link to={path}>
                      <h6 className={style.cardName}>
                        {capitalizeAllWords(product.product_name)}
                      </h6>
                    </Link>
                    <div>{product.price.toLocaleString() + " VND"}</div>
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
