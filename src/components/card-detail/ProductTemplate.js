import Layout from "../Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "./CardDetails";

import style from "./ProductTemplate.module.css";
import common from "../../styles/common.module.css"
import {useNavigate, useParams} from "react-router-dom";
import CardShowCase from "../CardShowCase";
import {useEffect, useState} from "react";

import {db} from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const ProductTemplate = ({buy, bid}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      onSnapshot(doc(db, "listing", id), (doc) => {
        setData(doc.data());
      });
    }
    getData()
    return () => getData()
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

  if (data === undefined) {
    return  <Layout className={style["container"]} header footer><h1>Loading...</h1></Layout>
  }

  return (
    <Layout className={style["container"]} header footer>
      <FontAwesomeIcon icon={faChevronLeft} className={style["icon"]} onClick={() => navigate(-1)}/>
      <CardDetails id={id} name={data["product_name"]} price={data["price"]} img={data["product_image"]} description={data["product_status"]}
                   seller={card.seller} date={data["date_time"]} buy={buy} bid={bid}/>


      {/*<section className="recommendation">*/}
      {/*  <h3>RECOMMENDATION</h3>*/}
      {/*  <div className={[common["flex"], style["card-showcase"]].join(" ")}>*/}

      {/*          <CardShowCase name={"Recommendation"} data={cards} link={""}/>*/}

      {/*  </div>*/}
      {/*</section>*/}
    </Layout>
    )
}

export default ProductTemplate;