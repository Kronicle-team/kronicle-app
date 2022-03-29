import style from "./SearchBar.module.css";
import common from "../styles/common.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
      <div className={[style["search-bar"], common["flex"]].join(" ")}>
        <input
            type="search"
            placeholder="Search e.g Blackpink"
            value={input}
            onChange={e => setInput(e.target.value)}
            className={style["search-input"]}
        />
        <button className={style["search-btn"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style["search-icon"]} />
        </button>
      </div>
  )
}

export default SearchBar