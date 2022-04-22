import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductCardHome from "./ProductCardHome";
import style from "./CardShowCase.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import MaxItemsPerPage from "./MaxItemsPerPage";

const CardShowCase = (props) => {
let maxCards = 4
let cardWidth = 225.88
let margin = 25
let widthPercentage = 0.75
let row = 1
let maxItemsPerPage = MaxItemsPerPage(maxCards, cardWidth, margin, widthPercentage, row)
let useText = props.useText

const [page, setPage] = useState(0)
let totalPage = Math.ceil(props.data.length / maxItemsPerPage)


 return (
     <div className={style.cardShowCaseContainer}>
         {useText ?
             <div className={style.cardShowCaseTitle}>
                 <h1>{props.name} <span><Link to={props.link} className={style.seeMoreLink}>More</Link></span></h1>
             </div>
              : null}
         <div className={style.pagePrevBtnWrapper}>
             <ToggleButton onClick={() => {
                 if (page !== 0) {
                     setPage((page - 1) % totalPage)
                 } else {
                     setPage(totalPage - 1)
                 }}
             } icon={faChevronLeft} />
         </div>
         <div className={style.cardWrapper}>
             {
                 props.data.slice(page * maxItemsPerPage,(maxItemsPerPage * (page+1))).map((card) => {
                     return (
                        <ProductCardHome key={card["id"]} id={card["id"]} img={card["product_image"]} name={card["product_name"]} price={card["price"]} product_pricing={card["product_pricing"]} />
                     )
             })}
         </div>
         <div  className={style.pageForwardBtnWrapper}>
            <ToggleButton onClick={() => {setPage( (page + 1) % totalPage)}}  icon={faChevronRight} />
         </div>
     </div>
 )
}

export default CardShowCase;