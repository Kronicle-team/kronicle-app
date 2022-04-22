import Layout from "../../components/Layout";
import style from "./CheckoutOne.module.css";
import { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const CheckoutOne = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");

  const {state} = useLocation();
  const { id } = state;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/check-out-2', { state: { id: id } });
  }

  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div>
            <Link to="/check-out-1" className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon1Orange.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoTextMain"]}>SHIPPING DETAILS</h3>
            </Link>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt="line" />
          <div>
            <div className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon2Black.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoText"]}>PAYMENT METHOD</h3>
            </div>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt={"Line"} />
          <div>
            <div className={style["icon-wrapper"]}>
              <img
                  src={"../../media/icons/checkout/CheckoutIcon3Black.svg"}
                  className={style["logo"]}
                  alt={"Logo"}
              />
              <h3 className={style["logoText"]}>CONFIRMATION</h3>
            </div>
          </div>
        </div>

        <form className={style["form"]}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={style["input"]}
          />
          <label>Middle Name</label>
          <input
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className={style["input"]}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={style["input"]}
          />
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={style["input"]}
          />
          <label>Shipping Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={style["input"]}
          />
          <label>Postal Code</label>
          <input
            type="text"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            className={style["input"]}
          />
        </form>

        <div className={style["button-wrapper"]}>
          <button className={style["next-button"]} onClick={() => handleCheckout()}>NEXT</button>
          <Link to="/">
            <button className={style["cancel-button"]}>CANCEL</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutOne;
