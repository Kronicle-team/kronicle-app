import style from "./ToggleButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ToggleButton = ({ icon }) => (
      <FontAwesomeIcon icon={icon} className={style["btn"]} />
);

export default ToggleButton;