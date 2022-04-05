import Layout from "../../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "../../components/card-detail/CardDetails";
import RecommendationCard from "../../components/card-detail/RecommendationCard";

const ProductBuyNowPage = () => {
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
    <Layout header footer>
    <FontAwesomeIcon icon={faChevronLeft} />
      <CardDetails />
        

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