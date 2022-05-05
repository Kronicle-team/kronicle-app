/***************************************************************************************
 *    Title: Get data with Cloud Firestore
 *    Author: Firebase
 *    Date: May 4, 2022
 *    Code version: <code version>
 *    Availability: https://firebase.google.com/docs/firestore/query-data/get-data
 *
 ***************************************************************************************/

import Layout from "../Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import CardDetails from "./CardDetails";

import style from "./ProductTemplate.module.css";
import common from "../../styles/common.module.css";
import { useNavigate, useParams } from "react-router-dom";
import CardShowCase from "../CardShowCase";
import { useEffect, useState } from "react";

import { auth, db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const ProductTemplate = ({ buy, bid }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const [sellerId, setSellerId] = useState();
  const documentID = "0UHcspYV2NOUc5yZTFkslMuYRD23";
  const [currentCart, setCurrentCart] = useState({});

  useEffect(() => {
    if (auth.currentUser) {
      let documentID = auth.currentUser.uid;
      onSnapshot(doc(db, "users", documentID), (docSnapshot) => {
        setCurrentCart(docSnapshot.data().cart);
      });
    }
  }, [currentCart]);

  useEffect(() => {
    const getData = () => {
      onSnapshot(doc(db, "listing", id), (doc) => {
        setData(doc.data());
        setSellerId(doc.data().seller_id);
      });
    };
    getData();
    return () => getData();
  }, [data]);

  if (data === undefined) {
    return (
      <Layout className={style["container"]} header footer>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout className={style["container"]} header footer>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={style["icon"]}
        onClick={() => navigate(-1)}
      />
      <CardDetails
        id={id}
        availability={data["availability"]}
        cart={currentCart}
        name={data["product_name"]}
        price={data["price"]}
        img={data["product_image"]}
        description={data["product_status"]}
        sellerId={sellerId}
        date={data["date_time"]}
        buy={buy}
        bid={bid}
      />

      {/*<section className="recommendation">*/}
      {/*  <h3>RECOMMENDATION</h3>*/}
      {/*  <div className={[common["flex"], style["card-showcase"]].join(" ")}>*/}

      {/*          <CardShowCase name={"Recommendation"} data={cards} link={""}/>*/}

      {/*  </div>*/}
      {/*</section>*/}
    </Layout>
  );
};

export default ProductTemplate;
