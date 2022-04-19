import {Link} from "react-router-dom";
import style from "./NavBar.module.css";
import common from "../../styles/common.module.css"

const NavBar = () => {
  return (
      <nav className={[style["nav"], common["flex"]].join(" ")}>
          <Link to="/" className={[style["active-link"], style["links"]].join(" ")}>Home</Link>
          <Link to="/all" className={style["links"]}>All</Link>
          <Link to="/cards/album-cards" className={style["links"]}>Album cards</Link>
          <Link to="/cards/trading-cards" className={style["links"]}>Trading cards</Link>
          <Link to="/cards/buy-now" className={style["links"]}>Buy now</Link>
          <Link to="/cards/bid" className={style["links"]}>Bid</Link>
      </nav>
  )
}

export default NavBar