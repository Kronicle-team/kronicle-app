import Layout from "../../components/Layout";
import style from "./SellerProfile.module.css";

const SellerProfile = () => {
  const data = [{ cards: "21", followers: 238, rating: "97%" }];
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["profile-header"]}>
          <img
            src={"../../media/images/profile/gdragon.jpg"}
            className={style["avatar"]}
            alt={"Avatar"}
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

          <div className={style["button-wrapper"]}>
            <button className={style["follow-button"]}>Follow</button>
            <button className={style["message-button"]}>Message</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellerProfile;
