import Layout from "../../components/Layout";
import style from "./MyAccount.module.css";
import { useState } from "react";

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
            />
            <div className={style["name"]}>G-Dragon</div>
            <div>100% new authenticated cards</div>
            <div>I live in Korea</div>

            <table className={style["statistics"]}>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <th>{val.cards}</th>
                    <th>{val.followers}</th>
                    <th>{val.rating}</th>
                  </tr>
                );
              })}
              <tr>
                <td>cards</td>
                <td>followers</td>
                <td>Positive seller ratings</td>
              </tr>
            </table>
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
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={style["input"]}
              />
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={style["input"]}
              />
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={style["input"]}
              />
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style["input"]}
              />
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
            <input
              type="text"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              className={style["about-me"]}
              placeholder={"Hello"}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className={style["logout-button"]}>LOG OUT</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAccount;
