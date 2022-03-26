import React from "react";
import style from "./ProductCard.module.css"

const ProductCard = (props) => {
    return (
        <div className={style.card}>
            <div key={props.id}>
                <img src={("../media/images/product-card-placeholder.png")} alt={"product"} className={style.cardImg}/>
                <div>{props.name}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
}

export default ProductCard;