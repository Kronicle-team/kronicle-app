import {Link, useLocation} from "react-router-dom";
import style from "./NavBar.module.css";
import common from "../../styles/common.module.css";
import {allPages} from "../../Pages";

const NavBar = () => {
  const navPages = allPages.navBar;
  const location = useLocation();

  return (
      <nav className={[style["nav"], common["flex"]].join(" ")}>
        {navPages.map((page, id) => {
          return (
              location.pathname === page.link
              ? <Link key={id} to={page.link} className={[style["active-link"], style["links"]].join(" ")}>{page.name}</Link>
              : <Link key={id} to={page.link} className={style["links"]}>{page.name}</Link>
          )
        })}
      </nav>
  )
}

export default NavBar