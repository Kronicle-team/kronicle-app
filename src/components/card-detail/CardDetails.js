import common from "../../../src/styles/common.module.css";
import style from "./CardDetail.module.css"

const CardDetails = ({img, name, price, description, seller}) => {
  return (
      <section className={[common["flex"], style["container"]].join(" ")}>
        <img src={img} alt="card" className={style["img"]} />

        <div className={style["details"]}>
          <h3>{name}</h3>
          <h1>{price}</h1>
          <h4>Product Description</h4>
          <div className={style["desc"]}>{description}</div>

          <h4>Seller</h4>
          <div>
            <img src={seller.avatar} alt="seller-avatar" className={style["seller-ava"]}/>
            <p>{seller.name}</p>
          </div>

          <div>
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
      </section>
  )
}

export default CardDetails