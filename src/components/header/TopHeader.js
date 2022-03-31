import style from "./TopHeader.module.css";
import common from "../../styles/common.module.css";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faBars,
  faShoppingCart,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {
  const isLoggedIn = false;
  const isWindowSize = false;

  return (
      <div className={[style["top-header"], common["flex"]].join(" ")}>
        <div className={[style["top-header-left"], common["flex"]].join(" ")}>
          <Link to="/">
            <img alt="Kronicle logo" src={"../media/icons/logo.png"} className={style["logo"]} />
          </Link>

          {isWindowSize
          ? (<></>)
          : (
              <>
                <SearchBar />
                <Link to="/"><FontAwesomeIcon icon={faArrowUpFromBracket} className={style["icon"]} /></Link>
                <Link to="/"><FontAwesomeIcon icon={faShoppingCart} className={style["icon"]} /></Link>
              </>
              )
          }
        </div>

        {isWindowSize
            ? (
                <div className={[style["top-header-right"], common["flex"]].join(" ")}>
                  <button className={style["menu"]}><FontAwesomeIcon icon={faBars}/></button>
                </div>
            )
            : (
                <div className={[style["top-header-right"], common["flex"]].join(" ")}>
                  {isLoggedIn
                      ? (
                          <>
                            <Link to="/" className={style["avatar"]}><FontAwesomeIcon icon={faUserCircle}/></Link>
                            <Link to="/">Logout</Link>
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
            )
        }

      </div>

  )
}

export default TopHeader