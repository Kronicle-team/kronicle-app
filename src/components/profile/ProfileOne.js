import Layout from "../../components/Layout";
import style from "./Profile.module.css";

const ProfileOne = () => {
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}></div>
    </Layout>
  );
};

export default ProfileOne;
