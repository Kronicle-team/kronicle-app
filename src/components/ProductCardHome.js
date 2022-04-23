import style from "./ProductCardHome.module.css";
import { Link } from "react-router-dom";
import { capitalizeAllWords } from "../helper/formatData";
import { useState } from "react";

const ProductCardHome = (props) => {
  const [source, setSource] = useState(props.img);
  const cardName = capitalizeAllWords(props.name);
  const path =
    props.product_pricing === "bid now"
      ? `/cards/bid/${props.id}`
      : `/cards/buy-now/${props.id}`;

  return (
    <div className={style.card}>
      <div>
        <Link to={path}>
          <div className={style.imgWrapper}>
            <img
              src={source}
              alt={"product"}
              className={style.cardImg}
              onError={() => {
                setSource("/media/images/product-card-placeholder.png");
              }}
            />
          </div>
        </Link>

        <Link to={path}>
          <h6 className={style.cardName}>{cardName}</h6>
        </Link>
        <div>{props.price.toLocaleString() + " VND"}</div>
      </div>
    </div>
  );
};

export default ProductCardHome;
