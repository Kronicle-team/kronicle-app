import common from "../../../src/styles/common.module.css";
import style from "./CardDetails.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";

const CardDetails = ({img, name, price, description, seller, buy, bid}) => {
  const addToCart = () => {
    alert("Item has been added to cart.")
  }

  const [bidAmt, setBidAmt] = useState("");

  return (
      <section className={[common["flex"], style["container"]].join(" ")}>
        <img src={img} alt="card" className={style["img"]} />

        <div className={style["details"]}>
          <h3>{name}</h3>
          {bid
              ? <h4>Minimum bid</h4>
              : null
          }
          <h1>{price}</h1>
          <h4>Product Description</h4>
          <div className={style["desc"]}>{description}</div>

          <h4>Seller</h4>
          <div className={[style["seller-container"], common["flex"]].join(" ")}>
            <Link to="/seller-profile">
              <img src={seller.avatar} alt="seller-avatar" className={[style["seller-ava"], common["flex"]].join(" ")}/>
            </Link>
            <Link to="/seller-profile"><p>{seller.name}</p></Link>
          </div>

          {buy
          ? <div className={[common["flex"], style["btn-container"]].join(" ")}>
                <button className={style["cart-btn"]} onClick={() => addToCart()}>ADD TO CART</button>
                <Link to="/check-out-1"><button className={style["buy-btn"]}>BUY NOW</button></Link>
              </div>
          : null
          }
          {bid
              ? <>
                  <h6>Available until 23:59 April 1, 2022</h6>
                  <h4>Place a bid</h4>
                <div className={[common["flex"], style["input-container"]].join(" ")}>
                  <input type="number" className={style["input"]} onChange={e => setBidAmt(e.target.value)}/>
                  <div className={[style["currency"], common["text-center"]].join(" ")}>VND</div>
                </div>

                <div className={[common["flex"], style["bid-btn-container"]].join(" ")}>
                  <button className={style["bid-btn"]}>PLACE A BID</button>
                </div>
              </>
              : null
          }
        </div>
      </section>
  )
}

export default CardDetails