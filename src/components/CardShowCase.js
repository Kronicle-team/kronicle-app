import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductCard from "./ProductCard";
import ToggleButton from "./ToggleButton";
import style from "./CardShowCase.module.css";

const CardShowCase = (props) => {
 return (
     <div>
         <p>{props.name}</p>
         <div className={style.cardShowCaseContainer}>
            <ToggleButton icon={faChevronLeft} className={style.prevBtn}/>
             <div className={style.cardWrapper}>
                {props.data.map((card) => {
                    return (
                        <ProductCard key={card.id} img={card.img} name={card.name} price={card.price}/>
                    )
                })}
             </div>
            <ToggleButton icon={faChevronRight} className={style.forwardBtn}/>
         </div>
     </div>
 )
}

export default CardShowCase;