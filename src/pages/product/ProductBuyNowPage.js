import Layout from "../../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "../../components/card-detail/CardDetails";
import RecommendationCard from "../../components/card-detail/RecommendationCard";

import style from "./ProductBuyNowPage.module.css";

const ProductBuyNowPage = () => {
  const card = {
    name: "Han Sooyoung's fansign card",
    price: "110,000 VND",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hahah ahahah Lorem ipsum dolor sit amet" +
        " consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "../../media/images/placeholder-612x612.jpg",
    seller: {
      avatar: "../../media/images/placeholder-612x612.jpg",
      name: "Neyra Elena Darcy"
    }
  }
  const cards = [
    {
      id: 1,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "../../media/images/placeholder-612x612.jpg"
    },
    {
      id: 2,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "../../media/images/placeholder-612x612.jpg"
    },
    {
      id: 3,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "../../media/images/placeholder-612x612.jpg"
    },
    {
      id: 4,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "../../media/images/placeholder-612x612.jpg"
    },
    {
      id: 5,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "../../media/images/placeholder-612x612.jpg"
    },
    {
      id: 6,
      name: "Go Junho's special card",
      price: "120,000 VND",
      img: "../../media/images/placeholder-612x612.jpg"
    }
  ]

    return (
    <Layout className={style["container"]} header footer>
    <FontAwesomeIcon icon={faChevronLeft} />
      <CardDetails name={card.name} price={card.price} img={card.img} description={card.description} seller={card.seller} />
        

    <section className="recommendation">
      <FontAwesomeIcon icon={faChevronLeft} />
      {cards.map(card => {
        return (<RecommendationCard key={card.id} img={card.img} name={card.name} price={card.price}/>)
      })}
      <FontAwesomeIcon icon={faChevronRight} />
    </section>
    </Layout>
    )
}

export default ProductBuyNowPage;