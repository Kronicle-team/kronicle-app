import Layout from "../components/Layout";
import style from "./HomePage.module.css";
import { useEffect, useState } from "react";
import React from "react";
import CardShowCase from "../components/CardShowCase";
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase"

const HomePage = () => {
  const [latestBuyNow, setLatestBuyNow] = useState([]);
  const [latestBid, setLatestBid] = useState([]);

  useEffect(() => {
    const getBuyNowCards = () => {
      let q = query(collection(db, "listing"),
          where("product_pricing", "==", "buy now"),
          where("availability", "!=", "sold"),
          orderBy("availability"), orderBy("date_time", "desc"), limit(6));

      onSnapshot(q, (querySnapshot) => {
        const cards = [];
        querySnapshot.forEach((doc) => {

          cards.push({...doc.data(), id: doc.id});
        });
        setLatestBuyNow(cards);
      });
    }

    const getBidCards = () => {
      const q2 = query(collection(db, "listing"),
          where("product_pricing", "==", "bid now"),
          where("availability", "!=", "sold"),
          orderBy("availability"), orderBy("date_time", "desc"), limit(6));
      onSnapshot(q2, (querySnapshot) => {
        const bidCards = [];
        querySnapshot.forEach((doc) => {
          bidCards.push({...doc.data(), id: doc.id});
        });
        setLatestBid(bidCards);
      });
    }

    getBuyNowCards()
    getBidCards()

    return () => {
      getBuyNowCards()
      getBidCards()
    }
  }, []);

  if (latestBuyNow === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout header footer>
      <div className={style.banner}>
        <div className={style.bannerTextWrapper}>
          <img
            src={"../media/images/svt-banner.jpg"}
            alt={"banner"}
            className={style.bannerBackground}
          />

          <h1 className={style.bannerText}>
            The First Official Website For Trading K-Pop Photocards In Vietnam
          </h1>
        </div>
      </div>
      <div className={style.qrBannerContainer}>
        <div className={style.qrBannerText}>
          TRY OUR CARD DETECTION WEB APP!
        </div>
        <div className={style.qrBanner}>
          <img src={"../media/images/qr.png"} alt={"qr"} className={style.qr} />
        </div>
      </div>

<div className={style.latestBidsContainer}>
                <CardShowCase name={"Latest Bids"} data={latestBid} link={"/cards/bid"} useText={true} bid/>
            </div>

        <div className={style.latestProductsContainer}>
              <CardShowCase name={"Latest Products"} data={latestBuyNow} link={"/cards/buy-now"} useText={true} />
      </div>
    </Layout>
  );
};

export default HomePage;
