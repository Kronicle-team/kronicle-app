import style from "./Header.module.css";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";

const Header = () => {
  return (
      <header className={style["header"]}>
        <TopHeader />
        <NavBar />
      </header>
  )
}

export default Header