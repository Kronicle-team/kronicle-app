import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import common from "../styles/common.module.css"

const Header = () => {
  return (
      <header className={[style["header"], common["flex"]].join(" ")}>
        <div className={[style["header-left"], common["flex"]].join(" ")}>
          <a href="">
            <img alt="Kronicle logo" src={"../media/icons/logo.png"} className={style["logo"]} />
          </a>
          <div className={[style["search-bar"], common["flex"]].join(" ")}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <button><FontAwesomeIcon icon={faFilter} /></button>
        </div>

        <div className={[style["header-right"], common["flex"]].join(" ")}>
          <a href="">Login</a>
          <FontAwesomeIcon icon={faShoppingCart} />
          <button>Listing</button>
        </div>
      </header>
  )
}

export default Header