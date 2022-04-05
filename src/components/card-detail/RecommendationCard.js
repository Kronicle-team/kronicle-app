import style from "./RecommendationCard.module.css";
import {Link} from "react-router-dom";

const RecommendationCard = ({img, name, price}) => {
  return (
      <div className={style["card"]}>
        <Link to="/cards/buy-now/1">
          <img src={img} alt="photocard" className={style["img"]}/>
        </Link>
        <Link to="/cards/buy-now/1"><div className={style["card-name"]}>{name}</div></Link>
        <div>{price}</div>
      </div>
  )
}

export default RecommendationCard