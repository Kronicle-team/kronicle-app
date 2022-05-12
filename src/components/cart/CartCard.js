/***************************************************************************************
 *    Title: Add data to Cloud Firestore
 *    Author: Firebase
 *    Date: 4 May 2022
 *    Availability: https://firebase.google.com/docs/firestore/manage-data/add-data (Accessed 4 April 2022)
 *
 ***************************************************************************************/

import style from "./CartCard.module.css";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { capitalizeAllWords } from "../../helper/formatData";

const CartCard = ({
                    date_time,
  cart,
  id,
  image,
  name,
  price,
  bid,
  highestBid,
  currentUser,
}) => {
  const [winning, setWinning] = useState(true);
  const currency = "VND";
  const productLink =
    bid === "bid now" ? "/cards/bid/" + id : "/cards/buy-now/" + id;
  const removeItemFromCart = async () => {
    const userRef = doc(db, "users", currentUser);
    const newCart = cart;
    delete newCart[id];
    await updateDoc(userRef, {
      cart: newCart,
    });
    console.log("remove item succesfully");
    window.location.reload();
  };
  useEffect(() => {
    if (highestBid > price) {
      setWinning(false);
    }
  }, [price, highestBid]);

  return (
    <div className={style.cardWrapper}>
      <Link className={style.cardImgWrapper} to={productLink}>
        <img
          src={image ? image : "../media/icons/logo.png"}
          className={style.cardImg}
          alt={"product"}
        />
      </Link>
      <div className={style.cardContentContainer}>
        <div className={style.cardContent}>
          <Link to={productLink}>
            <h5 className={style.cardName}>{capitalizeAllWords(name)}</h5>
          </Link>
          <div>
            <p className={style.cardPrice}>{price.toLocaleString() + " " + currency}</p>
          </div>
          {bid === "bid now" ? (
            <div>
              <p className={winning ? style.winningCard : style.overBiddenCard}>
                {winning && Date.parse(date_time) <= new Date().getTime()
                  ? "WON" : !winning ?
                  "HIGHEST BID: " + highestBid + " " + currency : "WINNING"}
              </p>
            </div>
          ) : null}
        </div>
        {(bid === "bid now" && !winning) || bid === "buy now" ? (
          <div>
            <button
              className={style.removeBtn}
              onClick={async () => {
                await removeItemFromCart();
              }}
            >
              REMOVE
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartCard;
