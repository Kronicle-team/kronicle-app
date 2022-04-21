import common from "../../../src/styles/common.module.css";
import style from "./CardDetails.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase";

const CardDetails = ({cart, id, img, name, price, description, seller, buy, bid}) => {
  const [bidAmt, setBidAmt] = useState();
  const documentID = "0UHcspYV2NOUc5yZTFkslMuYRD23"

  const addItemToCart = async () => {
    const userRef = doc(db, "users", documentID)
    const newCart = cart;
    newCart[id] = price;
    await updateDoc(userRef, {
      cart: newCart
    })
  }

  const addToCart = async () => {
    alert("Item has been added to cart.")
   await addItemToCart()
  }

  const handleBid = (e) => {
    if (bidAmt <= price) {
      alert("Please bid a higher price.");
      e.preventDefault();
    } else {
      alert("Bid successfully. You will be redirect to the checkout page.")
    }
  }

  let cardName = name;
  const words = cardName.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  cardName = words.join(" ");

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
                <Link to={"/cart"}><button className={style["cart-btn"]} onClick={() => addToCart()}>ADD TO CART</button></Link>
                <Link to="/check-out-1"><button className={style["buy-btn"]}>BUY NOW</button></Link>
              </div>
          : null
          }
          {bid
              ? <>
                  <h6>Available until 23:59 April 1, 2022</h6>
                  <h4>Enter your bid amount</h4>
                <div className={[common["flex"], style["input-container"]].join(" ")}>
                  <input type="number" className={style["input"]} onChange={e => setBidAmt(e.target.value)}/>
                  <div className={[style["currency"], common["text-center"]].join(" ")}>VND</div>
                </div>

                <div className={[common["flex"], style["bid-btn-container"]].join(" ")}>
                  <Link to="/check-out-1">
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