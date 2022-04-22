import Layout from "../../components/Layout";
import style from "./Form.module.css";
import { useState } from "react";
import { pushData, signUp } from "../../api/authentication";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
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

          <h1 className={[style["h1"], style["extra-info"]].join(" ")}>
            Tell us more about yourself
          </h1>

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
          <label className={style["label"]}>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={style["input"]}
          />
          <label className={style["label"]}>About Me</label>
          <textarea
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              className={[style["input"], style["input-aboutme"]].join(" ")}
              rows={5}
          />
        </form>
        <div
          className={style["button-wrapper"]}
          onClick={() => {
            pushData(fname, lname, phoneNum, address, aboutMe, navigate);
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
