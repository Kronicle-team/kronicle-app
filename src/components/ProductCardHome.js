import style from "./ProductCardHome.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";

const ProductCardHome = (props) => {
  const [source, setSource] = useState(props.img)
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
                <img src={source} alt={"product"} className={style.cardImg} onError={() => {
                   setSource("/media/images/product-card-placeholder.png")
                }}/>
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