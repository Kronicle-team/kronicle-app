import Layout from "../components/Layout";
import style from "./BidPage.module.css";
import common from "../styles/common.module.css"
import {useState} from "react";

const BidPage = () => {
  const [bid, setBid] = useState("0");

  return (
      <Layout header footer className={[style["container"], common["flex"]].join(" ")}>
        <h1>Place a Bid</h1>
        <p className={style["subtitle"]}>You must bid at least <span className={style["price"]}>100</span></p>

        <div className={[common["flex"], style["input-container"]].join(" ")}>
          <input type="text" className={style["input"]} onChange={e => setBid(e.target.value)}/>
          <div className={[style["currency"], common["text-center"]].join(" ")}>VND</div>
        </div>

        <div className={[common["flex"], style["amount"]].join(" ")}>
          <div className={[common["flex"], style["amount-row"]].join(" ")}>
            <div>Your bid</div>
            <div>{bid} VND</div>
          </div>

          <div className={[common["flex"], style["amount-row"]].join(" ")}>
            <div>Deposit fee</div>
            <div>20,000 VND</div>
          </div>

          <div className={[common["flex"], style["amount-row"]].join(" ")}>
            <div>Service fee</div>
            <div>5,000 VND</div>
          </div>

          <div className={[common["flex"], style["amount-row"]].join(" ")}>
            <div>Total amount</div>
            <div>225,000 VND</div>
          </div>
        </div>
      </Layout>
  )
}

export default BidPage