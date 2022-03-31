import style from "./Footer.module.css";
import common from "../styles/common.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className={style["footer"]}>
        <div className={style["footer-nav"] + " " + common["flex"]}>
          <div>
            <h4>CATEGORIES</h4>
            <Link to="/cards/album-cards">Album cards</Link>
            <Link to="/cards/trading-cards">Trading cards</Link>
            <Link to="/cards/buy-now">Buy now</Link>
            <Link to="/cards/bid">Bid</Link>
          </div>

          <div>
            <h4>CUSTOMER CARE</h4>
            <Link to="/">Tracking My Order</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Shipping Policy</Link>
            <Link to="/">Refund Policy</Link>
          </div>

          <div>
            <h4>INFO</h4>
            <Link to="/">About Us</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Product Care</Link>
            <Link to="/">Terms And Conditions</Link>
          </div>
        </div>

        <div className={[common["text-center"], common["flex"]].join(" ")}>
          &copy; {currentYear} We are Kronicle. All Rights Reserved.
        </div>
      </footer>
  )
}

export default Footer