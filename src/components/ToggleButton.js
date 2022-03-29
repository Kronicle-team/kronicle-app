import style from "./ToggleButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ToggleButton = ({ icon, onClick }) => (
      <FontAwesomeIcon icon={icon} className={style.pageBtnIcon + " " + style.pageBtn} onClick={onClick} />
);

export default ToggleButton;