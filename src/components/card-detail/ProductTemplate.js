import Layout from "../Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "./CardDetails";
import RecommendationCard from "./RecommendationCard";

import style from "./ProductTemplate.module.css";
import common from "../../styles/common.module.css"
import { useNavigate } from "react-router-dom";
import CardShowCase from "../CardShowCase";
import React from "react";

const ProductTemplate = ({buy, bid}) => {
  const navigate = useNavigate();
  const card = {
    name: "Han Sooyoung's fansign card",
    price: "110,000 VND",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hahah ahahah Lorem ipsum dolor sit amet" +
        " consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "/media/images/placeholder-612x612.jpg",
    seller: {
      avatar: "/media/images/placeholder-612x612.jpg",
      name: "Neyra Elena Darcy"
    }
  }
  const cards = [
    {
      id: 1,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 2,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 3,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 4,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 5,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 6,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    }
  ]

    return (
    <Layout className={style["container"]} header footer>
      <FontAwesomeIcon icon={faChevronLeft} className={style["icon"]} onClick={() => navigate(-1)}/>
      <CardDetails name={card.name} price={card.price} img={card.img} description={card.description}
                   seller={card.seller} buy={buy} bid={bid}/>


      <section className="recommendation">
        <h3>RECOMMENDATION</h3>
        <div className={[common["flex"], style["card-showcase"]].join(" ")}>

                <CardShowCase name={"Recommendation"} data={cards} link={""}/>

        </div>
      </section>
    </Layout>
    )
}

export default ProductTemplate;