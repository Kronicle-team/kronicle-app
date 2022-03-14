import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion, faCommentDots} from "@fortawesome/free-solid-svg-icons";

const FaqSection = ({question, answer}) => {
  return (
      <div>
        <p>
          <FontAwesomeIcon icon={faCircleQuestion}/> : {question}
        </p>
        <p><FontAwesomeIcon icon={faCommentDots}/> : {answer}
        </p>
      </div>
  )
}

export default FaqSection