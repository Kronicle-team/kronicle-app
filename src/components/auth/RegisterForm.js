import Layout from "../../components/Layout";
import style from "./Form.module.css";
import {useEffect, useState} from "react";
import { signUp } from "../../api/authentication";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
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

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsLoading(false)
      } else {
        navigate("/")
      }
    });
    unsub()

    return () => unsub()
  }, []);

  if (isLoading) {return <div/>}

  return (
    <Layout className={style["register-container"]} header footer>
      <div className={style["container"]}>
        <form className={style["form"]}>
          <img
            src={"../../media/icons/logo.png"}
            className={style["logo"]}
            alt={"Kronicle logo"}
          />
          <h1 className={style["h1"]}>Register</h1>
          <p className={style["p"]}>
            Already a member?{" "}
            <Link to="/login" className={style["a"]}>
              Sign in.
            </Link>
          </p>

          <label className={style["label"]}>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          onClick={() => {
            signUp(email, password, verifyPassword, navigate);
          }}
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
