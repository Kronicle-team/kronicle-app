import style from "./ToggleButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ToggleButton = ({ icon, onClick }) => (
     <div className={style.btnWrapper}>
         <FontAwesomeIcon icon={icon} className={style.pageBtnIcon} onClick={onClick} />
     </div>
);

export default ToggleButton;