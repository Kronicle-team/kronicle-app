import Layout from "../../components/Layout";
import style from "./CheckoutThree.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {auth} from "../../config/firebase";


const CheckoutThree = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
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
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/Tick.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
            <h3 className={style["logoTextMain"]}>SHIPPING DETAILS</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt={"Line"} />
          <div className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/Tick.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
            <h3 className={style["logoTextMain"]}>PAYMENT METHOD</h3>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt={"Line"} />
          <div className={style["icon-wrapper"]}>
            <Link to="/check-out-3">
              <img
                src={"../../media/icons/checkout/CheckoutIcon3Peach.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
            </Link>
            <h3 className={style["logoTextMain"]}>CONFIRMATION</h3>
          </div>
        </div>
        <div className={style["confirm-wrapper"]}>
          <img
            src={"../../media/images/checkout/GreenTick.png"}
            alt={"Green tick"}
          />
          <h2>Payment complete</h2>
          <div className={style["text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            imperdiet ultricies orci, a luctus lorem convallis ac. Donec cursus
            fermentum ligula non consectetur. Morbi fermentum tempus porttitor.
            Donec eu malesuada dui, eget tincidunt orci. Quisque a metus quis
            augue semper lobortis. Etiam dignissim eget ante sed gravida.
          </div>
          <Link to="/">
            <button className={style["back-button"]}>BACK TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutThree;
