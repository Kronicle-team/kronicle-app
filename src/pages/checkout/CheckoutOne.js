import Layout from "../../components/Layout";
import style from "./CheckoutOne.module.css";

const CheckoutOne = () => {
  const imageClick = () => {
    console.log("Click!!!!");
  };
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-1"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon1Orange.svg"}
                className={style["logo"]}
                onClick={imageClick}
              />
            </a>
            <h3 className={style["logoTextMain"]}>SHIPPING DETAILS</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} />
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-2"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon2Black.svg"}
                className={style["logo"]}
                onClick={imageClick}
              />
            </a>
            <h3 className={style["logoText"]}>PAYMENT METHOD</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} />
          <div className={style["icon-wrapper"]}>
            <a href={"check-out-3"}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon3Black.svg"}
                className={style["logo"]}
                onClick={imageClick}
              />
            </a>
            <h3 className={style["logoText"]}>CONFIRMATION</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutOne;
