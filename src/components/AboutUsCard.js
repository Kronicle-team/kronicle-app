import {Link} from "react-router-dom";
import style from "./AboutUsCard.module.css";

const AboutUsCard = ({member}) => {
  return (
      <div className={style["member-card"]}>
        <img src="" alt={member.name + "'s photo"} />
        <h4>{member.name}</h4>
        <p>{member.position}</p>
        <Link to={member.github}>Github</Link>
      </div>
  )
}

export default AboutUsCard