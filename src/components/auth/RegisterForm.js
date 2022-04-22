import Layout from "../../components/Layout";
import style from "./Form.module.css";
import { useState } from "react";
import { signUp } from "../../api/authentication";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";

const RegisterForm = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [title, setTitle] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);

  const handleChangeFirst = () => {
    setCheckedFirst(!checkedFirst);
  };

  const handleChangeSecond = () => {
    setCheckedSecond(!checkedSecond);
  };
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemValues: [{}],
    });
  };

  return (
    <Layout className={style["register-container"]} header footer>
      <div className={style["container"]}>
        <form className={style["form"]}>
          <h1 className={style["h1"]}>Register</h1>
          <img
            src={"../../media/icons/logo.png"}
            className={style["logo"]}
            alt={"Kronicle logo"}
          />
          <p className={style["p"]}>
            Already a member?{" "}
            <Link to="/login" className={style["a"]}>
              Sign in.
            </Link>
          </p>

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
          <label className={style["label"]}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={style["input"]}
          />
          <label className={style["label"]}>About Me</label>
          <input
            type="text"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            className={style["input"]}
          />

          <label className={style["label"]}>Email or Phone number</label>
          <input
            type="text"
            value={emailOrPhoneNumber}
            onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
            className={style["input"]}
          />

          <label className={style["label"]}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style["input"]}
          />
          <label className={style["label"]}>Verify Password</label>
          <input
            type="password"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            className={style["input"]}
          />
          <Checkbox
            label={
              <label className={style["label"]}>
                I agree to the &nbsp;
                <Link to="/tos" className={style["a"]}>
                  terms and conditions.
                </Link>
              </label>
            }
            value={checkedFirst}
            onChange={handleChangeFirst}
          />
          <Checkbox
            label={
              <label className={style["label"]}>Send me the latest deal.</label>
            }
            value={checkedSecond}
            onChange={handleChangeSecond}
          />
        </form>
        <div
          className={style["button-wrapper"]}
          onClick={() =>
            signUp(
              auth.currentUser.uid,
              fname,
              lname,
              emailOrPhoneNumber,
              title,
              aboutMe,
              password,
              verifyPassword
            )
          }
        >
          <button className={style["register-btn"]}>REGISTER</button>
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

export default RegisterForm;
