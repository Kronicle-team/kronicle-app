import Layout from "../../components/Layout";
import style from "./RegisterForm.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
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
    const Checkbox = ({label, value, onChange}) => {
        return (
            <label>
                <input type="checkbox" checked={value} onChange={onChange}/>
                {label}
            </label>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemValues: [{}]
        });
    };

    return (
        <Layout className={style["register-container"]} header footer>
            <div className={style["container"]}>
            <form className={style["form"]} onSubmit={handleSubmit}>
                <h1 className={style["h1"]}>Register</h1>
                <img
                    src={"../../media/icons/logo.png"}
                    className={style["logo"]}
                    alt={"Kronicle logo"}
                />
                <p className={style["p"]}>Already a member? <Link to="/login" className={style["a"]}>Sign in.</Link></p>
                <label className={style["label"]}>Email or Phone number</label>
                <input
                    type="text"
                    value={emailOrPhoneNumber}
                    onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                    className={style["input"]}
                />
                <label className={style["label"]}>Full Name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    label={<label className={style["label"]}>I agree to the &nbsp;<Link to="/tos" className={style["a"]}>terms and conditions.</Link></label>}
                    value={checkedFirst}
                    onChange={handleChangeFirst}
                />
                <Checkbox
                    label={<label className={style["label"]}>Send me the latest deal.</label>}
                    value={checkedSecond}
                    onChange={handleChangeSecond}
                />
            </form>
            <div className={style["button-wrapper"]}>
                <Link to="/"><button className={style["register-btn"]}>REGISTER</button></Link>
                <button type="submit" className={style["clear-btn"]} onClick={handleReset}>CLEAR</button>
            </div>
            </div>
        </Layout>
    );
};

export default RegisterForm;