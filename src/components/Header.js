import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";

const Header = () => {
  return (
      <header>
        <a href=""><img alt="Kronicle logo" src={"../media/icons/logo.png"} /></a>
        <div className={style["search-bar"]}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
      </header>
  )
}

export default Header