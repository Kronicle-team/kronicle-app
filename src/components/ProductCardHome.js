import style from "./ProductCardHome.module.css"
import {Link} from "react-router-dom";
import {capitalizeAllWords} from "../helper/formatData";

const ProductCardHome = (props) => {
  const cardName = capitalizeAllWords(props.name);
  const path = props.productLink

    return (
        <div className={style.card}>
            <div>
              <Link to={path}>
                 <div className={style.imgWrapper}>
                <img src={props.img} alt={"product"} className={style.cardImg}/>
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