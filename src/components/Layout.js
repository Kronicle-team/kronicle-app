import Header from "./header/Header";
import Footer from "./Footer";

const Layout = ({children, header, footer, className}) => {
  return (
      <>
        {header ? <Header /> : null}
        <main className={className}>{children}</main>
        {footer ? <Footer /> : null}
      </>
  )
}

export default Layout