import Layout from "../../components/Layout";
import style from "./CheckoutTwo.module.css";
import { useState } from "react";

const CheckoutTwo = () => {
  const [cardNum, setCardNum] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [holderName, setHolderName] = useState("");
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-1"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon1Black.svg"}
                className={style["logo"]}
              />
            </a>
            <h3 className={style["logoText"]}>SHIPPING DETAILS</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} />
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-2"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon2Orange.svg"}
                className={style["logo"]}
              />
            </a>
            <h3 className={style["logoTextMain"]}>PAYMENT METHOD</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} />
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-3"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon3Black.svg"}
                className={style["logo"]}
              />
            </a>
            <h3 className={style["logoText"]}>CONFIRMATION</h3>
          </div>
        </div>
        <div className={style["payment-wrapper"]}>
          <div className={style["payment-method-wrapper"]}>
            <div className={style["payment-method"]}>
              <img src={"../../media/images/checkout/visa.png"} />
            </div>
            <div className={style["payment-method"]}>
              <img src={"../../media/images/checkout/paypal.png"} />
            </div>
            <div className={style["payment-method"]}>
              <img src={"../../media/images/checkout/ae.png"} />
            </div>
            <div className={style["payment-method"]}>
              <img src={"../../media/images/checkout/mastercard.png"} />
            </div>
          </div>

          <form className={style["form"]}>
            <label>Card Number</label>
            <input
              type="text"
              value={cardNum}
              onChange={(e) => setCardNum(e.target.value)}
              placeholder={"0000 0000 0000 0000"}
              className={style["input"]}
            />
            <div className={style["expDate-cvv"]}>
              <div>
                <label>Expired Date</label>
                <input
                  type="text"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                  placeholder={"MM/YY"}
                  className={style["input"]}
                />
              </div>
              <div>
                <label>CVV</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className={style["input"]}
                />
              </div>
            </div>

            <label>Cardholder Name</label>
            <input
              type="text"
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)}
              className={style["input"]}
            />

            <div className={style["button-wrapper"]}>
              <button className={style["next-button"]}>NEXT</button>
              <button className={style["cancel-button"]}>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutTwo;
