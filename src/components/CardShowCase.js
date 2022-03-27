import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductCardHome from "./ProductCardHome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "./CardShowCase.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardShowCase = (props) => {
    let maxItemsPerPage = 4
    let cardWitdh = 225.88
    let margin = 5
    for (let i = maxItemsPerPage; i > 0; i--) {
        if ((cardWitdh + margin) * maxItemsPerPage >= (window.innerWidth * 0.8)) {
            maxItemsPerPage --
        } else break
    }

const [page, setPage] = useState(0)
let totalPage = Math.ceil(props.data.length / maxItemsPerPage)


 return (
     <div className={style.cardShowCaseContainer}>
         <div className={style.cardShowCaseTitle}>
             <h1>{props.name} <span><Link to={"/all"} className={style.seeMoreLink}>More</Link></span></h1>
         </div>
         <div className={style.pagePrevBtnWrapper}>
           <button onClick={() => {
               if (page !== 0) {
                   setPage((page - 1) % totalPage)
               } else {
                   setPage(totalPage - 1)
               }}
           } className={style.pageBtn}><FontAwesomeIcon icon={faChevronLeft}  className={style.pageBtnIcon}/></button>
         </div>
         <div className={style.cardWrapper}>
             {
                 props.data.slice(page * maxItemsPerPage,(maxItemsPerPage * (page+1))).map((card) => {
                     return (
                        <ProductCardHome key={card.id} img={card.img} name={card.name} price={card.price}/>
                     )
             })}
         </div>
         <div  className={style.pageForwardBtnWrapper}>
            <button  onClick={() => {setPage( (page + 1) % totalPage)}} className={style.pageBtn}><FontAwesomeIcon icon={faChevronRight}  className={style.pageBtnIcon}/></button>
         </div>
     </div>
 )
}

export default CardShowCase;