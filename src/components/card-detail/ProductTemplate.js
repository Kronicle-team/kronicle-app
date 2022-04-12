import Layout from "../Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "./CardDetails";

import style from "./ProductTemplate.module.css";
import common from "../../styles/common.module.css"
import { useNavigate } from "react-router-dom";
import CardShowCase from "../CardShowCase";
import {useEffect, useState} from "react";

import {db} from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const ProductTemplate = ({buy, bid}) => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    onSnapshot(doc(db, "listing", "PLjR9uEgPGvEqtt1yQIm"), (doc) => {
      setData(doc.data());
      console.log(data)
    });
  }, [])

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
      name: "Go Junho's special card 1",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 2,
      name: "Go Junho's special card 2",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 3,
      name: "Go Junho's special card 3",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 4,
      name: "Go Junho's special card 4",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 5,
      name: "Go Junho's special card 5",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    },
    {
      id: 6,
      name: "Go Junho's special card 6",
      price: "120,000 VND",
      img: "/media/images/placeholder-612x612.jpg"
    }
  ]

  if (data === undefined) {
    return <h1>Loading...</h1>
  }


  return (
    <Layout className={style["container"]} header footer>
      <FontAwesomeIcon icon={faChevronLeft} className={style["icon"]} onClick={() => navigate(-1)}/>
      <CardDetails name={data["product_name"]} price={data["min_price"] + " VND"} img={card.img} description={data["product_status"]}
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