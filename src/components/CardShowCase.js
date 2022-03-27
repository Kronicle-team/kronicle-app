import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProductCard from "./ProductCard";
import ToggleButton from "./ToggleButton";
import style from "./CardShowCase.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardShowCase = (props) => {
    let maxItemsPerPage = 4
 if (window.innerWidth < 1270) {
     maxItemsPerPage--
 }
 if (window.innerWidth < 962) {
     maxItemsPerPage--
 }
 if (window.innerWidth < 655) {
     maxItemsPerPage--
 }

const [page, setPage] = useState(0)
let totalPage = Math.ceil(props.data.length / maxItemsPerPage)

 return (
     <div className={style.cardShowCaseContainer}>
         <div className={style.cardShowCaseTitle}>
             <h1>{props.name} <span><Link to={"/all"} className={style.seeMoreLink}>See more</Link></span></h1>
         </div>
         <div className={style.prevBtn}>
           <button onClick={() => {setPage( (page - 1) % totalPage)}}><ToggleButton icon={faChevronLeft} /></button>
         </div>
         <div className={style.cardWrapper}>
             {
                 props.data.slice(page * maxItemsPerPage,(maxItemsPerPage * (page+1))).map((card) => {
                     console.log("page: " + page)
                     console.log("card id: " + props.data.indexOf(card))
                     return (
                        <ProductCard key={card.id} img={card.img} name={card.name} price={card.price}/>
                     )
             })}
         </div>
         <div  className={style.forwardBtn}>
            <button  onClick={() => {setPage( (page + 1) % totalPage)}}><ToggleButton icon={faChevronRight}/></button>
         </div>
     </div>
 )
}

export default CardShowCase;