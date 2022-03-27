import Layout from "../components/Layout";
import style from "../styles/HomePage.module.css";
import { useState } from "react";
import React from "react";
import CardShowCase from "../components/CardShowCase";


const HomePage = () => {
  const [latestBidsArray, setLatestBidsArray] = useState([
        {
              id: 1,
              name: "Product Card",
              img: "",
              price: "VND"
        },
        {
              id: 2,
              name: "Product Card",
              img: "",
              price: "VND"
        },
        {
              id: 3,
              name: "Product Card",
              img: "",
              price: "VND"
        },
        {
              id: 4,
              name: "Product Card",
              img: "",
              price: "VND"
        },
        // {
        //       id: 5,
        //       name: "Product Card",
        //       img: "",
        //       price: "VND"
        // },
        // {
        //       id: 6,
        //       name: "Product Card",
        //       img: "",
        //       price: "VND"
        // },
        // {
        //       id: 7,
        //       name: "Product Card",
        //       img: "",
        //       price: "VND"
        // },
        // {
        //       id: 8,
        //       name: "Product Card",
        //       img: "",
        //       price: "VND"
        // },
  ])

  const [latestProductsArray, setLatestProductsArray] = useState(latestBidsArray)
  return (
      <Layout header footer>
            <div className={style.banner}>
                  <img src={"../media/images/banner.png"} alt={"banner"} className={style.bannerBackground}/>
                  <h1 className={style.bannerText}>The First Official Website For Trading K-Pop Photocards In Vietnam</h1>
            </div>
            <div className={style.qrBannerContainer}>
                  <div className={style.qrBannerText}>TRY OUR CARD DETECTION WEB APP!</div>
                  <div className={style.qrBanner}>
                      <img src={"../media/images/qr.png"} alt={"qr"} className={style.qr}/>
                  </div>
            </div>
            <div className={style.latestBidsContainer}>
                <CardShowCase name={"Latest Bids"} data={latestBidsArray}/>
            </div>
            <div className={style.latestProductsContainer}>
                <CardShowCase name={"Latest Products"} data={latestProductsArray}/>
            </div>
      </Layout>
  )
}

export default HomePage