import {Link} from "react-router-dom";
import style from "./AboutUsCard.module.css";

const AboutUsCard = ({member}) => {
  return <div className={style["member-card"]}>
    <img src={member.image} alt={member.name + "'s photo"} className={style["member-img"]} />
    <h4>{member.name}</h4>
    <p>{member.position}</p>
    <button className={style["github-btn"]} onClick={() => window.open(member.github)}>GitHub</button>
  </div>
}

export default AboutUsCard

