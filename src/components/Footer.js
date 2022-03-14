import style from "./Footer.module.css";
import common from "../styles/common.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer>
        <div className={style["footer-nav"] + " " + common["flex"]}>
          <div>
            <h4>KRONICLE</h4>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">FAQs</Link>
          </div>

          <div>
            <h4>CATEGORIES</h4>
            <Link to="/">Artist</Link>
            <Link to="/">Album Photocards</Link>
            <Link to="/">Trading photocards</Link>
          </div>

          <div>
            <h4>CUSTOMER SERVICES</h4>
            <Link to="/">Shipping Policy</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Refund Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>

        <div className={common["text-center"]}>
          <p>&copy; {currentYear} We are Kronicle. All Rights Reserved.</p>
        </div>
      </footer>
  )
}

export default Footer