import Layout from "../../components/Layout";
import style from "./Form.module.css";
import {useEffect, useState} from "react";
import { signIn } from "../../api/authentication";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../config/firebase";

const LoginForm = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  let navigate = useNavigate();

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
    <Layout className={style["login-container"]} header footer>
      <div className={style["container"]}>
        <form className={style["form"]} onSubmit={handleSubmit}>
          <img
            src={"../../media/icons/logo.png"}
            className={style["logo"]}
            alt={"Kronicle logo"}
          />

          <h1 className={style["h1"]}>Login</h1>

          <p className={style["p"]}>
            Not a member?{" "}
            <Link to="/register" className={style["a"]}>
              Register.
            </Link>
          </p>

          <span className={style["user-input"]}>
             <label className={style["label"]}>Email</label>
          <input
            type="text"
            value={emailOrPhoneNumber}
            onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
            className={style["input"]}
          />
          </span>
          <span className={style["user-input"]}>
            <label className={style["label"]}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style["input"]}
          />
         </span>

        </form>
        <div
          className={style["button-wrapper"]}
          onClick={() => {
            signIn(emailOrPhoneNumber, password, navigate);
          }}
        >
          <button className={style["register-btn"]}>SIGN IN</button>
        </div>
      </div>
    </Layout>
  );
};

export default LoginForm;
