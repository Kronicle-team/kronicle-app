import style from "./TopHeader.module.css";
import common from "../../styles/common.module.css";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faShoppingCart,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const TopHeader = () => {
  const [isLoggedIn, setLogIn] = useState(false);

  return (
      <div className={[style["top-header"], common["flex"]].join(" ")}>
        <div className={[style["top-header-left"], common["flex"]].join(" ")}>
          <Link to="/">
            <img alt="Kronicle logo" src={"../../media/icons/logo.png"} className={style["logo"]} />
          </Link>

          <SearchBar/>
          <Link to="/listing"><FontAwesomeIcon icon={faArrowUpFromBracket} className={style["icon"]}/></Link>
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} className={style["icon"]}/></Link>
        </div>

        <div className={[style["top-header-right"], common["flex"]].join(" ")}>
          {isLoggedIn
              ? (
                  <>
                    <Link to="/my-account" className={style["avatar"]}>
                      <FontAwesomeIcon icon={faUserCircle}/>
                    </Link>
                    <Link to="/login">Logout</Link>
                  </>
              )
              : (
                  <>
                    <Link to="/login">Login</Link>
                    <div className={style["vertical-line"]}/>
                    <Link to="/register" className={style["register"]}>Register</Link>
                  </>
              )
          }
        </div>

      </div>

  )
}

export default TopHeader