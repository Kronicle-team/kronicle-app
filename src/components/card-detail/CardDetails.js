import common from "../../../src/styles/common.module.css";
import style from "./CardDetails.module.css"
import {Link} from "react-router-dom";

const CardDetails = ({img, name, price, description, seller}) => {
  const addToCart = () => {
    alert("Item has been added to cart.")
  }

  return (
      <section className={[common["flex"], style["container"]].join(" ")}>
        <img src={img} alt="card" className={style["img"]} />

        <div className={style["details"]}>
          <h3>{name}</h3>
          <h1>{price}</h1>
          <h4>Product Description</h4>
          <div className={style["desc"]}>{description}</div>

          <h4>Seller</h4>
          <div className={[style["seller-container"], common["flex"]].join(" ")}>
            <Link to="/seller-profile">
              <img src={seller.avatar} alt="seller-avatar" className={[style["seller-ava"], common["flex"]].join(" ")}/>
            </Link>
            <Link to="/seller-profile"><p>{seller.name}</p></Link>
          </div>

          <div className={[common["flex"], style["btn-container"]].join(" ")}>
            <button className={style["cart-btn"]} onClick={() => addToCart()}>ADD TO CART</button>
            <Link to="/check-out-1"><button className={style["buy-btn"]}>BUY NOW</button></Link>
          </div>
        </div>
      </section>
  )
}

export default CardDetails