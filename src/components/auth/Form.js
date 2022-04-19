import Layout from "../../components/Layout";
import style from "./RegisterForm.module.css";
import { useState } from "react";
import { pushData, signUp } from "../../api/authentication";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemValues: [{}],
    });
  };
  let navigate = useNavigate();

  return (
    <Layout className={style["register-container"]} header footer>
      <div className={style["container"]}>
        <form className={style["form"]}>
          <img
            src={"../../media/icons/logo.png"}
            className={style["logo"]}
            alt={"Kronicle logo"}
          />

          <h1 className={style["h1"]}>Form</h1>

          <div className={style["name-wrapper"]}>
            <div>
              <label className={style["label"]}>First Name</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className={style["input"]}
              />
            </div>
            <div>
              <label className={style["label"]}>Last Name</label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className={style["input"]}
              />
            </div>
          </div>
          <label className={style["label"]}>Phone Number</label>
          <input
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            className={style["input"]}
          />
          <label className={style["label"]}>About Me</label>
          <input
            type="text"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            className={style["input-aboutme"]}
          />
        </form>
        <div
          className={style["button-wrapper"]}
          onClick={() => {
            pushData(fname, lname, phoneNum, aboutMe, navigate);
          }}
        >
          <button className={style["register-btn"]}>SUBMIT</button>
          <button
            type="submit"
            className={style["clear-btn"]}
            onClick={handleReset}
          >
            CLEAR
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
