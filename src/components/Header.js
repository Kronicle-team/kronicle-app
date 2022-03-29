import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import common from "../styles/common.module.css"
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
      <header className={[style["header"], common["flex"]].join(" ")}>
        <div className={[style["header-left"], common["flex"]].join(" ")}>
          <Link to="/">
            <img alt="Kronicle logo" src={"../media/icons/logo.png"} className={style["logo"]} />
          </Link>

          <SearchBar />

          <Link to="/"><FontAwesomeIcon icon={faArrowUpFromBracket} className={style["icon"]} /></Link>
          <Link to="/"><FontAwesomeIcon icon={faShoppingCart} className={style["icon"]} /></Link>
        </div>

        <div className={[style["header-right"], common["flex"]].join(" ")}>
          <Link to="/login">Login</Link>
          <div className={style["vertical-line"]} />
          <Link to="/register" className={style["register"]}>Register</Link>
        </div>
      </header>
  )
}

export default Header