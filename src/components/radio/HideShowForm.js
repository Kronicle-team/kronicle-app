import React, {useState} from "react";
import style from "../form/ListingForm.module.css";

// Use React Hook
function Radio () {
    const [status, setStatus] = React.useState(0) // 0: no show, 1: show price, 2: show min price.

    const radioHandler = (status) => {
        setStatus(status);
    };


    function displaySellingPrice() {
        if (status === 1) {
            return (

                <div className={style["form-input"]}>
                    <label className={style["label-listing"]} htmlFor="sellingPrice">Selling Price</label>
                    <input type="number" className={style["input-listing"]} id="sellingPrice" required={true} placeholder="Selling Price"/>
                </div>
            );
        }
    }

    function displayMinPrice() {
        if (status === 2) {
            return (
                <div className={style["form-input"]}>
                    <label className={style["label-listing"]} htmlFor="minPrice">Min Price</label>
                    <input type="number" className={style["input-listing"]} id="minPrice" required={true} placeholder="Min Price" />
                </div>
            );
        }
    }

    return (
        <>
            <input type="radio" name="release" checked={status === 1} onClick={(e) => radioHandler(1)} />
            <input type="radio" name="release" checked={status === 2} onClick={(e) => radioHandler(2)} />
            {status === 1 && displaySellingPrice()}
            {status === 2 && displayMinPrice()}
        </>
    );
}

export default Radio;