import React, { useState } from "react";
import style from "../form/ListingForm.module.css";

// Use React Hook
function Radio({ setCat, setPricing, setPrice }) {
  const [status, setStatus] = useState(1); // 0: no show, 1: show price, 2: show min price.


  const radioHandler = (status) => {
    setStatus(status);
  };


  function displaySellingPrice() {
    if (status === 1) {
      return (
        <div className={style["form-input"]}>
          <label className={style["label-listing"]} htmlFor="sellingPrice">
            Selling Price*
          </label>
          <input
            name="price"
            type="number"
            className={style["input-listing"]}
            id="sellingPrice"
            placeholder="Selling Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      );
    }
  }

  function displayMinPrice() {
    if (status === 2) {
      return (
        <div className={style["form-input"]}>
          <label className={style["label-listing"]} htmlFor="minPrice">
            Min Price*
          </label>
          <input
            name="price"
            type="number"
            className={style["input-listing"]}
            id="minPrice"
            required={true}
            placeholder="Min Price"
            onChange={(e) => setPrice(e.target.value)}
          />
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
            <input
              value="album photocard"
              type="radio"
              name="category"
              defaultChecked={true}
              onChange={(e) => setCat(e.target.value)}
            />
          </div>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>TRADING CARD</label>
            <input
              value="trading card"
              type="radio"
              name="category"
              defaultChecked={false}
              onChange={(e) => setCat(e.target.value)}
            />
          </div>
        </div>
        <span className={style["error-message"]}>Please choose a category</span>
      </div>

      <div className={style["form-input"]}>
        <label className={style["label-listing"]}>Type of Pricing*</label>
        <div className={style["radio-container-listing"]}>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>BUY NOW</label>
            <input
              value="buy now"
              type="radio"
              name="product_pricing"
              required={true}
              checked={status === 1}
              defaultChecked={true}
              onClick={(e) => radioHandler(1)}
              onChange={(e) => setPricing(e.target.value)}
            />
          </div>
          <div className={style["radio-align"]}>
            <label className={style["radio-label"]}>BID NOW</label>
            <input
              value="bid now"
              type="radio"
              name="product_pricing"
              required={true}
              defaultChecked={false}
              checked={status === 2}
              onClick={(e) => radioHandler(2)}
              onChange={(e) => setPricing(e.target.value)}
            />
          </div>
        </div>
        <span className={style["error-message"]}>
          Please choose a type of pricing
        </span>
      </div>
      {status === 1 && displaySellingPrice()}
      {status === 2 && displayMinPrice()}
    </>
  );
}

export default Radio;