import style from "./TopHeader.module.css";
import common from "../../styles/common.module.css";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  return (
      <div className={[style["top-header"], common["flex"]].join(" ")}>
        <div className={[style["top-header-left"], common["flex"]].join(" ")}>
          <Link to="/">
            <img alt="Kronicle logo" src={"../media/icons/logo.png"} className={style["logo"]} />
          </Link>

          <SearchBar />

          <Link to="/"><FontAwesomeIcon icon={faArrowUpFromBracket} className={style["icon"]} /></Link>
          <Link to="/"><FontAwesomeIcon icon={faShoppingCart} className={style["icon"]} /></Link>
        </div>

        <div className={[style["top-header-right"], common["flex"]].join(" ")}>
          <Link to="/login">Login</Link>
          <div className={style["vertical-line"]} />
          <Link to="/register" className={style["register"]}>Register</Link>
        </div>
      </div>

  )
}

export default TopHeader