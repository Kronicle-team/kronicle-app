import {Link} from "react-router-dom";
import style from "./NavBar.module.css";
import common from "../../styles/common.module.css"

const NavBar = () => {
  return (
      <nav className={[style["nav"], common["flex"]].join(" ")}>
          <Link to="/" className={style["active-link"]}>Home</Link>
          <Link to="/cards/album-cards">Album cards</Link>
          <Link to="/cards/trading-cards">Trading cards</Link>
          <Link to="/cards/buy-now">Buy now</Link>
          <Link to="/cards/bid">Bid</Link>
      </nav>
  )
}

export default NavBar