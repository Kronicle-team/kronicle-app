import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import common from "../styles/common.module.css"
import {Link} from "react-router-dom";

const Header = () => {
  return (
      <header className={[style["header"], common["flex"]].join(" ")}>
        <div className={[style["header-left"], common["flex"]].join(" ")}>
          <Link to="/">
            <img alt="Kronicle logo" src={"../media/icons/logo.png"} className={style["logo"]} />
          </Link>
          <div className={[style["search-bar"], common["flex"]].join(" ")}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <button><FontAwesomeIcon icon={faFilter} /></button>
        </div>

        <div className={[style["header-right"], common["flex"]].join(" ")}>
          <Link to="/login">Login</Link>
          <Link to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <Link to="/listing"><button>Listing</button></Link>
        </div>
      </header>
  )
}

export default Header