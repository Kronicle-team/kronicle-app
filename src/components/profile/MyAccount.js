import Layout from "../../components/Layout";
import style from "./MyAccount.module.css";
import { useState } from "react";
import {Link} from "react-router-dom";

const MyAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const data = [{ cards: "21", followers: 238, rating: "97%" }];
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <h1 style={{ textAlign: "center" }}>MY ACCOUNT</h1>
        <div className={style["profile-and-info"]}>
          <div className={style["profile-wrapper"]}>
            <img
              src={"../../media/images/profile/gdragon.jpg"}
              className={style["avatar"]}
              alt={"Avatar"}
            />
            <div className={style["name"]}>G-Dragon</div>
            <div className={style["bio-p"]}>
              <p>100% new authenticated cards</p>
              <p>I live in Korea</p>
            </div>

            {/*<table className={style["statistics"]}>*/}
            {/*  {data.map((val, key) => {*/}
            {/*    return (*/}
            {/*      <tr key={key}>*/}
            {/*        <th>{val.cards}</th>*/}
            {/*        <th>{val.followers}</th>*/}
            {/*        <th>{val.rating}</th>*/}
            {/*      </tr>*/}
            {/*    );*/}
            {/*  })}*/}
            {/*  <tr>*/}
            {/*    <td>cards</td>*/}
            {/*    <td>followers</td>*/}
            {/*    <td>Positive seller ratings</td>*/}
            {/*  </tr>*/}
            {/*</table>*/}
            <button className={style["button"]}>Upload your avatar</button>
          </div>

          <div className={style["vertical-line"]} />

          <div className={style["info"]}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>BASIC INFO</h4>
              <div className={style["button-wrapper"]}>
                <button className={style["cancel-button"]}>CANCEL</button>
                <button className={style["save-button"]}>SAVE</button>
              </div>
            </div>
            <hr style={{ border: "1px solid #858585" }} />
            <form className={style["form"]}>
              <label>First Name</label>
              <div className={style["input"]}>This is first name</div>
              <label>Last Name</label>
              <div className={style["input"]}>This is last name</div>
              <label>Title</label>
              <div className={style["input"]}>This is title</div>
              <label>Email</label>
              <div className={style["input"]}>This is email</div>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <h4>ABOUT ME</h4>
            </div>
            <hr style={{ border: "1px solid #858585" }} />
            <div className={style["input"]}>This is about me</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/login">
                <button className={style["logout-button"]}>LOG OUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
