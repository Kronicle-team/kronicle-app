import Layout from "../components/Layout";
import style from "./BidPage.module.css";
import common from "../styles/common.module.css"

const BidPage = () => {

  return (
      <Layout header footer className={[style["container"], common["flex"]].join(" ")}>
        <h1>Place a Bid</h1>
        <p className={style["subtitle"]}>You must bid at least <span className={style["price"]}>100</span></p>
        <input type="text"/>
        <div>VND</div>
      </Layout>
  )
}

export default BidPage