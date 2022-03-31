import Layout from "../../components/Layout";
import style from "./CheckoutOne.module.css";
import { useState } from "react";

const CheckoutOne = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-1"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon1Orange.svg"}
                className={style["logo"]}
              />
            </a>
            <h3 className={style["logoTextMain"]}>SHIPPING DETAILS</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} />
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-2"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon2Black.svg"}
                className={style["logo"]}
              />
            </a>
            <h3 className={style["logoText"]}>PAYMENT METHOD</h3>
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

        <form className={style["form"]}>
          <label>First name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={style["input"]}
          />
          <label>Middle name</label>
          <input
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className={style["input"]}
          />
          <label>Last name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={style["input"]}
          />
          <label>Phone number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={style["input"]}
          />
          <label>Shipping address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={style["input"]}
          />
          <label>Postal code</label>
          <input
            type="text"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            className={style["input"]}
          />
        </form>

        <div className={style["button-wrapper"]}>
          <button className={style["next-button"]}>NEXT</button>
          <button className={style["cancel-button"]}>CANCEL</button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutOne;
