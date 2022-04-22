import common from "../../../src/styles/common.module.css";
import style from "./CardDetails.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {postBid} from "../../api/handleBid";
import {capitalizeAllWords, formatDescription, formatTime} from "../../helper/formatData";

const CardDetails = ({id, img, name, price, description, seller, date, buy, bid}) => {
  const navigate = useNavigate();
  const [bidAmt, setBidAmt] = useState();

  const uploadDate = new Date(date);
  const period = 7;
  const deadline = new Date(uploadDate.setDate(uploadDate.getDate() + period))
  const datestring = formatTime(deadline.getHours(), deadline.getMinutes(), deadline.getSeconds())
      + " - " + ("0" + deadline.getDate()).slice(-2) + " " +
      (deadline.toLocaleString("en-us", { month: "short" })) + ", " +
      deadline.getFullYear();

  const addToCart = () => {
    alert("Item has been added to cart.")
  }

  const handleBuyNow = () => {
    navigate('/check-out-1', { state: { id: id } });
  }

  const handleBid = (e) => {
    if (!bidAmt) {
      alert("Please enter a bid amount.");
      e.preventDefault();
    } else if (bidAmt <= price) {
      alert("Please bid a higher price.");
      e.preventDefault();
    } else {
      postBid(id, parseInt(bidAmt))
      alert("Successful bid!")
    }
  }

  const cardName = capitalizeAllWords(name);
  const desc = formatDescription(description)

  return (
      <section className={[common["flex"], style["container"]].join(" ")}>
        <img src={img} alt="card" className={style["img"]} />

        <div className={style["details"]}>
          <h3>{cardName}</h3>
          {bid
              ? <h4>Minimum bid</h4>
              : null
          }
          <h1>{price.toLocaleString() + " VND"}</h1>
          <h4>Product Description</h4>
          <div className={style["desc"]}>{desc}</div>

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
                <button className={style["buy-btn"]} onClick={() => handleBuyNow()}>BUY NOW</button>
              </div>
          : null
          }
          {bid
              ? <>
                  <h6>Available until {datestring}</h6>
                  <h4>Enter your bid amount</h4>
                <div className={[common["flex"], style["input-container"]].join(" ")}>
                  <input type="number" className={style["input"]} onChange={e => setBidAmt(parseInt(e.target.value))}/>
                  <div className={[style["currency"], common["text-center"]].join(" ")}>VND</div>
                </div>

                <div className={[common["flex"], style["bid-btn-container"]].join(" ")}>
                  <Link to="/cart">
                    <button className={style["bid-btn"]} onClick={e => handleBid(e)}>PLACE A BID</button>
                  </Link>
                </div>
              </>
              : null
          }
        </div>
      </section>
  )
}

export default CardDetails