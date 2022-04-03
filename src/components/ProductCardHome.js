import React from "react";
import style from "./ProductCardHome.module.css"

const ProductCardHome = (props) => {
    return (
        <div className={style.card}>
            <div key={props.id}>
                <img src={("../media/images/product-card-placeholder.png")} alt={"product"} className={style.cardImg}/>
                <h5>{props.name}</h5>
                <div>{props.price}</div>
            </div>
        </div>
    )
}

export default ProductCardHome;