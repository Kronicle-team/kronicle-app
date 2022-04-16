import React, {useEffect} from "react";
import style from "./ProductCardHome.module.css"
import {Link} from "react-router-dom";

const ProductCardHome = (props) => {
    return (
        <div className={style.card} >
            <div key={props.id}>
                <Link to={props.productLink}>
                    <div className={style.imgWrapper}>
                        <img src={props.img} alt={"product"} className={style.cardImg}/>
                    </div>
                    <div>{props.name}</div>
                    <div>{props.price} VND</div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCardHome;