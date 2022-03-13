import style from "./Footer.module.css";
import common from "../../styles/common.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer>
        <div className={style["footer-nav"] + " " + common["flex"]}>
          <div>
            <h4>KRONICLE</h4>
            <p><a href="">About Us</a></p>
            <p><a href="">Contact Us</a></p>
            <p><a href="">FAQs</a></p>
          </div>

          <div>
            <h4>CATEGORIES</h4>
            <p><a href="">Artist</a></p>
            <p><a href="">Album Photocards</a></p>
            <p><a href="">Trading photocards</a></p>
          </div>

          <div>
            <h4>CUSTOMER SERVICES</h4>
            <p><a href="">Shipping Policy</a></p>
            <p><a href="">Privacy Policy</a></p>
            <p><a href="">Refund Policy</a></p>
            <p><a href="">Terms of Service</a></p>
          </div>
        </div>

        <div className={common["text-center"]}>
          <p>&copy; {currentYear} We are Kronicle. All Rights Reserved.</p>
        </div>
      </footer>
  )
}

export default Footer