import Layout from "../../components/Layout";
import style from "./CheckoutTwo.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutTwo = () => {
  const [cardNum, setCardNum] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [holderName, setHolderName] = useState("");

  const [visaSelected, setVisaSelected] = useState(false);
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div>
            <a href={"check-out-1"} className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/Tick.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoTextMain"]}>SHIPPING DETAILS</h3>
            </a>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt={"Line"} />
          <div>
            <a href={"check-out-2"} className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon2Orange.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoTextMain"]}>PAYMENT METHOD</h3>
            </a>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt={"Line"} />
          <div>
            <a href={"check-out-3"} className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon3Black.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoText"]}>CONFIRMATION</h3>
            </a>
          </div>
        </div>
        <div className={style["payment-wrapper"]}>
          <div className={style["payment-method-wrapper"]}>
            <div
              className={
                visaSelected ? style["orange-border"] : style["payment-method"]
              }
              onClick={() => {
                setVisaSelected(!visaSelected);
              }}
            >
              <img src={"../../media/images/checkout/visa.png"} alt={"Visa"} />
            </div>
            <div className={style["payment-method"]}>
              <img
                src={"../../media/images/checkout/paypal.png"}
                alt={"Paypal"}
              />
            </div>
            <div className={style["payment-method"]}>
              <img
                src={"../../media/images/checkout/ae.png"}
                alt={"American Express"}
              />
            </div>
            <div className={style["payment-method"]}>
              <img
                src={"../../media/images/checkout/mastercard.png"}
                alt={"Mastercard"}
              />
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
              <Link to={"/check-out-3"}>
                <button className={style["next-button"]}>NEXT</button>{" "}
              </Link>

              <Link to={"/check-out-1"}>
                <button className={style["cancel-button"]}>CANCEL</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutTwo;
