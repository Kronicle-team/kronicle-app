import React, {useState} from "react";
import style from "../form/ListingForm.module.css";

// Use React Hook
function Radio ({}) {
  const [status, setStatus] = useState(0) // 0: no show, 1: show price, 2: show min price.
  const [category, setCategory] = useState("")
  const [product_pricing, setProductPricing] = useState("buy now")
  const [price, setPrice] = useState("")

  const radioHandler = (status) => {
    setStatus(status);
  };

  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  }


  function displaySellingPrice() {
    if (status === 1) {
      return (

        <div className={style["form-input"]}>
          <label className={style["label-listing"]} htmlFor="sellingPrice">Selling Price*</label>
          <input name="price" type="number" className={style["input-listing"]} id="sellingPrice" required={true} placeholder="Selling Price" onChange={e => setPrice(e.target.value)}/>
        </div>
      );
    }
  }

  function displayMinPrice() {
    if (status === 2) {
      return (
        <div className={style["form-input"]}>
          <label className={style["label-listing"]} htmlFor="minPrice">Min Price*</label>
          <input name="price" type="number" className={style["input-listing"]} id="minPrice" required={true} placeholder="Min Price" onChange={e => setPrice(e.target.value)}/>
        </div>
      );
    }
  }

  return (
    <>
      <div className={style["form-input"]}>
        <label className={style["label-listing"]}>Category*</label>
        <div className={style["radio-container-listing"]}>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>ALBUM CARD</label>
            <input value="album photocard" type="radio" name="category" onChange={e => setCategory(e.target.value)}/>
          </div>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>TRADING CARD</label>
            <input value="photocard" type="radio" name="category" onChange={e => setCategory(e.target.value)}/>
          </div>
        </div>
        <span className={style["error-message"]}>Please choose a category</span>
      </div>

      <div className={style["form-input"]}>
        <label className={style["label-listing"]}>Type of Pricing *</label>
        <div className={style["radio-container-listing"]}>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>BUY NOW</label>
            <input value="buy now" type="radio" name="release" checked={status === 1} onClick={(e) => radioHandler(1)} onChange={e => setProductPricing(e.target.value)}/>
          </div>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>BID NOW</label>
            <input value="bid" type="radio" name="release" checked={status === 2} onClick={(e) => radioHandler(2)} onChange={e => setProductPricing(e.target.value)}/>
          </div>
        </div>
        <span className={style["error-message"]}>Please choose a type of pricing</span>
      </div>
      {status === 1 && displaySellingPrice()}
      {status === 2 && displayMinPrice()}
    </>

  );
}

export default Radio;