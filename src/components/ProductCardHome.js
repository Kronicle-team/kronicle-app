import React from "react";
import style from "./ProductCardHome.module.css"

const ProductCardHome = (props) => {
    return (
        <div className={style.card}>
            <div key={props.id}>
                <img src={props.img} alt={"product"} className={style.cardImg}/>
                <div>{props.name}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
}

export default ProductCardHome;