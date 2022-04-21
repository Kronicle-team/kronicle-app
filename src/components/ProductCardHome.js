import style from "./ProductCardHome.module.css"
import {Link} from "react-router-dom";

const ProductCardHome = (props) => {
  let cardName = props.name;
  const words = cardName.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  cardName = words.join(" ");
  const path = props.bid ? `/cards/bid/${props.id}` : `/cards/buy-now/${props.id}`

    return (
        <div className={style.card}>
            <div>
              <Link to={path}>
                 <div className={style.imgWrapper}>
                <img src={props.img ? props.img : ("/public/media/images/product-card-placeholder.png")} alt={"product"} className={style.cardImg}/>
                  </div>
              </Link>

              <Link to={path}>
                <h6 className={style.cardName}>{cardName}</h6>
              </Link>
                <div>{props.price.toLocaleString() + " VND"}</div>

            </div>
        </div>
    )
}

export default ProductCardHome;