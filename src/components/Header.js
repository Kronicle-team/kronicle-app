import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import common from "../styles/common.module.css"
import {Link} from "react-router-dom";

// TODO: Move search bar as component
const Header = () => {
  return (
      <header className={[style["header"], common["flex"]].join(" ")}>
        <div className={[style["header-left"], common["flex"]].join(" ")}>
          <Link to="/">
            <img alt="Kronicle logo" src={"../media/icons/logo.png"} className={style["logo"]} />
          </Link>
          <div className={[style["search-bar"], common["flex"]].join(" ")}>
            <input name="search">
            </input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style["search-icon"]} />
          </div>
          <Link to="/"><FontAwesomeIcon icon={faArrowUpFromBracket} /></Link>
          <Link to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>

        <div className={[style["header-right"], common["flex"]].join(" ")}>
          <Link to="/login">Login</Link>
          <div className={style["vertical-line"]} />
          <Link to="/listing">Listing</Link>
        </div>
      </header>
  )
}

export default Header